// if we create any function then we can reuse that function at
// multiple places and we reuse the function at multiple places 
// it means we are executing those functions every time
// so excuting such functions repeatedly is really inefficient  

// Memoization in Javascript

// Memoization an optimization technique that can help make heavy computation processes more efficient

// it does this by storing computaation results in cache, and retrieving that same information from
// the cache the next time it's needed insteaf of computing it again.

// Importance of Memoization

// it is an optimazation technique that increases performance by
// caching results of function calls . This reduces excution time
// and increase CPU performace.

// it should be a Pure Function which always returns same output for same input - no sideEffect

// Concepts you should know:

// Higher Order Functuion : A high order function accepts another function as an argument or returns a function as its output

// Clousers : When your inner function remember the scope of your outer function even it has completed its execution.

// assume very expensive function
// function add(x){
//     return x * 10;
// }

// function hofMemo(func){
//     let cache = {};
//     return function(x){
//       if(cache[x]){
//        console.log("return result from cache");
//        return cache[x];
//       }else{
//        console.log("Calculating the result");
//        const result = func(x);
//        cache[x] = result;
//        return result;
//       }
//     }
// }

// const calculate = hofMemo(add);

// console.log(calculate(5))



function add(...data){
    return data.reduce((total,curr)=>total+curr);
}

function hofMemo(func){
    let cache = {};
    return function(...args){
        const keys = JSON.stringify(args);

      if(cache[keys]){
        console.log(cache);
       console.log("return result from cache");
       return cache[keys];
      }else{
       console.log("Calculating the result");
       const result = func(...args);
       cache[keys] = result;
       return result;
      }
    }
}

const calculate = hofMemo(add);

console.log(calculate(5,10,30))

// loadash give memoization




const catchResult = {};

//key:url ,value:response

async function fetchData(url){
    if(cache.hasOwnProperty(url)){
        return catchResult[url]
    }
  const data = await fetch(url).then(res=>res.json());
  catchResult[url] = data;
  return data;
}

(
    async function(){
      await fetchData("url")
      await fetchData("same url")
      await fetchData("same url")
    }
)();
