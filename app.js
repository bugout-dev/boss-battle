var Character = require("./character");
var Troll = require("./troll");
var Battle = require("./battle")
var types = require("./types");

const prompt = require('prompt-sync')({sigint: true});
const fs = require('fs');

// TODO: Allow users to import battle state.
// TODO: Allow users to explicitly set character actions instead of choosing them randomly.
// TODO: Allow users to ask for "smart" actions rather than random actions.
// TODO: Simulate N battles and summarize results.

const troll = new Troll(100, 17);
troll.setHP(17);

// const luckChar = new Character(10, "Luck", 3, 3);
// const rollCounts = [0, 0, 0, 0, 0 ,0];
// for (let i = 0; i < 1000; i++) {
//   const roll = luckChar.rollEvasion();
//   rollCounts[roll-1]++;
// }
// console.log(rollCounts);

const charList = [];
const numChars = prompt("Number of characters? ");
// * Fox: HP: 5/10
// * Grad: HP: 5/10
// * Hedda: HP: 6/10
// * Kai: HP: 6/10
// * Kirby: HP: 7/10
// * Maiz: HP: 5/10
// * Sanik: HP: 7/10
const characterHPs = [5, 5, 3, 3, 5, 6, 6];
for (let i = 0; i < numChars; i++) {
  console.log(`Character ${i}:`);
  const name = prompt("Name? ");
  const attr = prompt("Attribute (0 = Fighting Prowess, 1 = Knowledge of Healing, 2 = Agility/Stealth, 3 = Good Fortune) ? ");
  const item = prompt("Item (0 = Weapon, 1 = Healing Item, 2 = Armor, 3 = Charm) ? ");
  const char = new Character(10, name, attr, item);
  char.setHP(characterHPs[i]);
  charList.push(char);
}

const battle = new Battle(troll, charList);
battle.printBattle();
// console.log(" ");
// fs.writeFileSync("battle.txt", battle.serialize());

// console.log(battle.serialize());

const runRound = function () {
  battle.getCharacters().forEach((char) => {
    var dRange = char.damageRange();
    var hRange = char.healingRange();
    var eRange = char.evasionRange();
    var action = prompt(`Select action for ${char.getName()} (0 = Attack [${dRange.min} - ${dRange.max} damage], 1 = Heal [${hRange.min} - ${hRange.max} party healing], 2 = Evade [${eRange.min} - ${eRange.max} damage mitigation], 3 = Pass): `);
    char.setAction(action);
  });
  
  console.log(" ");
  var mode = prompt("Troll attack mode? (0 = normal, 1= berserk, 2=defensive");
  troll.setAttackMode(mode);

  battle.fightRound();
};

while (battle.getResult() == 0) {
  runRound();
}

battle.printResult();

