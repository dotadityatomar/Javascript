/*let aditya={
    //key:value
    firstname : "Aditya",lastname: "Tomar",age: 21,"Add-ress": "India",isstudent : true
     
}
console.log(aditya.firstname)
console.log(aditya["Add-ress"])
console.log(aditya.age)
console.log(aditya.isstudent)*/
/*aditya.firstname='tomar';
aditya.gender='male';
delete aditya.firstname;
delete aditya["Add-ress"];

console.log(aditya)
let num1=10;
let num2='20';
console.log(num1+num2);
console.log(num1-num2);
console.log(num1==num2);
console.log(num1=num2*num1);
console.log(num1=num2);
console.log(num1*num2);
console.log(2*"6");
console.log(2*"heloo");*/


//--- Selection or control Statement loops---//
// v8 engine ==> chrome
//spider monkey engine ==> firefox
//Chakra engine ==> Internet Explorer
//prompt('How are you') //  It open an dialog box with blank filed in browser  basicaly it use to ask question.

//----IF else condition with project-----//
const userAnswer = prompt("How much money you spent on grocery?");
if(userAnswer>1000){
    alert('Congratulation!');
    alert('Total discount:' +(userAnswer-userAnswer*0.1));

}
console.log(userAnswer);