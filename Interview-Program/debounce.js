const debounce = (fn,d) => {
    let timer;
    return function(){
        let context = this;
         args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
          getData.apply(context,arguments)   
        },d)
          
    }
}
const getData = ()=>{c
    console.log("api call");
}
const betterFun = debounce(getData,300)
betterFun();




const input = document.getElementById('input');

function getData(){
    console.log("make an api call");
}

// without debounce
// input.addEventListener('keyup',getData);

function hofDebounce(func,delay){
    let timer;
    return function(){
    if(timer){
        clearTimeout(timer);
    }
    timer = setTimeout(()=> getData,delay);
    }
}

const getResults = hofDebounce(getData,1000);

input.addEventListener('keyup',getResults);


const debounceFunc = (func,wait) => {
    let timeout;
    return function (...args){
        const context = clearTimeout(timeout);
        timeout = setTimeout(()=>{
        func.apply(context,args);
        },await)
    }
}

const debounceFn = debounceFunc(myFunc,300)

function myFunc(){
    console.log("fetch api")
}

debounceFn();