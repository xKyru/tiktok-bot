const PLAYER_NAME = "NotKyru"; // Nombre estático del jugador

const GIFT_TO_COMMAND = new Map([
  ["rose", {
    type: "summon",
    command: `/execute at ${PLAYER_NAME} run summon creeper ~2 ~2 ~`,
    message: `§rte mandó §6§lCreeper x1`
  }],
  ["finger heart", {
    type: "give",
    command: `/execute at ${PLAYER_NAME} run give ${PLAYER_NAME} golden_apple 1`,
    message: `§rte mandó §6§lManzana dorada x1`
  }],
  ["doughnut", {
    type: "other",
    command: `/execute at ${PLAYER_NAME} run summon vex ~2 ~2 ~ {CustomName:[{text:${PLAYER_NAME}}],Tags:["tiktok"],equipment:{mainhand:{id:iron_sword}}}`,
    message: `§rte mandó §6§lVex x1`
  }],
  ["corgi", {
    type: "other",
    command: `/execute at ${PLAYER_NAME} run summon wither ~3 ~3 ~ {CustomName:"${PLAYER_NAME}"}`,
    message: `§rte mandó §6§lWither x1`
  }],
  ["you're awesome", {
    type: "summon",
    command: `/execute at ${PLAYER_NAME} run summon cave_spider ~2 ~2 ~`,
    message: `§rte mandó §6§lAraña de cueva x1`
  }],
  ["galaxy", {
    type: "other",
    command: `/execute at ${PLAYER_NAME} run summon ender_dragon ~ ~10 ~ {DragonPhase:0, CustomName:"{${PLAYER_NAME}}"}`,
    message: `§rte mandó §6§lEnderdragón x1`
  }],
  ["follow", {
    type: "give",
    command: `/execute at ${PLAYER_NAME} run give ${PLAYER_NAME} cooked_beef 1`,
    message: `§rte mandó §6§lFilete asado x1`
  }],
  ["like", {
    type: "summon",
    command: `/execute at ${PLAYER_NAME} run summon zombie ~2 ~2 ~`,
    message: `§rte mandó §6§lZombie x1`
  }],
  ["money gun", {
    type: "other",
    command: `/execute at ${PLAYER_NAME} run clear ${PLAYER_NAME}`,
    message: `§6§lLimpió tu inventario`
  }],
  ["mishka bear", {
    type: "other",
    command: `/execute at ${PLAYER_NAME} run summon tnt ~ ~ ~ {fuse:60,Passengers:[{id:tnt,fuse:40,Passengers:[{id:tnt,fuse:20}]}]}`,
    message: `§rte mandó §6§lTNT`
  }],
  ["friendship necklace", {
    type: "summon",
    command: `/execute at ${PLAYER_NAME} run summon sheep ~1 ~1 ~`,
    message: `§rte mandó §6§l Oveja multicolor x1`
  }],
  ["wave firework", {
    type: "other",
    command: `/execute at Player599 run summon firework_rocket ~ ~1 ~ {LifeTime:25,FireworksItem:{id:firework_rocket,count:1,components:{fireworks:{flight_duration:2,explosions:[{shape:\"large_ball\",has_twinkle:0,has_trail:1,colors:[I;8073150,14188952],fade_colors:[I;14188952]},{shape:\"star\",has_twinkle:0,has_trail:1,colors:[I;14602026],fade_colors:[I;15790320]}]}}}}`,
    message: `§rte mandó §6§l Fuegos artificiales`
  }],
  ["little crown", {
    type: "other"
  }],
  ["bubblegum", {
    type: "other"
  }],
  // Puedes agregar más regalos aquí
]);

