// 
// Generic functions
// TypeScript generics allow us to create functions that can work with various data types while maintaining type safety.
// 


// 
// Generics - Example 1
// 

function getMiddleElement<T>(arr: T[]): T {
    const index = Math.floor(arr.length / 2);
    return arr[index];
}


const t1 = getMiddleElement(['alice', 'bob', 'charlie']); // "bob"
const t2 = getMiddleElement([10, 20, 30, 40, 50]); // 30



console.log(t1.toUpperCase());
console.log(t2);


// 
// Generics - Example 2
// 

function reverseArr<T>(arr: T[]): T[] {
    return arr.reverse();
}


const tA = reverseArr(['alice', 'bob', 'charlie']); // ['charlie', 'bob', 'alice']
const tB = reverseArr([10, 20, 30, 40, 50]); // [50, 40, 30, 20, 10]

console.log(tA)
console.log(tB)



// 
// Generics - Arrow functions
// 


const reverseArr2 = <T>(arr: T[]): T[] => {
    return arr.reverse();
}



//
// Generics with multiple type parameters
//

function generateArr<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}


const m1 = generateArr("hello", "world"); // ["hello", "world"]
const m2 = generateArr("alice", 30); // ["alice", 30]



// 
// Generics with Type aliases 
// (also works with Interfaces)
//

type CollectionOfItems<ItemType> = {
    title: string,
    quantity: number,
    elements: ItemType[]
}

const c1: CollectionOfItems<string> = {
    title: "collection 1",
    quantity: 3,
    elements: ["apple", "banana", "orange"]
}
const c2: CollectionOfItems<number> = {
    title: "collection 2",
    quantity: 3,
    elements: [10, 20, 30]
}

const c3: CollectionOfItems<{name: string, age: number}> = {
    title: "collection 3",
    quantity: 2,
    elements: [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 32 }
    ]
}

