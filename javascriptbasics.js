// var 
// even defined in if block it can be used outside --- global scope
let a = 10;
function f() {
    if (true) {
        var b = 9

        // It prints 9
        console.log(b);
    }

    // It gives error as it
    // defined in if block
    console.log(b);
}
f()

// It prints 10
console.log(a)

// updated , redeclared
var s1="name"
var s1=10
console.log(s1);
s1='a'
console.log(s1);

//support hositing 
console.log(s2);
var s2=123
console.log(s2);

//no value needed while declaring
var s3;
console.log(s3);


// let 
// even defined in if block it cannot be used outside --- block scope
let a1 = 10;
function f() {
if (true) {
    let b1 = 9

    // It prints 9
    console.log(b1);
}

// It gives error as it
// defined in if block
console.log(b1);
}
f()

// It prints 10
console.log(a1)

// updated , not redeclared
let s1="name"
s1=10
console.log(s1);
s1='a'
console.log(s1);

//does not support hositing 
console.log(s2);
let s2=123
console.log(s2);

//no value needed while declaring
let s3;
console.log(s3);


// const 
// even defined in if block it cannot be used outside --- block scope
const a1 = 10;
function f() {
if (true) {
    const b1 = 9

    // It prints 9
    console.log(b1);
}

// It gives error as it
// defined in if block
console.log(b1);
}
f()

// It prints 10
console.log(a1)

// not updated , not redeclared
const s1="name"
s1=10
console.log(s1);
s1='a'
console.log(s1);

//does not support hositing 
console.log(s2);
const s2=123
console.log(s2);

// value needed while declaring
const s3="12345";
console.log(s3);

