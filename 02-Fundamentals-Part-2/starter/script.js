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



// let calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3

// const scoreDolphins = calcAverage(44, 23, 71)
// const scoreKoalas = calcAverage(65, 54, 49)


// function checkWinner(scoreDolphins, scoreKoalas) {
//     if (scoreDolphins >= 2 * scoreKoalas) {
//         return (`Dolphins win (${scoreDolphins} VS ${scoreKoalas}) `)
//     } else if (scoreKoalas >= 2 * scoreDolphins) {
//         return (`Dolphins win (${scoreKoalas} VS ${scoreDolphins}) `)
//     } else {
//         console.log("No team wins...");
//     }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const bill = [125, 555, 44]

// const calcTip = function (bill) {
//     return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
// }
// const tip = bil

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)


// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }


// console.log(calcTip(100))

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(bills, tips, totals)




// const bills = [125, 555, 44];

// const tips = bills.map(bill => calcTip(bill))


// const totals = bills.map((bill, index) => bill + tips[index]);

// console.log("ยอดบิล:", bills);
// console.log("ทิป:", tips);
// console.log("ยอดรวม:", totals);


// function calcTip(oat) {
//     return oat >= 50 && oat <= 300 ? oat * 0.15 : oat * 0.20;
// }

// console.log(calcTip(100)); // 15

// const bills = [125, 555, 44];

// const tips = bills.map(oat => calcTip(oat));
// // const totals = bills.map((bill, index) => bill + tips[index]);

// console.log(bills, tips,);

// const mark = {
//     fullName: 'Mark Miller',
//     mass: '78',
//     height: '1.69',
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi
//     }
// }
// const john = {
//     fullName: 'John Smith',
//     mass: '92',
//     height: '1.95',
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi
//     }
// }
// mark.calcBMI()
// john.calcBMI()

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
// } 




// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// for (let i = 1; i <= bills.length; i++) {
//     const tip = bills[i]
//     tips.push(tip)
//     totals.push(bills[i] + tip)

// }

// console.log("ยอดบิล:", bills);
// console.log("ทิป:", tips);
// console.log("ยอดรวม:", totals);



const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
