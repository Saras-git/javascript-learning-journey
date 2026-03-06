//logical ops
// AND,OR,NOT,NULL Coalescing
console.log(1||1);//or
console.log(0&&1);//and
console.log(!0)//not
let age=18;
let curr = age??19;
console.log(curr);//null coalescing is only print the 19 when not inisitialized if it initialized ir print the initialized value
