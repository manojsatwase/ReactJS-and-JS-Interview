function getMiddle(str) {
    if(str.length %2 === 0){
        return str[(str.length /2) -1] + str[str.length /2]
    }
    return str[Math.floor(str.length/2)];
}
undefined
getMiddle("manoj")