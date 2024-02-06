function findMaxWord(words){
    let wordsArr = words.split(" ");
    let maxWord = wordsArr[0];
    for(let word of wordsArr){
        if(maxWord.length <= word.length){
            maxWord = word;
        }
    }
    return maxWord
}

findMaxWord('i love my mom')