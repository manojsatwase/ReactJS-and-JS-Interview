function findMaxNumber(arr){
    let max = arr[0];
    for(let num of arr){
        if(num >= max){
            max = num;
        }
    }
    return max;
}

findMaxNumber([22,55,11,100,22])

function findMinNumber(arr){
    let min = arr[0];
    for(let num of arr){
        if(num <= min){
            min = num;
        }
    }
    return min;
}

findMinNumber([22,55,11,100,22])