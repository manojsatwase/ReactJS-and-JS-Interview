function printWord(name){
    // let result =[];
    if(name.length === 0){
      return;
    }
    for(let i=0;i<name.length;i++){
         const str = name.slice(i,name.length);
           console.log(str);
    }
    const str = name.slice(1,name.length)
    // stop function
    
    printWord(str);
     
}
printWord('manoj')



// another ways 

const getStr = (index,str) => str.slice(index,str.length) 

function displayResult(str){
    for(let i=0; i<str.length;i++){
        const name = getStr(i,str);
        console.log(name);
    }
}


function printWord(name){
    let result =[];
    for(let i=0;i<name.length;i++){
         const str = getStr(i,name)
         result.push(str);
    }
    result.forEach(item=>displayResult(item));
   
}
printWord('sujay')