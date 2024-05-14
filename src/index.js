function validateWord(s) {

    let occurrences = {}

    for (let char of s) {
        if (occurrences[char]) {
            occurrences[char]++
        } else {
            occurrences[char] = 1
        }
    }

    for (let char in occurrences) {
        if (occurrences[char] !== s.length) {
            return false
        }
    }

    return true
}

function isItLetter(character) {

    const regex = /^[a-zA-Z]+$/

    return regex.test(character)

}

const isItLetter = (character) => {

    for (const leter of character) {

        if (!(leter >= 'a' && leter <= 'z') &&
            !(leter >= 'A' && leter <= 'Z')) {
            return false
        }
    }
    return true
}

function matrix(array) {

    array.forEach((row, rowIndex) => {
        row.forEach((el, colIndex) => {
            if (rowIndex === colIndex) {
                array[rowIndex][colIndex] = el < 0 ? 0 : 1
            }
        })
    })

    return array

}

const solution = mtrx => {


    const directions = {
        '<': { row: 0, col: -1 }, //left
        '>': { row: 0, col: 1 }, // right
    }

    const target = 'x'

    //primero loop para recorrer los arrays

    mtrx.forEach((arr, rowIndex) => {
        //segundo loop para recorrer los datos de cada array
        arr.forEach((el, colIndex) => {
            //ahora queremos saber si la x y las direcciones estan en la misma fila y columna 
            if ((rowIndex === colIndex) && (directions === target)) {
                //ahora queremos saber si la direccion apunta a la x 

            }
        })
    })

}

function histogram(results) {

    let histogramString = ''

    results.forEach((count, value) => {
        if (value > 0) {

            histogramString = + (value + 1) + '|'
            histogramString = + '#'.repeat(count) + ' ' + count + '/n'
        }
    })

    return histogramString

}

function cogRpm(cogs, n) {

    const directions = {
        'left': -1,
        'right': 1,
    }

    let arrayRpm = []

    if (cogs.length === 0) {
        return [0, 0]
    }

    const firstCog = cogs[0]
    const lastCog = cogs[cogs.length - 1]
    const rpm = firstCog * Math.pow(2, n) / lastCog
    arrayRpm.push(firstCog)


    return arrayRpm
}

// no two cogs share the same shaft
// return an array whose two elements are RPM of the first and last cogs respectively
// use negative numbers for anti - clockwise rotation
// for convenience n is zero - based

const rps = (p1, p2) => {

    if (p1 === 'scissors' && p2 === 'paper') {
        return 'Player 1 won!'
    }
    else if (p1 === 'scissors' && p2 === 'rock') {
        return 'Player 2 won!'
    }
    else if (p1 === 'paper' && p2 === 'rock') {
        return 'Player 1 won!'
    }
    else if (p1 === 'paper' && p2 === 'scissors') {
        return 'Player 2 won!'
    }
    else if (p1 === 'rock' && p2 === 'scissors') {
        return 'Player 1 won!'
    }
    else if (p1 === 'rock' && p2 === 'paper') {
        return 'Player 2 won!'
    }
    else {
        return 'Draw!'
    }

}

const well = x => {
    let goodSum = 0

    x.forEach((el) => {
        if (el === 'good') {
            goodSum++
        }
    })
    if (goodSum === 0) {
        return 'Fail!'
    }
    else if (goodSum > 2) {
        return 'I smell a series!'
    }
    else {
        return 'Publish!'
    }
}
function well(x) {


}
function isValid(formula) {
    let hasMaterial56 = false;
    let hasMaterial78 = false;

    formula.forEach(material => {

        if ((material === 1 && formula.includes(2)) ||
            (material === 2 && formula.includes(1)) ||
            (material === 3 && formula.includes(4)) ||
            (material === 4 && formula.includes(3))) {
            return false; // Materials 1 and 2, or 3 and 4 cannot be selected together
        }

        if ((material === 5 && !formula.includes(6)) ||
            (material === 6 && !formula.includes(5))) {
            hasMaterial56 = false; // Materials 5 and 6 must be selected together
        }

        if (material === 7 || material === 8) {
            hasMaterial78 = true; // At least one of material 7 or 8 must be selected
        }
    })

    return hasMaterial78
}

; // Return true if at least one of materials 7 or 8 is selected


function rpsls(pl1, pl2) {

    if (pl1 === pl2) {
        return "Draw!"
    }
    let rules = {
        scissors: ['paper', 'lizard'],
        paper: ['rock', 'spock'],
        rock: ['lizard', 'scissors'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock'],
        scissors: 'lizard',
    }

    if (rules[pl1].includes(pl2)) {
        return "Player 1 Won!"
    }

    else {
        return "Player 2 won!"
    }
}

return rules[pl1].includes(pl2) ? "Player 1 Won!" : "Player 2 won!" : "Draw!"





// Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

//     Inputs
// Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

function cantor(nestedList) {

    let result = []

    nestedList.forEach((el, index) => {
        result.push(el[index] === 0 ? 1 : 0)
    })
    return result

}