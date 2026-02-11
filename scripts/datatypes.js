//there are basic 8 datatypes
//1)number datatypes
let pi = 3.14;
let prime = 7;
console.log(typeof prime);
console.log(typeof pi);
//special numerical value
let infi = Infinity;
let neginfi = -Infinity;
console.log(typeof infi);
console.log(typeof neginfi);
console.log(infi,neginfi);
//Nan addition
let nan=NaN;
console.log(nan,typeof nan);
nan=NaN+2
console.log(nan);
//Nan power
let temp =NaN;
temp=NaN**0;
console.log(temp);
console.log(1/0);


//2)BIGint(it will not run in internet explorerotherwise it run for all)

let sum = 1+2;
console.log(sum);
//2^53-1=9007199254740991
let limit=9007199254740991n;
console.log(limit+1n);
console.log(limit+2n);
console.log(limit+3n);
console.log(typeof limit);

//3)String Datatypes
//anything inside the " " or ' ' will be declared as a  string

let st = "this is string 1+22";
let quote = 'he said "iam a batman"';
console.log(st,"\n",quote,"\n",typeof st);
//backtick `` is also used for writing in paragraph,also embedding
let num = 1234+5678;
let para = `this is bant man's home. "i'm Bat man"`;
let embed = `1+2 = ${num}`;
console.log(para);
console.log(embed);
//task
let namee="saraswathi";
let embedd = `my name is ${namee}`;
console.log(embedd);

//4)Misc datatype
//4.1)boolean

let isMale=true;
console.log(typeof isMale);
let condition1 = 5<3;
console.log(condition1,typeof condition1);

//4.2)null
//null means nothing
let  agee = null;
console.log(agee);

//4.3)undefined
// if there is no value assign, the javascript is assigned as a undefined type
let dob;
console.log(dob);

//dynamicly typed(it can be changed the datatype based on their value)
let myname="sars";
console.log(typeof myname);
myname=123;
console.log(typeof myname);
