import { TikTokLiveConnection, WebcastEvent, WebcastGiftMessage } from 'tiktok-live-connector';
import axios from 'axios';
import { GIFT_TO_COMMAND, ITEMS, EFFECTS, PLAYER_NAME } from './gifts.js';

// Configuración
const TIKTOK_USERNAME = "iamalexiss"; // Reemplaza con tu @usuario
const PORT = process.env.PORT || 3000;
const SERVER_URL = process.env.SERVER_URL || `http://localhost:${PORT}/trigger`;

const tiktok = new TikTokLiveConnection(TIKTOK_USERNAME);

const userLikeCounts = {};

function obtenerIndiceAleatorio(arreglo) {
  if (!Array.isArray(arreglo) || arreglo.length === 0) {
    throw new Error("El argumento debe ser un arreglo no vacío");
  }

  return Math.floor(Math.random() * arreglo.length);
}


tiktok.on(WebcastEvent.GIFT, async data => {

  const giftName = data.giftDetails.giftName.toLowerCase();
  // const giftData = GIFT_TO_COMMAND[giftName];
  const giftData = GIFT_TO_COMMAND.get(giftName);

  if (!giftData) {
    console.log(`🎁 Regalo no reconocido: ${giftName}. Ignorando...`);
    return; // Salir si el regalo no está en nuestro mapeo
  }

  try {
    const gifter = data.user.nickname;

    let payload;

    if (giftName.includes("friendship necklace")) {
      gifter = "jeb_";
      payload = {
        ...giftData,
        user: gifter,
      };
    } else if (giftName.includes("little crown")) {
      const efecto = EFFECTS[obtenerIndiceAleatorio(EFFECTS)];
      const efectoDuracion = efecto.duration;
      const efectoNombre = efecto.name;
      const efectoEfecto = efecto.id;

      const command = `/execute at ${PLAYER_NAME} run effect give ${PLAYER_NAME} ${efectoEfecto} ${efectoDuracion} 0`

      payload = {
        ...giftData,
        user: gifter,
        command,
        message: `§r te mandó §6§l${efectoNombre}`
      };
    } else if (giftName.includes("bubblegum")) {
      const item = ITEMS[obtenerIndiceAleatorio(ITEMS)];
      const itemQty = item.quantity;
      const itemNombre = item.name;
      const itemItem = item.id;

      const command = `/execute at ${PLAYER_NAME} run give ${PLAYER_NAME} ${itemItem} ${itemQty}`;

      payload = {
        ...giftData,
        user: gifter,
        command,
        message: `te mandó §6§l ${itemNombre} x${itemQty}`
      }
    } else {
      payload = {
        ...giftData,
        user: gifter,
      };
    }



    await axios.post(SERVER_URL, { data: payload });
    console.log(`🎁 ${gifter} envió ${giftName} -> Ejecutando: ${payload.command}`);
  } catch (error) {
    console.error("Error al enviar el comando:", error.message);
  }
});

tiktok.on(WebcastEvent.LIKE, async data => {
  // Verificar si existe información del usuario

  const userId = data.user.userId;
  const username = data.user.nickname || `Usuario#${userId.substring(0, 4)}`; // Fallback si no hay nickname
  const likeCount = data.likeCount;
  const giftData = GIFT_TO_COMMAND.get('like');

  // Inicializar el contador si es la primera vez del usuario
  if (!userLikeCounts[userId]) {
    userLikeCounts[userId] = {
      count: 0,
      username: username
    };
  }

  // Sumar los likes
  userLikeCounts[userId].count += likeCount;

  // Verificar si alcanzó 100 likes
  if (userLikeCounts[userId].count >= 100) {
    try {
      const userLiked = data.user.nickname;

      const payload = {
        ...giftData,
        user: userLiked
      };

      await axios.post(SERVER_URL, { data: payload });
      console.log(`🎁 ${userLiked} ha dado 100 likes -> Ejecutando: ${payload.command}`);
    } catch (error) {
      console.error("Error al enviar el comando:", error.message);
    }
    // Resetear el contador (opcional)
    userLikeCounts[userId].count = 0;
  }
});


tiktok.on(WebcastEvent.FOLLOW, async data => {
  // const giftData = GIFT_TO_COMMAND[giftName];
  const giftData = GIFT_TO_COMMAND.get('follow');

  if (!giftData) {
    console.log(`🎁 Regalo no reconocido: ${giftName}. Ignorando...`);
    return; // Salir si el regalo no está en nuestro mapeo
  }

  try {
    const follower = data.user.nickname;

    const payload = {
      ...giftData,
      user: follower
    };

    await axios.post(SERVER_URL, { data: payload });
    console.log(`🎁 ${follower} empezó a seguir -> Ejecutando: ${payload.command}`);
  } catch (error) {
    console.error("Error al enviar el comando:", error.message);
  }

});


tiktok.on('connected', () => {
  console.log("✅ Conectado a TikTok Live!");
});

tiktok.connect();