const deepClone = (obj) => {
    if(obj === null) return null;
    const copy = Object.assign({},obj);
     Object.keys(copy).forEach(key=>{
        copy[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
     })
    if(Array.isArray(obj)){
        copy.length = obj.length;
        return Array.from(copy);
    }
    return copy;
}

const obj = {
    a:3,
    b:3,
    c:{
        d:5,
        e:6,
        f:7,
        g:19
    },h:{
        i:5,
        j:()=>{
            console.log("hello developer")
        }
    },z:[1,24],
    fn:()=>{
        console.log('hi')
    }
}

console.log(deepClone(obj));


// Shallow Copy VS Deep Copy
// call by refrence => shallow copy => mutable object
// call by value => Deep copy => immutable object  

// shallow copy
// Original Object     Clone Object
                
                // Referenced Object

// when we mutated or change variable its also change the original value
//js does shallow copy by default for non primitive type              
// Non-Primitive Type
// array
// objects

// primitive types are immutable and its always create deep copy

// Primitive Type

// number
// boolean
// string
// null
// undefined

// they are completedly immutable

// deep copy

// Original Object    CLoned  Object


// Refrence Object       Refrenced Object


// let originalValue = 10;
// let copiedValue = originalValue;

// console.log(originalValue);
// console.log(copiedValue);

// copiedValue = 20;

// console.log(originalValue);
// console.log(copiedValue);
// why because primitive type its always create deep copy
// deep copy means if you do any change copied variable it never reflect to the original value
// because they share defferent mamory location

// the issue and comparision come when we deel with non primitive type means array and objects

// let originalObj = {
//     name:"manoj",
//     age:28
// }

// let copiedObj = originalObj;

// console.log(originalObj);
// console.log(copiedObj);

// copiedObj.name ="renuka"; 

// console.log(originalObj);
// console.log(copiedObj);

// output
// {name:"renuka",age:25}
// {name:"renuka",age:25}


// JSON.strinify()

// let originalObj = {
//     name:"manoj",
//     age:28
// }

// let copiedObj = JSON.parse(JSON.stringify(originalObj));

// console.log(originalObj);
// console.log(copiedObj);

// copiedObj.name ="renuka"; 

// console.log(originalObj);
// console.log(copiedObj);

// here we can see with the help of JSON.strinify() deep copy
// when we don't have function then we use json.stringify for deep copy
// if the type is function then i wont work
// output
// {name:"manoj",age:28}
// {name:"renuka",age:25}


// let originalObj = {
//     name:"manoj",
//     age:28,
//     getName:function(){
//      return this.name;
//     }
// }

// let copiedValue = Object.assign({},originalObj);

// console.log(originalObj);
// console.log(copiedObj);

// copiedValue.name = "sonam";
// console.log(originalObj);
// console.log(copiedObj);

// output
// {name:"manoj",age:28}
// {name:"sonam",age:25}

// here also one issue Object.assign doen't give a completed deep copy
// its provide a partial deep copy in javascript

// supose your object is nested key

// let originalObj = {
//         name:"manoj",
//         age:28,
//         getName:function(){
//          return this.name;
//         },
//         address:{
//             city:"Delhi",
//             country:"India"
//         }
//     }
    
//     let copiedValue = Object.assign({},originalObj);
    
//     console.log(originalObj);
//     console.log(copiedObj);
    
//     copiedValue.name = "sonam";
//     copiedValue.address.city = 'Pune';
//     console.log(originalObj);
//     console.log(copiedObj);

    // output
    // change the original object but we don't expect so object.assign also not give complete deep copy its give partial deep copy
    // {name:"manoj",age:28,getName:f(),addres:{city:"Pune",country:"india"}}
    // {name:"renuka",age:25,getName:f(),addres:{city:"Pune",country:"india"}}


// spread operator
// its also give same partial deep copy 

let originalObj = {
        name:"manoj",
        age:28,
        getName:function(){
         return this.name;
        },
        address:{
            city:"Delhi",
            country:"India"
        }
    }
    
    let copiedValue = {...originalObj};
    
    console.log(originalObj);
    console.log(copiedObj);
    
    copiedValue.name = "sonam";
    copiedValue.address.city = 'Goa';
    console.log(originalObj);
    console.log(copiedObj);

     // output
    // change the original object but we don't expect so object.assign also not give complete deep copy its give partial deep copy
    // {name:"manoj",age:28,getName:f(),addres:{city:"Goa",country:"india"}}
    // {name:"renuka",age:25,getName:f(),addres:{city:"Goa",country:"india"}}


    // if you wont to achive complite deep copy using loadash