When a box is clicked, we mark it with X and O respectively. The marking starts with X
and switches to O on the next click. We handle this switch with lastUsedLetter
state in app.js. On every marking, we put the letter in the trackOfLetters array in accordance with it's box number which we handle with key state in app.js.

We initiate the array with 9 items at the begining so we can place the letters in
their respective places.

trackOfLetters array initally looks like this: [0,1,2,3,4,5,6,7,8]

Let's image this scenario:
--> player 1 marks box number 2 with X (counting the box numbers horizontally )
--> player 2 marks box number 5 with O
--> player 1 marks box number 3 with X
--> player 2 marks box number 7 with O

in this case,trackOfLetters array would look like this: [0,X,X,3,O,5,O,7,8]

during this, we control the array with checkWinner function to see if any letter
lines-up in a winning order that is defined by winningIndexOrders array.

Let's continue the scenario and image that player 1 makes the winning move:
--> player 1 marks box number 1 with X

in this case box number 1, number 2 and number 3 is X and trackOfLetters array looks like this : [X,X,X,3,O,5,O,7,8]

Let's check if the order of letter X is satisfying any condition in winningIndexOrders
array

const winningIndexOrders = [
[0, 1, 2], <--------
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

Indeed, indexes of letter X in the array are 0,1,2, so player 1 wins!

if there is no winner even after all boxes are marked with letters, we declare no winner.
