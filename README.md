# boss-battle
Simulate or execute a boss battle based on combat mechanics described below.

## Run frontend

```
node ./app.js
```

## Mechanics

Troll Battle

Stages

Stage One: Choose an attribute
Each player picks one attribute that suits their character. The attribute comes with a buff to its corresponding statistic.

Stage Two: Choose an item
Each player picks up a weapon or healing item to carry into battle. The item also buffs one of the player’s statistics. 

Stages Three+: Choose an action
Each player chooses to attack, evade, or heal. We post new stages in this format until the troll is dead or all of the players have been incapacitated.

Notes
The lore for stages four+ will include a report of what happened in the previous combat stage.
The game is open to players who didn’t play “The Troll Problem.” Their characters were passing by, heard the noise, and came to help out. Or perhaps they’ve been tracking this troll for a while, now….
A player who joins the game after stage two will have to fight without any items or buffs.
The items in stage two can be tokens if we want players to keep them permanently–but they are, by design, pretty worthless.


Combat

Choose an action: To begin each combat stage, players choose an action.

Roll for fate: The GM makes two d20 rolls for fate, the first on behalf of the players and the second on behalf of the troll. 

The party with the higher roll for fate has the initiative in this stage, meaning that their attacks and healing resolve first. (Evade happens simultaneously with an opponent’s attack and is not affected by initiative.)

An extremely high or low fate roll causes an extra event which may interfere with the combat. For example, if the troll rolls a 1 for fate, he might drop his club and do no damage that round. If the players roll a 20, lightning might strike the troll, or they might find a useful item on the ground.

Resolve attacks: Attacks and healing are then resolved in order of initiative. 
 
Troll roll: The GM rolls for two numbers on behalf of the troll each round, aim and ferocity. The troll fights with a huge club and a chaotic swing, so he has a lot of power, but he sometimes misses, buffing evades. The troll does 10 damage to the players per round, distributed evenly. In the case of a remainder…we could do individual fate rolls to see who is unlucky enough to take the extra damage?

Rolls for buffs: Some players have buffs that replace their default stat with a d4 roll. The GM will roll in the course of calculating those players’ attacks.


Statistics 		

Troll
Health: 40 
Attack: 10 

Should players know the troll’s health, or should it be hidden? Maybe they just get hints through the descriptions of his wounds and reactions? 

Player (default)
Health: 4	The player can take 3 damage before being critically wounded.
Attack: 1 	Deals 1 damage per stage when choosing the “Attack” path.
Evade: 1	Avoids 1 damage per stage when choosing the “Evade” path.
Heal: 0		Heals 0 damage per stage when choosing the “Heal” path.
Fate: 0		Adds 0 points to the fate roll in each stage.

Notes: 
When a player reaches 1 health, they are critically wounded and must withdraw from combat, i.e., they are not eligible to choose paths in subsequent combat rounds. No players die in this game. If a critically wounded player makes a path choice, the GM will not factor it into the statistics for that round. Critically wounded players should not unstake, though, as they will have a chance to claim a reward in the final stage.
Troll damage applies to all players equally. In the case of a remainder….
Healing is distributed one point at a time. The point goes to the player with the lowest health.
It is hard to control how long the combat will last. It would be possible to design a party that could heal forever but never kill the troll. The troll could be killed in 2 rounds with perfect fate and attack rolls by a party of maxed-out fighters, but such a party also has a higher chance of dying quickly. The fate rolls can be used to modify the combat length (if there are high/low rolls); we can also have the troll collapse at a certain point and give the players new choices about how to proceed. 


Attributes
Attributes replace the default statistic with the result of a d4 roll

Fighting prowess (buffs Attack)	You are strong, or have combat training, or carry a nifty						weapon.
Knowledge of healing (buffs Heal)  You are a healer or an herbalist or have picked up some 						basic skills along the way.					
Agility/Stealth (buffs Evade)		You are good at sneaking and dodging; or you are often 						overlooked; or you are both clumsy and lucky and trip at the 					right times.
Good fortune (buffs Fate)		You tend to be lucky. Is this because of a charm? A					 		religious affiliation? A prophecy? Maybe others don’t even						believe you, but they’ll be glad you are with them today.


Items
Items add one point to the default statistic. Armor buff applies whether or not ‘evade’ is chosen.

