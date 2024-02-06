// what is recursion ?
/*

Recursion is a process of callling function itself

A function that calls itself is called a recursive function
 
*/


// what is Base Case ?
/*
The base case is what stops the recursion from continuing on forever

if act a termination condition

*/


function countDown(n){
    for(let i=n;i>=0;i--){
        console.log(i)
    }
}

countDown(3);


function recursionCountDown(){
    if(n === 0) return; // base case

    console.log(n);
    countDown(n-1);
}

recursionCountDown(3); // first call (n =3)
recursionCountDown(2); // first call (n =3-1)
recursionCountDown(1); // first call (n =2-1)
recursionCountDown(0); // first call (n =1-1)


function calculateTotal(n){
    let total = 0;
    for(let i=0;i<=n;i++){
        total+=i;
    }
    return total;
}

console.log(calculateTotal(3));

function calculateTotalRecursive(n,total=0){
    if(n === 0) return total;
     return calculateTotalRecursive(n-1,total+=n)
}

calculateTotalRecursive(3) // (3,0)
calculateTotalRecursive(3) // (2,3)
calculateTotalRecursive(3) // (1,5)
calculateTotalRecursive(3) // (0,6)


// assume may be data is coming from backend
const teamStructure = {
    name:"manoj",
    teams:[
        {
            name:"renuka",
            teams:[
                {
                    name:"sonam",
                    teams:[]
                }
            ]
        },{
            name:"ashwini",
            teams:[]
        }
    ]
}

function getTeamDetails(t){
    // base case
    console.log('Team...,',t)
   if(t.teams.length === 0) return 0;
   
   t.teams.forEach(team=>{
    console.log(team);
    getTeamDetails(team);
   })
}

getTeamDetails(teamStructure);



// Thinking Recursively | Microsoft Interview Question | Software Engineer UI | Frontend

const user = {
    name:"manoj",
    address:{
        personal:{
            city:"chikhaldara",
            area:"katkumbh"
        },
        office:{
            city:"pune",
            area:{
                landmark:"baner pune"
            }
        }
    }
}

let finalObj = {};

const magicFunc = (obj,parent)=>{
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            magicFunc(obj[key],parent+"_"+key);
        }else{
            finalObj[parent+"_"+key] = obj[key];
        }
    }
}

magicFunc(user,'user')

// Problem: sum(1)(2)(3)(4)...(n)() | Amazon UI / Frontend Javascript interview Question

let sum = a=> b=> b ? sum(a+b) : a;
console.log(sum(1)(2)(10))

let sum1 = function (a){
    return function(b){
        if(b){
            return sum1(a+b)
        }
        return a;
    }
}  
