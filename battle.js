var types = require("./types");
var random = require("./random");
const Character = require("./character");

function Battle(troll, characterList) {
  this._troll = troll;
  this._characterList = characterList;
  this._numChars = characterList.length;
  this._criticallyWounded = [];
  this._round = 0;
};

Battle.prototype.getTroll = function () {
    return this._troll
};

Battle.prototype.getCharacters = function() {
    return this._characterList;
}

Battle.prototype.fightRound = function() {
  this._round++;
  this.log(`<Round ${this._round} >`);
  this.ensureAction();
  var priority = this.rollPriority();
  if (priority) {
    this.charactersAttack();
    if (this.getResult() == 0) this.trollAttacks();
  } else {
    this.trollAttacks();
    if (this.getResult() == 0) this.charactersAttack();
  }
  this.log(`<Round ${this._round} />`);
  this.log(" ");
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

Battle.prototype.trollAttacks = function () {
  for (let i = 0; i < this._troll.getAttackCount(); i++) {
    this.singleTrollAttack();
  }
}

Battle.prototype.singleTrollAttack = function() {
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

  for (let m = 0; m < bucket.length; m++) {
    const index = bucket[m];
    const char = this._characterList[index];
    const damageTaken = char.assessDamage(baseDamage);
    this.log(char.getName(), "takes damage of", damageTaken);
  }

  this.disableCriticallyWounded();
  this.printBattle();
}

Battle.prototype.disableCriticallyWounded = function() {
  for (let i = this._characterList.length - 1; i >= 0; i--) {
    const char = this._characterList[i];
    if (char.isCriticallyWounded()) {
      this._criticallyWounded.push(char);
      this._characterList.splice(i, 1);
      this._numChars--;
    }
  }
};

Battle.prototype.getResult = function() {
  if (this._troll.isDead()) {
    return 1;
  } else if (this._characterList.length == 0) {
    return 2;
  } else {
    return 0;
  }
};

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
  this.log("<Battle State>");
  this.log("Troll: ", this._troll.toString());
  this.log("Active characters: ");
  for (let i = 0; i < this._numChars; i++) {
    var char = this._characterList[i]
    this.log(`${char.getName()}: ${char.getStatus()}`);
  }
  const strCritWounded = this._criticallyWounded.map((char) => char.getName()).join(", ")
  this.log("Critcally wounded characters:", strCritWounded);
  this.log("</Battle State>");
};

Battle.prototype.printResult = function() {
  switch (this.getResult()) {
    case 0:
      this.log("The battls is in progress.");
      break;
    case 1:
      this.log("The heroes killed the troll.");
      break;
    case 2:
      this.log("The troll killed the heroes.");
      break;
    default:
      console.log("An error occured processing the battle result.");
    break;
  }
};

// Battle.prototype.serialize = function() {
//   return JSON.stringify(this);
// }

module.exports = Battle;