//1,2,3 are operands
//+ - * are operator
//1)unary

let x=-1;
x=-x;
console.log(x);

//2)binary +,-,*,/,%,**
let a=12,b=2;
let sum =a+b;
let mul=a*b;
let mod = a%b;
let ex = a**b;
console.log(sum,mul,mod,ex);

//3)string concatenation
let aa='1';
let bb='2';
let summ=aa+bb;
console.log(summ);
summ=Number(a+b);

//unary +
summ=+aa + +bb;
console.log(summ);

//3)assignment operator
let l=y=z=12;
console.log(l,y,z);

//4)Modify in place(=+,-+,*=,/=,%=,**=)
let m=12;
m+=5;
console.log(m);

//5)increment/decrement

let r=12;
console.log(r++);//print 12 first then it will increment to r as 13 
console.log(r--);//now it print the value of 13 and decrement the valuee to 3 r as 12
console.log(r);//now it will print the value of r as 12
//task
let s=12,t=13;
let u=++s + t--;
console.log(u);

//comparission operator(<,>,==,<=,>=.!=) it will print all in boolean type
let q=10,w=12;
console.log(q<w);
console.log(q>w);
console.log(q<=w);
console.log(q>=w);
console.log(q!=w);
console.log(q==w);
q='saras'
w='saras'
console.log(q<w);
console.log(q>w);
console.log(q<=w);
console.log(q>=w);
console.log(q!=w);
console.log(q==w);
let a_a = '0';
a_a=Boolean(a_a);
let b_b=0;
b_B=Boolean(b_b);
console.log('0'==0);
console.log('0'===0);

//null and undefined
console.log(null>0);
console.log(null<=0);
console.log(null<0);
console.log(null==0);