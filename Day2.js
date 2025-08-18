// ================================
// ASSIGNMENT OPERATORS
// ================================

let x = 2; // (this is a variable declaration and assignment)
x = x + 3; // (same as code of line below but more verbose)
x += 3;    // (here, add and assign in one step)
console.log(x);

let y = 10;
y = y - 7; // (long form of the operation)
y -= 7;    // (short form of the operation)
console.log(y); 

// let z = 4;
// z = z * 5; (long way to multiply and assign)
// z *= 5; (short and best way to multiply and assign)
// console.log(z); 

// let n = 8;
// n = n / 2;
// n /= 2;
// console.log(n); // 4

// let m = 6;
// m = m % 4;
// m %= 4;
// console.log(m); 


// ================================
// LOGICAL OPERATORS
// ================================

let a = true; 
let b = true;
console.log(a && b); // (this will return true because both a and b are true)

// let a = false;
// let b = true;
// console.log(a && b); (this will return false because a is false and b is true)

// let a = true;
// let b = true;
// let c = false;
// console.log(a || b); (this will return true because at least one of a or b is true)

// let a = false;
// let b = false;
// let c = false;
// console.log(a || b || c); (this will return false because all are false)

// let a = false;
// a = !a
// console.log(a); (this will return true because !false is true)


// ================================
// COMPARISON OPERATORS
// ================================

let num1 = 8;
let num2 = 3;
console.log(num1 > num2); // (This checks if x is greater than y and if y is greater then it returns true)

let c1 = 6;
let c2 = 10;
console.log(c1 < c2);

let m1 = 50;
let n1 = 30;
console.log(m1 >= n1); // (this will check if m is greater than or equal to n  and if any of them is true it will return true)
console.log(m1 <= n1); // (this will check if m is less than or equal to n and if any of them is true it will return false)

// let q = 99;
// let r = 99;
// console.log(q == r); // (this will check if q is equal to r and if both are equal it will return true)
// console.log(q != r); // (this will check if q is not equal to r and if both are equal it will return false)

// let m = 10;
// let n = "20";
// console.log(m===n); (This will return false because === is a strict operator which checks both value and data type  and here m is a number where n is a string so it will return false)

// let c = "60";
// let d = "60";
// console.log(c===d); // (this will return true because both c and d are strings and have the same value)

// let d = "50";
// console.log(c===d); (this will return false because c and d are both strings but have different values)
