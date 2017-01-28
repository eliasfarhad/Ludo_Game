# Ludo Game

A multiplayer dice rolling Board Game

Ludo is a board game for two to four players in which the players race their "Tokens" from start to finish according to
dice rolls. Like other cross and circle games, Ludo is derived from the Indian game Pachisi, but simpler. The game and its 
variants are popular in many countries and under various names.

#This Program

In this program we assumed two players are playing the game (a small modification can make this program to allow four
players).

Every player would start playing the game at the same time form position 0 on the Board. In each dice rolling round every player in general will have just one chance to roll the dice. The dice value would then be added to the last location and the player would achieve a new location. 

But if the player hits a Six, he would get a bonus chance to roll the dice. If the player hits one more Six during the bonus roll, he will roll again. Every player can have a maximum of 2 Six and a dice value of less than six during the third roll. If a player hits 3 Sixes in a row, the dice value for the entire round would be spoiled/destroyed, but since the player has hit a Six during the third roll, he will roll again from the beginning.

Whoever reaches HOME (100th box) first, is the winner. 

A player must be EXACTLY at location 100 (HOME) to win. Any dice value that takes a player outside of the board 
(total location goes beyond 100) will be rejected and the player would remain in his last location.