Weapon: +1 to Attack		(bent pitchfork, broken sword, table leg, frying pan)
Healing item: +1 to Health	(lumpy bandage roll, slightly crushed herbs, foul-smelling salve)
Armor: +1 to Evade		(battered shield, bucket helmet, blacksmith’s apron, work gloves) 
Charm: +1 to Fate roll		(tin amulet; pickled pit bat wing; creepy rag doll; mysterious tooth)

(List several options in the lore for each path. After selecting a path, players can say in the chat what specifically they picked up. E.g., a player chooses the ‘weapon’ path and then says that they picked up a broken sword.)

Rewards
XP; medal; allowed to keep items; other gifts from the village; favor from queen; etc. How will we handle it if the party fails?

Chat extras
Players can specify in the chat what their default attack looks like: A punch? Throwing a book? They can also specify a default evade, if that is not determined by an item such as a shield, and methods of healing and manipulating fate.

Which item did you pick up?

Players can decide on battle cries in the chat :) 

Unused ideas
Modifiers to troll attack: + ferocity; - aim (swinging club wildly)
Troll health based on number of players


Lore

Session Lore
We interrupt the Reda Games to fight a troll.

Stage One
The negotiations have failed. The troll’s footsteps shake the walls of the meeting hut. It’s dinner time, and you are on the menu. You must face him now, or the whole village will be devoured.

Several council members look ill at the thought. “I don’t fight!” one protests. “I command!” 

“I never even wanted this job!” his neighbor moans. 

The troll does not care.

Get ready to fight: Choose the attribute that best describes how your character contributes to combat situations. 

Stage Two
The growls of a ravenous troll fill the air. You run out of the meeting hut. The troll is stomping through the field beyond the village, waving an enormous club in the air. 

“Get the children inside!” someone shouts. “And whoever can fight–get ready!”

“Here, take these!” calls another voice. A peasant woman dashes up to the council with a bundle of tools and other items. 

“And these!” Another woman comes racing from her cottage, cradling an assortment of bottles and bandages in the folds of her apron. “Ida, grab the pitchforks!”

More villagers dash up to toss items onto the pile. It’s not much, but it’s better than nothing. It’s probably everything they have. 

And not a moment too soon. The troll has reached the first cottage. The villagers in the square behind you dive for cover as he demolishes the thatched roof with one swing of his club, spattering the onlookers with straw and mud. He reaches inside, rummaging about for a human snack. You hear a child’s high-pitched shriek from within the cottage. 

Go time. You wipe the muck from your face, run to the paltry pile of supplies, and hurriedly grab…what?

Stage 3
[You’ve never actually seen a troll before. He….]

Stage 4+
Lore-em ipsum

Reward stage


Reporting Template



Notes
Balancing: Troll could have extra actions/abilities tied to particular circumstances. Gain an evade mechanism at a certain health level. Extra hit (fist vs club) when a certain gap between troll health and player health. Troll HP scaled to number of players, player attack pts, etc. Troll gets bonus action when players have initiative. (Fate is fickle.)

Extremely low troll fate role: drop club (new attack value); struck by lightning (damage to troll)

Extremely high troll fate roll/extremely low player fate role: club slams into ground and players drop weapons; club bounces and hits a second time; sickened by troll breath (could reduce either attack or health)

Extremely high player fate role: get a minion (extra NPC attack each stage) (troll enrages nearby swarm of bees); find a powerful weapon or healing item

Reactions: (Double goal: balance the combat and characterize the troll)
Allergy to healing items; sneezes; roll to see if you drop weapons
Reaction to taking a certain amount of damage: staggers and steps on a player (they take damage or drop item)
Takes hostages: uses villagers as shield; decide whether to attack this round (rolls for accuracy?)
Reaction to taking very little damage or dealing a lot: troll gloats and dances in celebration; trips over a villager’s hut and takes damage or gets stuck and has to roll for aim next round. Or splashes mud in own eyes, rolls for aim.
Fearsome roar: terrifies people so much that their attributes switch–fighters paralyzed, healers filled with adrenaline, fate flees the lucky but goes to someone nearby, etc.

Stops for a snack: feeling secure in the way the battle is going, the troll stops to try to munch on some villagers, doesn’t swing club in this round (but eats a villager if players don’t hit hard enough to distract him)

Reactions for when players forget to play a stage or new players join? Maybe the gloating should be a reaction for players not showing up, and he gets distracted/annoyed when new players join

Publish stats and rules before the fight. Troll reactions should remain secret. Include their existence in the description, but not the statistics. (I can time-stamp a pdf or something to show that I didn’t make changes and release it after the battle.)



