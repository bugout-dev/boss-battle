var types = require("./types");
var random = require("./random");
const Character = require("./character");

function Battle(troll, characterList) {
  this._troll = troll;
  this._characterList = characterList;
  this._numChars = characterList.length;
  this._criticallyWounded = [];
};

Battle.prototype.getTroll = function () {
    return this._troll
};

Battle.prototype.getCharacters = function() {
    return this._characterList;
}

Battle.prototype.fightRound = function() {
  this.ensureAction();
  var priority = this.rollPriority();
  if (priority) {
    this.charactersAttack();
    this.trollAttacks();
  } else {
    this.trollAttacks();
    this.charactersAttack();
  }
}

Battle.prototype.ensureAction = function() {
  for (let i = 0; i < this._characterList.length; i++) {
    const char = this._characterList[i];
    if (!char.getAction()) {
      char.setAction(types.randomAction());
    }
  }
};

Battle.prototype.charactersAttack = function() {
  this.log("Characters attack...")
  var characterDamage = 0;
  var characterHealing = 0;
  for (let i = 0; i < this._characterList.length; i++) {
    const char = this._characterList[i];
    const action = char.getAction();
    if (action == types.ATTACK) {
      const dmg = char.rollAttackDamage();
      this.log(char.getName(), "deals damage of ", dmg);
      characterDamage += dmg;
    } else if (action == types.HEAL) {
      const heal = char.rollHealing();
      this.log(char.getName(), "heals for ", heal);
      characterHealing += heal;
    } else if (action == types.EVADE) {
      this.log(char.getName(), "evades")
    } else if (action == types.PASS) {
      this.log(char.getName(), "passes")
    }
  }
  this.log("Total damage is", characterDamage);
  this._troll.takeDamage(characterDamage);
  this.log("Total healing is", characterHealing);
  Character.distributeHealing(this._characterList, characterHealing);
  this.printBattle();
}

Battle.prototype.trollAttacks = function() {
  // TODO: Rewrite to not overkill players and waste troll damage.
  this.log("Troll attacks...");
  const attackPower = this._troll.getAttackPower()
  const baseDamage = Math.floor(attackPower / this._numChars);
  const extraDamage = attackPower % this._numChars;
  this.log("Base damage is", baseDamage);
  this.log("Extra damage is", extraDamage);

  var bucket = [];

  for (let i = 0; i < this._numChars; i++) {
      bucket.push(i);
  }

  for (var j = 0; j < extraDamage; j++) {
    const rand = random.randomInt(bucket.length);
    const index = bucket.splice(rand, 1)[0];
    const char = this._characterList[index];
    const damageTaken = char.assessDamage(baseDamage + 1);
    this.log(char.getName(), "takes damage of", damageTaken);
  }

  Battle.prototype.disableCriticallyWounded = function() {
    // TODO: Move critically wounded players from _characterList to _critcallyWounded.
  };

  for (let m = 0; m < bucket.length; m++) {
    const index = bucket[m];
    const char = this._characterList[index];
    const damageTaken = char.assessDamage(baseDamage);
    this.log(char.getName(), "takes damage of", damageTaken);
  }

  this.printBattle();
}

Battle.prototype.rollPriority = function() {
  var trollPriority = 1 + random.randomInt(20);
  this.log("Troll prio: ", trollPriority);
  var characterPriority = 1 + random.randomInt(20);
  this.log("Character base prio: ", characterPriority);
  for (let i = 0; i < this._numChars; i++) {
    const char = this._characterList[i];
    const charBoost = char.rollPriority();
    this.log(char.getName(), "gives prio boost of", charBoost);
    characterPriority += charBoost;
  }
  this.log("Characters final prio: ", characterPriority);
  var priority = characterPriority > trollPriority;
  this.log(priority ? "Characters attack first." : "Troll Attacks first.");
  return priority;
}

Battle.prototype.log = function(...messages) {
  // TODO: Optionally write battle to file.
  console.log(...messages);
};

Battle.prototype.printBattle = function() {
  this.log("*** Battle State ***");
  this.log("Troll: ", this._troll.toString());
  for (let i = 0; i < this._numChars; i++) {
    var char = this._characterList[i]
    this.log(`${char.getName()}: ${char.getStatus()}`);
  }
  this.log("*** ***")
}

module.exports = Battle;