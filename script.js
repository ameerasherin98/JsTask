// Promise.all() Example 1

// var input=document.getElementById("inputValue"); // Promise.all() Example 1, Promise.allSettled() Example 1

// const promise1 = new Promise((resolve, reject) => {
//     if (((input.value)%2)===0) {
//     resolve("done 1");
// } else {
//     reject("error 1");
// }
// });
// const promise2 = new Promise((resolve, reject) => {
//     if (((input.value)%4)===0) {
//     resolve("done 2");
// } else {
//     reject("error 2");
// }
// });
// const promise3 = new Promise((resolve, reject) => {
//     if (((input.value)%8)===0) {
//     resolve("done 3");
// } else {
//     reject("error 3");
// }
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });





// Promise.all() Example 1
// var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Done"), 1000);
// });
// var p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Done"), 2000);
// });
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Done"), 3000);
// });
// var p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P4 Done"), 4000);
// });
// // var p5 = new Promise((resolve, reject) => {
// //   reject(new Error('Error!'));
// // });
// // Promise.all([p1, p2, p3, p4, p5])
// // .then(values => {
// //   console.log(values);
// // })
// // .catch(error => {
// //   console.error(error.message)
// // });
// Promise.all([p1, p2, p3, p4])
// .then(values => {
//   console.log(values);
// })
// .catch(error => {
//   console.error(error.message)
// });



// Promise.allSettled Ex 1
// const p1 = new Promise((resolve, reject) => {
//     if (((input.value)%2)===0) {
//     resolve("done 1");
// } else {
//     reject("error 1");
// }
// });
// const p2 = new Promise((resolve, reject) => {
//     if (((input.value)%2)!==0) {
//     resolve("done 1");
// } else {
//     reject("error 1");
// }
// });

// Promise.allSettled([p1, p2]).then((results) => results.forEach((result) => console.log(result.status)));





// Promise.allSettled Ex 2
// var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Done"), 1000);
// });
// var p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Done"), 2000);
// });
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Done"), 3000);
// });
// var p4 = new Promise((resolve, reject) => {
//   reject(new Error('Error!'));
// });
// var p5 = new Promise((resolve, reject) => {
//   reject(new Error('Error!'));
// });
// Promise.allSettled([p1, p2, p3, p4, p5]).then((results) => results.forEach((result) => console.log(result.status)));




// Promise.any Ex 1
// const p1 = new Promise((resolve) => setTimeout(resolve, 1000, "first"));
// const p2 = new Promise((resolve) => setTimeout(resolve, 100, "last"));
// Promise.any([p1, p2]).then((value) => console.log(value));






// Promise.any Ex 2
// var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Done"), 1000);
// });
// var p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Done"), 2000);
// });
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Done"), 3000);
// });
// Promise.any([p1, p2, p3]).then((value) => console.log(value));



// Promise.race Ex 1
// var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Done"), 10000);
// });
// var p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Done"), 2000);
// });
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Done"), 3000);
// });
// var p= Promise.race([p1, p2, p3]);
// console.log(p);
// Promise.race([p1, p2, p3]).then((value) => {
//   console.log(value);
// });





// Promise.race Ex 2
// const p1 = new Promise((resolve, reject) => {
//     if (((input.value)%2)===0) {
//     resolve("done 1");
// } else {
//     reject("error 1");
// }
// });
// const p2 = new Promise((resolve, reject) => {
//     if (((input.value)%4)===0) {
//     resolve("done 2");
// } else {
//     reject("error 2");
// }
// });
// var p= Promise.race([p1, p2]);
// console.log(p);
// Promise.race([p1, p2]).then((value) => {
//   console.log(value);
// });




//Promise catch example 1
// var p1 = new Promise(function(resolve, reject) {
//   resolve("Done");
// });
// p1.then(function(value) {
//   console.log(value); 
//   throw new Error("Error");
// }).catch(function(e) {
//   console.error(e.message);
// });




//Promise catch example 1
// var p1 = new Promise(function(resolve, reject) {
//   throw new Error("Error");
// });

// p1.catch(function(e) {
//   console.error(e); 
// });




//Promise then, catch and Finally Ex 1
// function checkEvenOdd() {
//   return new Promise((resolve, reject) => {
//     if ((Math.random())%2===0) {
//       resolve("Even");
//     } else {
//       reject(new Error("Not Even"));
//     }
//   });
// }

// checkEvenOdd()
//   .then((even) => {
//     console.log(even);
//   })
//   .catch((odd) => {
//     console.error(odd);
//   })
//   .finally(() => {
//     console.log('Experiment completed');
//   });







//Promise then, catch and Finally Ex 2
// function checkEvenOdd() {
//   return new Promise((resolve, reject) => {
//     if ((input.value)%2===0) {
//       resolve("Even");
//     } else {
//       reject(new Error("Not Even"));
//     }
//   });
// }

// checkEvenOdd()
//   .then((even) => {
//     console.log(even);
//   })
//   .catch((odd) => {
//     console.error(odd);
//   })
//   .finally(() => {
//     console.log('Experiment completed');
//   });



//next exa 1
// function* generator() {
//   yield 2;
//   yield 1;
// }
// const gen = generator();
// console.log(gen.next().value);
// console.log(gen.next().value);


//next exa 2
// function* generator() {
//    var a=10, b=10
//   yield a+b;
//   yield a*b;
// }
// const gen = generator();
// console.log(gen.next().value);
// console.log(gen.next().value);



//return ex 1
// function* generator() {
//    var a=10, b=10
//   yield a+b;
//   return a/b;
//   yield a*b;
// }
// const gen = generator();
// console.log(gen.next().value);
// console.log(gen.next().value);



//return ex 2
// function* generator() {
//    var a=10, b=10
//   yield a+b;
//   yield a/b;
//   return a*b;
// }
// const gen = generator();
// console.log(gen.next().value);
// console.log(gen.next().value);



// catch ex 1
// function* gen() {
//   while(true) {
//     try {
//        yield "Done";
//     } catch(e) {
//       console.log("!!!!");
//     }
//   }
// }
// const g = gen();
// g.next();
// g.throw(new Error("!!"));





//multiple promises
// var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Done"), 1000);
// });
// var p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Done"), 2000);
// });
// var p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Done"), 3000);
// });
// const P1=Promise.all([p1, p2, p3])
// .then(values => {
//   console.log("P11 Done");
// });
// var p11 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Done"), 1000);
// });
// var p22 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 Done"), 2000);
// });
// var p32 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Done"), 3000);
// });
// const P2=Promise.all([p1, p2, p3])
// .then(values => {
//   console.log("P22 Done");
// });
// const P=Promise.all([P1, P2])
// .then(values => {
//   console.log(values);
// });




// input dependent
// var j=input.value;
// function* generateSequence(j) {
//   for (let i = 1; i <= j; i++)
// {
//     yield i;
//     console.log(i);
// }
// }




//sequential execution 1
// var readFiles = function(files) {
//   var p = Promise.resolve(); // Q() in q

//   files.forEach(file =>
//       p = p.then(() => readFile(file)); 
//   );
//   return p;
// };

//sequential execution 1
// function runSerial() {
//     var that = this;
//     return Promise.resolve()
//         .then(function() {
//             return that.task1();
//         })
//         .then(function() {
//             return that.task2();
//         })
//         .then(function() {
//             console.log(" ---- done ----");
//         });
// }


//delay in promises
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(1000).then(() => alert('runs after 1 second'));