function reverseWord(str){
    let words = str.split(' ');
    let result = [];
    for(let i=words.length-1;i>=0;i--){
       result.push(words[i])
    }
    return result.join(' ');
}
reverseWord('i love my wife');