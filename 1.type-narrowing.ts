
//
// Type narrowing
//
// 
// In addition to type annotations and inferred types, TypeScript follows the possible paths of execution within our code to determine the most specific type of a value at any given point 
// 


//
// Example: type narrowing with a "type guard":
//

function displayInfo(info: string | number) {
    if (typeof info === "string") {
        console.log(info.toUpperCase());
    } else {
        console.log(info);
    }

}


displayInfo("hello world");



//
// Example: type narrowing with equality operators
//

function displayWelcomeMessage(userName: string, favDrink?: string) {
    console.log(`Hi ${userName}, would you like some ${favDrink?.toUpperCase()}`);
}


displayWelcomeMessage("alice", "tea");
displayWelcomeMessage("bob");

