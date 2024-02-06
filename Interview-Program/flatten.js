
function flatten(arr) {
    let results = [];
   arr.forEach(ar=> Array.isArray(ar) ? results = results.concat(flatten(ar)) : results.push(ar));
    return results;
}

function flatten(arr) {
    //  let results = [];
    // arr.forEach(ar=> Array.isArray(ar) ? results = results.concat(flatten(ar)) : results.push(ar));
    //  return results;
     return arr.reduce((acc,curr)=>acc.concat(Array.isArray(curr) ? flatten(curr) : curr),[])
 }
 flatten([1,3,4,[4,6,7,[6,65]]])

 [...new Set(flatten([1,2,3,4,4,[1,2,[2,3]]]))].sort((a,b)=>b-a).filter(num => num > 2);

 [...new Set(flattenArr([1,2,[2,3]]).sort())]