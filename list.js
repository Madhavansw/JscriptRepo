
const arr = [12,30,40,50, 120];
const res = [...arr];

const com = JSON.stringify(arr) == JSON.stringify(res);
let result = arr == res ? true : false;
console.log(`resulting two array: ${com}`);
console.log(`resulting: ${result}`);

//  const result = arr.concat(res,res,res);
//  const jonarr = arr.join(',');
//  console.log(`resulting: ${jonarr}`);

 const myMethod = (...args) => {
     console.log(`resulting: ${args}`);

 };
 console.log("This is call method Calling!");
 myMethod.call(null, 12,40,40,50,100);
 console.log("This is apply Method calling!");
 myMethod.apply(null, [12,40,100,20,134]);
