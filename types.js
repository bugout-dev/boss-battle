var random = require("./random");

// Attibutes
const STR = "Fighting Prowess";
const INT = "Knowledge of healing";
const AGI = "Agility/Stealth";
const LUCK = "Good fortune";

// Equipment
const SWORD = "Weapon";
const STAFF = "Healing item";
const ARMOR = "Armor";
const CHARM = "Charm";

// Action
const ATTACK = "Attack";
const HEAL = "Heal";
const EVADE = "Evade";
const PASS = "Pass";

const ATTRIBUTES = [STR, INT, AGI, LUCK];
const EQUIPMENT = [SWORD, STAFF, ARMOR, CHARM];
const ACTIONS = [ATTACK, HEAL, EVADE, PASS];

const NAMES = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"
        , "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra",
        "Tango", "Uniform", "Victor", "Whiskey", "Xray", "Yankee", "Zulu"];

const randomAttribute = () => {
  const rand = random.randomInt(ATTRIBUTES.length);
  return ATTRIBUTES[rand];
};

const randomEquipment = () => {
  const rand = random.randomInt(EQUIPMENT.length);
  return EQUIPMENT[rand];
};

const randomAction = () => {
    // Random action shouldn't be PASS.
    const rand = random.randomInt(ACTIONS.length - 1);
    return ACTIONS[rand];
};

module.exports = {
  STR: STR,
  INT: INT,
  AGI: AGI,
  LUCK: LUCK,
  SWORD: SWORD,
  STAFF: STAFF,
  ARMOR: ARMOR,
  CHARM: CHARM,
  ATTACK: ATTACK,
  HEAL: HEAL,
  EVADE: EVADE,
  ATTRIBUTES: ATTRIBUTES,
  EQUIPMENT: EQUIPMENT,
  ACTIONS: ACTIONS,
  NAMES: NAMES,
  randomAttribute: randomAttribute,
  randomEquipment: randomEquipment,
  randomAction: randomAction,
};