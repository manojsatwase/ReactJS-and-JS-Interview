// MISSING LETTERS

function letters(str){
    if(!str) return null;
    for(let i=0;i<str.length;i++){
      let code = str.charCodeAt(i);
      console.log(code ,str.charCodeAt(0) + i,i)
   
        return String.fromCharCode(code -1);
      }
    }


  console.log(letters("abce"))