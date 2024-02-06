const chekIsPalindrome = (str) => {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);
    return cleanStr === cleanStr.split('').reverse().join('');
}
console.log(chekIsPalindrome("Subscribe"));