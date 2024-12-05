//
// Type assertions
// 
// Type assertions are a way to tell the compiler "trust me, I know the type of this variable better than you do."
// 

let message: string | undefined;
// ...
message = "hello world";
// ...
const numberOfCharacters1 = (message as string).length; // option 1: type assertion with 'as' keyword
const numberOfCharacters2 = (<string>message).length; // option 2: type assertion with angle-brackets syntax



//
// Example: type assertion with DOM elements
//


const buttonElm = document.getElementById("submit-btn") as HTMLButtonElement;

if(buttonElm) {
    // change bg color
    buttonElm.style.backgroundColor = "orange";

    // disable btn
    buttonElm.disabled = true;
}

