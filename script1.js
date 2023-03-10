let obj1= {name:"Person 1",age:5};
let obj2= {age:5,name:"Person 1"};



var isEqualsJson = (obj1,obj2)=>{
   keys1 = Object.keys(obj1);//array holding obj1 keys
   keys2 = Object.keys(obj2); //array holding obj2 keys

   //return true when the two json has same length and all the properties has same value key by key
   return keys1.length === keys2.length && Object.keys(obj1).every(key=>obj1[key]==obj2[key]);
}

console.log(`the object equality is ${isEqualsJson(obj1,obj2)}`)


/*Output

the object equality is true

*/




