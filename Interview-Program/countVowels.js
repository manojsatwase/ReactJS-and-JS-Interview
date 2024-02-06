function countVowels(str){
    let count = 0;
    let vowels = "aeiou";
    for(let elem of str){
        if(vowels.includes(elem)){
            count++
        }
    }
    return count;
}
countVowels("racecar")