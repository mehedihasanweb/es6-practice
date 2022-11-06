// class Parent{
//     constructor(){
//         this.fatherName = "Motiur"
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name
//     }
//     getFullName(){
//         return this.name + " " + this.fatherName;
//     }
// }
// const baby = new Child("mehedi");
// const baby2 = new Child("hasan");
// console.log(baby.getFullName());
// console.log(baby2.getFullName());
class parent{
    constructor(){
        this.fatherName = "donald";
    }
}
class Child extends parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.fatherName + " " + this.name;
    }
}
const result = new Child("orithibi");
const result2 = new Child("hasan");
console.log(result.getFullName());
console.log(result2.getFullName())