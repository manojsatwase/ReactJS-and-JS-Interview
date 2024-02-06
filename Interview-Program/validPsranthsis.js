// Valid Parentheses

// Companies
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.


const isValid = function(str){
    if(!str) return null;
    let stack = [];
    for(let i=0;i<str.length;i++){
     let r = str[i];
     switch(currentVal){
         case "{":
           stack.push("}");
           break;
          case "(":
           stack.push(")");
         console.log(stack)
           break;
          case "[":
           stack.push("]");
           break;
         default:
          let remove = stack.pop();
          console.log(remove,currentVal);
          if(s !== remove){
           return false;
          }
     }
    }
   return stack.length === 0;
 }
 
 console.log(isValid("(]"))