const EFFECTS = [
  {
    id: "speed",
    name: "Velocidad",
    duration: 30
  },
  {
    id: "slowness",
    name: "Lentitud",
    duration: 30
  },
  {
    id: "haste",
    name: "Prisa",
    duration: 30
  },
  {
    id: "mining_fatigue",
    name: "Fatiga de minería",
    duration: 30
  },
  {
    id: "strength",
    name: "Fuerza",
    duration: 30
  },
  {
    id: "instant_health",
    name: "Salud instantánea",
    duration: 30
  },
  {
    id: "instant_damage",
    name: "Daño instantáneo",
    duration: 30
  },
  {
    id: "jump_boost",
    name: "Salto mejorado",
    duration: 30
  },
  {
    id: "nausea",
    name: "Náuseas",
    duration: 30
  },
  {
    id: "regeneration",
    name: "Regeneración",
    duration: 30
  },
  {
    id: "resistance",
    name: "Resistencia",
    duration: 30
  },
  {
    id: "fire_resistance",
    name: "Resistencia al fuego",
    duration: 30
  },
  {
    id: "water_breathing",
    name: "Respiración acuática",
    duration: 30
  },
  {
    id: "invisibility",
    name: "Invisibilidad",
    duration: 30
  },
  {
    id: "blindness",
    name: "Ceguera",
    duration: 30
  },
  {
    id: "night_vision",
    name: "Visión nocturna",
    duration: 30
  },
  {
    id: "hunger",
    name: "Hambre",
    duration: 30
  },
  {
    id: "weakness",
    name: "Debilidad",
    duration: 30
  },
  {
    id: "poison",
    name: "Veneno",
    duration: 30
  },
  {
    id: "wither",
    name: "Decaimiento",
    duration: 30
  },
  {
    id: "health_boost",
    name: "Aumento de salud",
    duration: 30
  },
  {
    id: "absorption",
    name: "Absorción",
    duration: 30
  },
  {
    id: "saturation",
    name: "Saturación",
    duration: 30
  },
  {
    id: "glowing",
    name: "Brillo",
    duration: 30
  },
  {
    id: "levitation",
    name: "Levitación",
    duration: 30
  },
  {
    id: "luck",
    name: "Suerte",
    duration: 30
  },
  {
    id: "unluck",
    name: "Mala suerte",
    duration: 30
  },
  {
    id: "slow_falling",
    name: "Caída lenta",
    duration: 30
  },
  {
    id: "conduit_power",
    name: "Poder de conduit",
    duration: 30
  },
  {
    id: "dolphins_grace",
    name: "Gracia de delfín",
    duration: 30
  },
  {
    id: "bad_omen",
    name: "Mal presagio",
    duration: 30
  },
  {
    id: "hero_of_the_village",
    name: "Héroe de la aldea",
    duration: 30
  },
  {
    id: "darkness",
    name: "Oscuridad",
    duration: 30
  },
  {
    id: "infested",
    name: "Infestado",
    duration: 30
  },
  {
    id: "oozing",
    name: "Supuración",
    duration: 30
  },
  {
    id: "weaving",
    name: "Tejido",
    duration: 30
  },
  {
    id: "wind_charged",
    name: "Cargado de viento",
    duration: 30
  },
  {
    id: "raid_omen",
    name: "Presagio de incursión",
    duration: 30
  },
  {
    id: "trial_omen",
    name: "Presagio de prueba",
    duration: 30
  }
];

