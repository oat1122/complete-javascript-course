"use strict";

// function oattest() {
//     console.log("oatoatotestste")
// }

// oattest()


// function juOatTest(num1, num2) {
//     console.log(`Oat Is ${num1} Maja oioi ${num2}`)
//     const sum = num1 + num2
//     return sum
// }


// console.log(juOatTest(1, 2))



// function oatTest(n1, n2) {
//     const sum = n1 + n2
//     return sum
// }
// const sumOut = oatTest(20, 30)
// console.log(sumOut)


// const oatFuunTion = (n1, n2) => {
//     const sum = n1 + n2

//     console.log(sum)
// }

// oatFuunTion(2, 3)


// const oatFuunTion = (birthYeath, falstName) => {
//     const age = 2022 - birthYeath
//     const retirement = 65 - age
//     console.log(`Your's name ${falstName} amd age ${age} Youre's retirement is ${retirement} yesh`)
// }

// console.log(oatFuunTion(2002, 'ost'))



// function cutFruitPirees(fruit) {
//     return fruit * 4
// }


// function fruitProcesssor(appler, oranges) {
//     const applerPrices = cutFruitPirees(appler)
//     const orangesPricer = cutFruitPirees(oranges)
//     const juju = `Youre's appler price is ${applerPrices} Your's otanges Prices is ${orangesPricer}`
//     return juju
// }
// console.log(fruitProcesssor(2, 3))



let calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(65, 54, 49)


function checkWinner(scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= 2 * scoreKoalas) {
        return (`Dolphins win (${scoreDolphins} VS ${scoreKoalas}) `)
    } else if (scoreKoalas >= 2 * scoreDolphins) {
        return (`Dolphins win (${scoreKoalas} VS ${scoreDolphins}) `)
    } else {
        console.log("No team wins...");
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));
