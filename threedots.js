const ages = [23, 42, 12, 32];
const newAges = [12, 34, 6, 3];
const anotherAges = [12, 23, 22, 44]
const total = ages.concat(newAges).concat([88]).concat(anotherAges);
const total2 = [...ages, ...newAges, 88, ...anotherAges]
// console.log(total2)

const dhoni = 550;
const sakib = 600;
const virat = 444;
const totalAmount = [550, 600, 444, 667, 999];
// const maximum = Math.max(dhoni, sakib, virat);
const maximum = Math.max(...totalAmount);
console.log(maximum);