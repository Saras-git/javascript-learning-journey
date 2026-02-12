console.log('this is a string');
//all console.log will convert evrything as sttring that is called implicit type conversion
console.log('12'/'6');//here the implicit convertion will be convert into some datatype by defaut for some conditions only 
console.log('12'+'2');//string concatenation
//type casting and type conversion both are same 
//explicit type conversion
let age=23;
console.log(typeof age);
age=String(age);//here S should be capital letter then only it will run 
console.log(typeof age);

let isAdult=true;
isAdult=String(isAdult);
console.log(isAdult,typeof isAdult);

let a='23';
console.log(typeof a);
a=Number(a);
console.log(a+3);

let x='0';//if x is negative numbe output will be true,iff its is 0 it is false if if it an any posstitve number it is true
console.log(typeof x);
x=Boolean(x);
console.log(typeof x);
console.log(x);
