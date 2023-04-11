function Troll(maxHP, attackPower) {
  this._maxHP = maxHP;
  this._hp = maxHP;
  this._attackPower = attackPower;
};

Troll.prototype.getHP = function () {
    return this._hp;
};

Troll.prototype.getAttackPower = function() {
  return this._attackPower;
}

Troll.prototype.takeDamage = function(damage) {
  this._hp -= damage;
}

Troll.prototype.toString = function() {
  return `HP = ${this._hp}/${this._maxHP}, Attack = ${this._attackPower}`;
}

module.exports = Troll;
