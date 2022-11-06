// function add(num1, num2 = 10){
//     // num2 = num2 || 12
//     // if(num2 == undefined){
//     //     num2 = 12
//     // }
//     return num1 + num2;
// }

// const total = add(12);
// console.log(total);

function add(num1, num2=10){
    // num2 = num2 || 10;
    // if(num2 == undefined){
    //     num2 = 10;
    // }
    return num1 + num2;
}
const result = add(5, 5);
console.log(result);