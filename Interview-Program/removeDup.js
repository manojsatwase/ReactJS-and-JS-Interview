function dup(arr) {
    let results = []
    arr.forEach(num=>{
        if(!results.includes(Number(num))) results.push(name)
    })
    return results;
}

function dup(arr) {
    return arr.reduce((acc,curr)=>{
         if(!acc.includes(curr)) acc.push(curr)
        return acc;
     },[])
   
 }

 function dup(arr) {
    // return arr.reduce((acc,curr)=>{
    //      if(!acc.includes(curr)) acc.push(curr)
    //     return acc;
    //  },[])
     return arr.filter((el,i,arr)=>{
         console.log(el,i)
         return arr.indexOf(el) === i;
     })
   
 }
 dup([1,2,3,4,5,2,3,4,2,])