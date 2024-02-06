const expensiveFun = () => {
    console.log('call api')
}

const throttle = (fn,limit) => {
    let flag = true;
    return function(){
        let context = this;
        args = arguments;
    if(flag){
        fn.apply(context,args);
        flag = false;
        setTimeout(()=>{
        flag = true;
        },limit)
    }
    }
}
const betterExFun = throttle(expensiveFun,100);
betterExFun()