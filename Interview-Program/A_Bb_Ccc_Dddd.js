function firstLetterCapitalize(letter,num){
    let result = "";
    for(let i=0;i<num;i++){
        result+= i==0 ? letter.toUpperCase() : letter.toLowerCase();
    }
   
    return result;
}
function acc(str){
    let result = [];
    let words = str.split("");
    let counter = 1;
    for(let word of words){
        result.push(firstLetterCapitalize(word,counter));
        counter++;
    }
    return result.join("_");
}
acc("abcd");