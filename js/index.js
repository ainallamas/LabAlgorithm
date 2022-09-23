// Iteration 1: Names and Input
let hacker1 = "Maria"
console.log (`The driver's name is ${hacker1}`);

let hacker2 = "Aina"
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.lenght} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log  (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else (hacker1.length == hacker2.length)
    console.log (`Wow, you both have equally long name, both have ${hacker1.length} characters.`);


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
//Split és només pels String. Però una vegada faig el split és un Array i per això no puc fer el "toUpperCase" després. 

const spaced = hacker1.toUpperCase().split("");
console.log (spaced); 


// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
//En aquest cas, abans de fer el reverse he de fer l'array primer. 
//El reverse () i el join () sempre són per arrays. 

const rev = hacker2.split("").reverse().join("");
console.log (rev); 


// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

let array = [hacker1, hacker2]

if (hacker1 === hacker2){
    console.log ("What? You both have the same name?")
} else if (array.sort()[0] == hacker1){
    console.log ("The driver's name goes first.")
} else {
    console.log ("Yo, the navigator goes first definitely.")
}













