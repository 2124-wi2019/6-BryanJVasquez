/*
Bryan Vasquez
Vasquez_a06b.js
INFO 2124
Thoendel
01/25/2020
*/

//winning numbers: 22, 42, 43, 47, 61;

let lottoPicks = [];
let powerBallPick = getLottoNumber(); 
let winnings = 0; 

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
while (lottoPicks.length < 5) { 
    console.log(lottoPicks.push(getLottoNumber()));    
}
console.log(lottoPicks);

for (p = 0; lottoPicks.length > p; p++) {
   
    switch (lottoPicks[p]) {
        case 22:
            winnings += 10
        break;
        case 42:
            winnings += 10
        break;
        case 43:
            winnings += 10
        break;
        case 47:
            winnings += 10
        break;
        case 61:
            winnings += 10
        break;
        case powerBallPick:
            winnings += 100          
    }
    console.log(winnings);
        if (winnings !== 0){
             console.log(`Congratulations! You won $${winnings}!`);
             break;
         }
        else {
             console.log("Sorry, you didn't win anything. Better luck next time!");
             
         }
        
}

    
/* AND THIS LINE */

function getLottoNumber() {
    //returns a random number between 1 and 100;
    const min = Math.ceil(1);       //Minimum value;
    const max = Math.floor(100);    //Maximum value;
    return Math.floor(Math.random() * (max - min)) + min;
}