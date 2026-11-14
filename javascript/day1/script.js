// let a = 10;
// let b = 3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// let x = 5;
// let y = 8;
// console.log(x);
// console.log(y);
// let c = x;
// x = y;
// y = c;
//  console.log(x);
// console.log(y);
// let c = 0;
// if( c> 0 ) console.log("positive ");
// else if ( c ===0 ) console.log("Zero ");
// else console.log("negative ");
// let num = Number(prompt("Enter a number"));
// if( num %2 === 0) console.log("Even number")
// else console.log("Number is odd");
// console.log(` number is ${num}`);
//  let  nums = ["wake up", "Study", "Exercise"];
//  nums.push("Sleep");
//  console.log(nums);
//  console.log(nums.length);
//  nums.pop()
//  console.log(nums);
//  nums.unshift("first")
//  console.log(nums);
//  console.log(nums.shift());
//  console.log(nums.reverse());
// const students = [
//   { id: 1, name: "Aman",   city: "Bhopal", marks: 85 },
//   { id: 2, name: "Priya",  city: "Indore", marks: 32 },
//   { id: 3, name: "Rohit",  city: "Bhopal", marks: 67 },
//   { id: 4, name: "Sneha",  city: "Jabalpur", marks: 91 },
//   { id: 5, name: "Karan",  city: "Indore", marks: 38 },
// ];
// let ans = students.find((val) => {
//     return val.marks<40;
// })
// console.log(ans);
// let ans = students.filter((val) => {
//     if(val.city === "Bhopal" && val.marks>40){
//         console.log(val.name);

//     }
// })
// students.map((val) => {
//    console.log(`${val.name} from ${val.city} scored ${val.marks}`);
// });
//  let ans = students.map((val) => {
//    if(val.marks>= 40) {
//     val.result = "pass";
//    }
//    else{
//     val.result ="fail";
//    }
//     console.log(val)
// })
//  let arr = students.filter((val) => {
//     return val.marks>=40;
    
// })
// console.log(arr);
// const products = [
//   { id: 1, name: "iPhone 15",     price: 79999, inStock: true  },
//   { id: 2, name: "Boat Airdopes", price: 1499,  inStock: true  },
//   { id: 3, name: "MacBook Air",   price: 99999, inStock: false },
//   { id: 4, name: "Redmi Note 13", price: 14999, inStock: true  },
// ];
// let arr = products.filter((val) => {
//     if(val.inStock && val.price<20000){
//         return val;
//     }
// })
// console.log(arr);
// let fac = ( n ) =>{
//     if( n == 0 || n ==1)
//     return 1
// else{
//     return n*fac(n-1)
// }
// }
// console.log(fac(5));
// let square = (n ) => {
//     if (n == 0 || n==1) {
//         return n;
//     }
//     else{
//         return n*n;
//     }
// }
// console.log(square(5));
// function greet(){
//     console.log("hellooo jii......!!");
// }
// greet();

