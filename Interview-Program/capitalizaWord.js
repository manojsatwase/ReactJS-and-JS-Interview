function firstWordCapitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}
function capitalize(words){
    const wordsArr = words.split(" ");
    const results = [];
     for (let word of wordsArr) {
         results.push(firstWordCapitalize(word));
     }
    return results.join(" ");
}

capitalize("i love my mom");