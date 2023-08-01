function Troll(maxHP, attackPower) {
  this._maxHP = maxHP;
  this._hp = maxHP;
  this._attackPower = attackPower;
  this._mode = 0;
};

Troll.prototype.getHP = function () {
    return this._hp;
};

Troll.prototype.setHP = function(hp) {
  if (hp > this._mapHP) {
    this._hp = this._mapHP;
  } else {
    this._hp = hp;
  }
}

Troll.prototype.getAttackPower = function() {
  console.log("Mode is: " + this._mode);
  if (this._mode == 2) {
    return Math.floor(this._attackPower / 2);
  } else {
    return this._attackPower;
  }
}

Troll.prototype.getAttackCount = function() {
  if (this._mode == 1) {
    return 2;
  } else {
    return 1;
  }
}

Troll.prototype.getAttackMode = function () {
  return this._mode;
}

Troll.prototype.setAttackMode = function(mode) {
  this._mode = mode;
}

Troll.prototype.takeDamage = function(damage) {
  if (this._mode == 2) {
    damage = Math.floor(damage / 2);
  }
  this._hp -= damage;
}

Troll.prototype.isDead = function() {
  return this._hp <= 0;
};

Troll.prototype.toString = function() {
  return `HP = ${this._hp}/${this._maxHP}, Attack = ${this._attackPower}`;
}

module.exports = Troll;
