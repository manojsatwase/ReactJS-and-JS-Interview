// Count Duplicate Elements In Array

// Input item = ["a","b","c","a","b","b","c","d"]
// output {a:2,b:3,c:2,d:1}

function countDuplicateNum(data){
  const output = {};
  // logic

  data.map(d=>output[d] = (output[d] || 0 ) + 1)
  return output;
}
console.log(countDuplicateNum(["a","b","c","a","b","b","c","d"]))