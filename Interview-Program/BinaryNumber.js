function countNum(arr){
    let result = "";
    let total = 0;
      for(let num=0;num<arr.length;num++){
        result+=arr[num]
        total+=arr[num]
      }
      console.log(parseInt(result,2))
      console.log(total)
    }
    
    countNum([1,0,1,0,1,1,0])
    
    
    
    function Bin(num){
      // binary convert
       const numToBinary = num.toString(2);
       const binaryToNum= UnBin(numToBinary)
      console.log({numToBinary,binaryToNum});
    }
    
    function UnBin(num){
      return parseInt(num,2);
    }
    console.log(Bin(100))