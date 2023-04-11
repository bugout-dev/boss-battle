var Character = require("./character");
var Troll = require("./troll");
var Battle = require("./battle")

// TODO: Allow users to import battle state.
// TODO: Allow users to explicitly set character actions instead of choosing them randomly.
// TODO: Allow users to ask for "smart" actions rather than random actions.
// TODO: Simulate N battles and summarize results.

const charList = [];
for (let i = 0; i < 3; i++) {
  const char = new Character(4, i);
  charList.push(char);
}

const troll = new Troll(60, 6);

const battle = new Battle(troll, charList);
battle.printBattle();
battle.fightRound();
