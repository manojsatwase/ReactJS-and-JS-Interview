function eachNumSqr(num){
    let numsArr = num.toString().split("");
    let result = "";
    for(let num of numsArr){
        result+=Math.pow(Number(num),2)
    }
    return Number(result);
}
eachNumSqr(123)