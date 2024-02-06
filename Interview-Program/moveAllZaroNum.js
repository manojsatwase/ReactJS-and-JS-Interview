const moveAllZaroNum = arr => {
   const nonZeros = arr.filter(elm=> elm !== 0)
   const zeroCount = arr.length - nonZeros.length;
   const result = [...nonZeros,...Array(zeroCount).fill(0)];
   return result;
}
console.log(moveAllZaroNum([1,0,3,0,30,0,22]))