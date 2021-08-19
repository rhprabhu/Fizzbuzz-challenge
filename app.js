// for(let x=1; x<=10; x++){
//     console.log(x);
// }

// for(let x=1; x<=10; x++){
//     if(x%2==0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
//     console.log(x);
// }


for(let x=1; x<=100; x++){
    if(x%3==0 && x%5==0){
        console.log("FizzBuzz");
    }else if (x%5==0){
        console.log("Buzz");
    }
    else if (x%3==0){
        console.log("Fizz");
    }else{
        console.log(x);
    }
}