const ITEMS = [
  {
    id: "axolotl_bucket",
    name: "Cubo con ajolote",
    quantity: 1
  },
  {
    id: "carrot",
    name: "Zanahoria",
    quantity: 3
  },
  {
    id: "egg",
    name: "Huevo",
    quantity: 3
  },
  {
    id: "ender_pearl",
    name: "Perla de ender",
    quantity: 1
  },
  {
    id: "potato",
    name: "Papa",
    quantity: 3
  },
  {
    id: "water_bucket",
    name: "Cubo de agua",
    quantity: 1
  },
  {
    id: "lava_bucket",
    name: "Cubo de lava",
    quantity: 1
  },
  {
    id: "bread",
    name: "Pan",
    quantity: 3
  },
  {
    id: "cookie",
    name: "Galleta",
    quantity: 3
  },
  {
    id: "iron_axe",
    name: "Hacha de hierro",
    quantity: 1
  },
  {
    id: "iron_boots",
    name: "Botas de hierro",
    quantity: 1
  },
  {
    id: "iron_chestplate",
    name: "Pechera de hierro",
    quantity: 1
  },
  {
    id: "iron_helmet",
    name: "Casco de hierro",
    quantity: 1
  },
  {
    id: "iron_hoe",
    name: "Azada de hierro",
    quantity: 1
  },
  {
    id: "iron_leggings",
    name: "Grebas de hierro",
    quantity: 1
  },
  {
    id: "iron_pickaxe",
    name: "Pico de hierro",
    quantity: 1
  },
  {
    id: "iron_shovel",
    name: "Pala de hierro",
    quantity: 1
  },
  {
    id: "iron_sword",
    name: "Espada de hierro",
    quantity: 1
  },
  {
    id: "rotten_flesh",
    name: "Carne podrida",
    quantity: 5
  },
  {
    id: "spider_eye",
    name: "Ojo de araña",
    quantity: 5
  },
  {
    id: "totem_of_undying",
    name: "Tótem de la inmortalidad",
    quantity: 1
  },
  {
    id: "wheat",
    name: "Trigo",
    quantity: 4
  },
  {
    id: "diamond",
    name: "Diamante",
    quantity: 1
  },
  {
    id: "emerald",
    name: "Esmeralda",
    quantity: 2
  },
  {
    id: "feather",
    name: "Pluma",
    quantity: 3
  },
  {
    id: "lapis_lazuli",
    name: "Lapislázuli",
    quantity: 10
  },
  {
    id: "stick",
    name: "Palo",
    quantity: 4
  },
  {
    id: "coal",
    name: "Carbón",
    quantity: 8
  },
  {
    id: "pink_bed",
    name: "Cama rosa",
    quantity: 1
  },
  {
    id: "anvil",
    name: "Yunque",
    quantity: 1
  },
  {
    id: "sugar_cane",
    name: "Caña de azúcar",
    quantity: 1
  },
  {
    id: "bookshelf",
    name: "Librería",
    quantity: 1
  },
  {
    id: "chest",
    name: "Cofre",
    quantity: 1
  },
  {
    id: "cherry_sign",
    name: "Cartel de cerezo",
    quantity: 1
  },
  {
    id: "crafting_table",
    name: "Mesa de trabajo",
    quantity: 1
  },
  {
    id: "grass_block",
    name: "Bloque de hierba",
    quantity: 14
  },
  {
    id: "melon",
    name: "Sandía",
    quantity: 1
  },
  {
    id: "zombie_head",
    name: "Cabeza de zombi",
    quantity: 1
  },
  {
    id: "pumpkin",
    name: "Calabaza",
    quantity: 1
  },
  {
    id: "wither_rose",
    name: "Rosa del wither",
    quantity: 1
  },
  {
    id: "tnt",
    name: "Dinamita",
    quantity: 1
  },
  {
    id: "torch",
    name: "Antorcha",
    quantity: 2
  },
  {
    id: "raw_gold",
    name: "Oro en bruto",
    quantity: 4
  },
  {
    id: "raw_copper",
    name: "Cobre en bruto",
    quantity: 5
  },
  {
    id: "raw_iron",
    name: "Hierro en bruto",
    quantity: 5
  },
  {
    id: "white_wool",
    name: "Lana",
    quantity: 3
  }
];

export {
  GIFT_TO_COMMAND,
  EFFECTS,
  ITEMS,
  PLAYER_NAME
}


function obtenerIndiceAleatorio(arreglo) {
  if (!Array.isArray(arreglo) || arreglo.length === 0) {
    throw new Error("El argumento debe ser un arreglo no vacío");
  }
  
  return Math.floor(Math.random() * arreglo.length);
}