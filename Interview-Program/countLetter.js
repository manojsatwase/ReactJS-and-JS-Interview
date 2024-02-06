function countLetter(str){
    let countObj = {};
    for(let i=0;i<str.length;i++){
        let char = str.chartAt(i)
        console.log(char);
        if(!countObj[char]){
            countObj[char] = 0;
        }
        countObj[char]+=1;
    }
    return countObj;
}

console.log(countLetter("abcdad"))