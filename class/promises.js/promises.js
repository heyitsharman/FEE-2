// promises:  it represents the future event: hoga ya na koi pta nii, not predictable, technically an object , which is not sure whether this will be fulfilled or not.
// pure data ko access krleta h as an object ke trah example: add to card to the payment
// three states of promises: pending, fulfilled, reject
// by default : pending state

// two conditions for promises:
// promises(resolve, reject)-> callback function
// 1. how to create promises;
// let like = true;
// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if (like){
//             resolve("Yeah, he likes you");
//         } else{
//             reject("naah! You're boring one");
//         }
//     },2000);
// });

// two ways: promises consume: then
// p.then((msg)=>{
//     console.log("Message agyaaaaa",msg)
// }, (error)=>{
//     console.log("Error occures",error);
// })

// 2, then.catch

// p.then((msg)=>{
//         console.log("Message agyaaaaa",msg)
//     });
//     p.catch((error)=>{
//         console.log("Error occures",error);
//     });

// promises chaining:
// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("resolve will work after 2 sec");
//         resolve("Promises1 resolved");
//     }, 2000);
// });

// p1.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("Resolve will work after 2 sec");
//             resolve("Promises2 resolved");
//         }, 2000);
//     });
//     return p2;
// })
// .then((value)=>{
//     console.log(value);
//     console.log("!Done");
//     return 2;
// })
// .then((value)=>{
//     console.log("Ok! Now done");
   
// });




