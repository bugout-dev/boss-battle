var Character = require("./character");
var Troll = require("./troll");
var Battle = require("./battle")

const charList = [];
for (let i = 0; i < 3; i++) {
  const char = new Character(4, i);
  charList.push(char);
}

const troll = new Troll(60, 6);

const battle = new Battle(troll, charList);
battle.printBattle();
battle.fightRound();
