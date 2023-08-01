var types = require("./types");
var random = require("./random");
const { type } = require("express/lib/response");

function Character(maxHP, name, attribute, item) {
  if (!isNaN(name)) {
    name = types.NAMES[name]
  }
  this._name = name;
  this._mapHP = maxHP;
  this._hp = maxHP;
  this.setAttribute(attribute);
  this.setEquipment(item);
};

Character.prototype.getHP = function() {
  return this._hp;
};

Character.prototype.setHP = function(hp) {
  if (hp < 1) {
    this._hp = 1;
  } else if (hp > this._mapHP) {
    this._hp = this._mapHP;
  } else {
    this._hp = hp;
  }
};

Character.prototype.getName = function() {
  return this._name;
};

Character.prototype.getAttribute = function () {
    return this._attribute
};

Character.prototype.setAttribute = function(attribute) {
  if (attribute >= 0 && attribute < 4) {
    this._attribute = types.ATTRIBUTES[attribute];
  } else {
    this._attribute = types.randomAttribute();
  }
};

Character.prototype.getEquipment = function() {
  return this._equipment;
};

Character.prototype.setEquipment = function(item) {
  if (item >= 0 && item < 4) {
    this._equipment = types.EQUIPMENT[item];
  } else {
    this._equipment = types.randomEquipment();
  }
};

Character.prototype.getAction = function(action) {
  return this._action;
};

Character.prototype.setAction = function(action) {
  if (action >= 0 && action < 4) {
    this._action = types.ACTIONS[action];
  } else {
    this._action = types.randomAction();
  }
};

Character.prototype.unsetAction = function() {
  this._action = undefined;
};

Character.prototype.getStatus = function() {
  return `HP: ${this._hp}/${this._mapHP}, Spec: ${this._attribute}, Item: ${this._equipment}, Action: ${this._action}`
};

Character.prototype.rollPriority = function() {
  return (this._attribute == types.LUCK ? 1 + random.randomInt(4) : 0) + (this._equipment == types.CHARM ? 1 : 0);
}

Character.prototype.maxRoll = function() {
  // Makes luck specializations more useful.
  return 4 + 
         (this._attribute == types.LUCK ? 1 : 0) + 
         (this._equipment == types.CHARM ? 1 : 0);
}

Character.prototype.damageRange = function() {
  const min = 1 + (this._attribute == types.STR) + (this._equipment == types.SWORD);
  return {
    min: min,
    max: min + this.maxRoll() - 1,
  }
}

Character.prototype.healingRange = function() {
  const min = (this._attribute == types.INT ? 1 : 0) + (this._equipment == types.STAFF ? 1 : 0);
  return {
    min: min,
    max: min + this.maxRoll() - 1,
  }
}

Character.prototype.evasionRange = function() {
  const min = 1 + (this._attribute == types.AGI ? 1 : 0) + (this._equipment == types.ARMOR ? 1 : 0);
  return {
    min: min,
    max: min + this.maxRoll() - 1,
  }
}

Character.prototype.actionRoll = function() {
  return 1 + random.randomInt(this.maxRoll());
}

Character.prototype.rollAttackDamage = function() {
  return this.actionRoll() +
         (this._attribute == types.STR ? 1 : 0) +
         (this._equipment == types.SWORD ? 1 : 0);
}

Character.prototype.rollHealing = function() {
  return this.actionRoll() - 1 +
         (this._attribute == types.INT ? 1 : 0) +
         (this._equipment == types.STAFF ? 1 : 0);
}

Character.prototype.rollEvasion = function() {
  return this.actionRoll() +
         (this._attribute == types.AGI ? 1 : 0) +
         (this._equipment == types.ARMOR ? 1 : 0);
}

Character.prototype.assessDamage = function(damage) {
  var damageToAssign = damage;
  if (this._action == types.EVADE) {
    const evadeValue = this.rollEvasion();
    damageToAssign = Math.max(0, damageToAssign - evadeValue);
  } else if (this._equipment == types.ARMOR) {
    // Armor should work even when not evading.
    damageToAssign = Math.max(0, damageToAssign - 1);
  }
  if (damageToAssign > 0) {
    this._hp = Math.max(this._hp - damageToAssign, 1);
  }
  return damageToAssign;
}

Character.prototype.isCriticallyWounded = function() {
  return this._hp <= 1;
};

Character.distributeHealing = function(characterList, healing) {
  random.shuffleArray(characterList);
  const sortedByHP = Character.sortByHP(characterList);
  Character.distHealRecursive(sortedByHP, healing);
};

Character.distHealRecursive = function(characterList, healing) {
  if (characterList.length == 0) return;
  const minHP = characterList[0].getHP();
  var i = 0;
  while (i < characterList.length && characterList[i].getHP() == minHP && healing > 0) {
    characterList[i].setHP(minHP + 1);
    healing--;
    i++;
  }; 
  if (healing > 0) {
    Character.distHealRecursive(characterList, healing);
  }
};

Character.sortByHP = function(characterList) {
  return characterList.sort(Character.compareHP);
};

Character.compareHP = function(a, b) {
  return a.getHP() - b.getHP();
};

module.exports = Character;
