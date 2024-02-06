function delay(i){
    return new Promise(resolve=>{
        setTimeout(()=>{
         resolve(i);
        },i*1000)
    })
}

async function test(){
    console.log("Started");
     for(let i=1;i<=10;i++){
       // const result = delay(i);
        // result.then(res=>console.log(res));
      const result =  await delay(i);
     console.log(result);
     }
    console.log("Ended");
}

test();

// handle real life project
// now practical we can use that  suppose we have a list of users to  send the email
// and now we need to send email one by one and at the end we have display message 
// all email send to the users

function delayFunc(user){
    return new Promise(resolve=>{
        setTimeout(()=>{
         resolve(`Email send to ${user}`);
        },1000)
    })
}


const users = ["manoj@gmail.com","renuka@gmail.com","sonal@gmail.com","ashwini@gmail.com"];

async function sendEmail(){
for(let user of users){
      const confirmation = await delayFunc(user);
      console.log(confirmation);
}
console.log("Email send to all the users");
}

sendEmail()



