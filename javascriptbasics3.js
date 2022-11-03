

console.log("arithamatic operator")
// arithamatic operators
var a=10;
var b=20;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b)


console.log("label statements ")
// label statements 
let str = '';
loop1:
for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}
console.log(str);
console.log(str+"");
console.log(str+""+"");