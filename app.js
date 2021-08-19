// //Generating numbers from 1to 10
// for(let x=1; x<=10; x++){
//     console.log(x);
// }
// // Finding odd or even numbers
// for(let x=1; x<=10; x++){
//     if(x%2==0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
//     console.log(x);
// }
// let my_numbers=document.querySelector(".my_numbers")


// Generating number from 1 to 10 using console.log with respect to if number is even or odd.

// for(let x=1; x<=10;x++){
//     if(x%2==0){
//         let new_element=document.createElement("li");
//    new_element.innerHTML="even";
// my_numbers.appendChild(new_element);
//     }else{

//         let new_element=document.createElement("li");
//         new_element.innerHTML=(x);
//      my_numbers.appendChild(new_element);

//    }
//  }

// Generating the number from 1 to 20, displaying the text “JAVASCRIPT if number is multiple of 3

//  for(let x=1;x<=20;x++){
//      if(x%3==0){
//          console.log("JAVASCRIPT");
//      }else{
//          console.log(x);
//      }
//  }


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