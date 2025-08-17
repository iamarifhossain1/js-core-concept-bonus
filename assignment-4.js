/** Assignment - 4 Task -1 */

function totalFine(fare) {
    if(typeof fare !== 'number') {
        return 'Invalid'
    }

    let ticketPrice = fare;
    const surCharge = fare * 0.2;
    const serviceCharge = 30;
    const totalTicketPrice = ticketPrice + surCharge + serviceCharge;
    return totalTicketPrice
}


const fareOutput = totalFine ('7zeozero');
console.log(fareOutput);


/** Assignment - 4 Task -2 */

function onlyCharacter(str) {
    let result = '';
    if (typeof str !== 'string') {
        return 'Invalid'
    }

    for(const char of str) {
        if (char !== ' ') {
            result = result + char;
        }
    }

    return result.toUpperCase();
}

const characterOutput = onlyCharacter('Cy   bar- At  tac k');
console.log(characterOutput);

/** Assignment - 4 Task - 3 */

function  bestTeam(player1, player2) {
    if (typeof player1 !== 'object' && typeof player2 !== 'object') {
        return 'Invalid'
    }

    const team1 = player1.foul + player1.cardY + player1.cardR;
    const team2 = player2.foul + player2.cardY + player2.cardR;

    if (team1 < team2) {
        return player1;
    }

    else if (team2 < team1) {
        return team2;
    }

    else { 
        return 'Tie'
    }
}

const playerOutput = bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
{ name: "Argentina", foul: 7, cardY: 0, cardR: 0 });
console.log(playerOutput);


function isSame(number1, number2) {
    if(!Array.isArray(number1) || !Array.isArray(number2)){
        return 'Invalid'
    }

    if (number1.length !== number2.length) {
        return false;
    }

    for (let i = 0; i < number1.length; i++) {
        if (number1[i] !== number2[i]){
            return false;
        }
    }

    return true;
}

const sameOutput = isSame([1,23,3], [1,2,3])
console.log(sameOutput);



function  resultReport( marks ) {
    if (!Array.isArray(marks)) {
        return 'Invalid'
    }

    if (marks.length === 0) {
        return { finalScore: 0 , pass: 0, fail: 0 };
    }

    let total = 0;
    let passCount = 0;
    let failCount = 0;

    for (let mark of marks) {
        if (mark >= 40) {
            passCount++
        }

        else {
            failCount++
        }
    }

    const average = total / marks.length;
    return {
        finalScore: average,
        pass: passCount,
        fail: failCount
    }
}

const markOutput = resultReport([98, 87, 67, 91, 92, 33, 87]);
console.log(markOutput);

