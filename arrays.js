// Here iam gonna solve questions based on arrays. 

// Q1 - Create a program with array of strings and returns the longest string in the array.

const stringArray = ["owais", "a", "d"];

let longest = stringArray[0];

for (let i = 1; i < stringArray.length; i++) {

    if (stringArray[i].length > longest.length) {
        longest = stringArray[i];
    }
}

console.log("The longest string is:", longest); // OUTPUT - The longest string is: owais


//--------------------------------------------------------------------------------------------------

// Q2 - Write a program to sort the array in ascending order. 

const randomArray = [5, 7, 8, 34, 9, 1, 2, 3, 99];
let temp = 0;

for (i = 0; i < randomArray.length; i++) {

    for (j = 0; j < randomArray.length; j++) {

        if (randomArray[i] < randomArray[j]) {
            temp = randomArray[i];
            randomArray[i] = randomArray[j];
            randomArray[j] = temp;
        }

    }

}

console.log(`Array in ascending order - ${randomArray}`);
// OUTPUT - Array in ascending order - [1,2,3,5,7,8,9,34,99]

//--------------------------------------------------------------------------------------------------

// Q3 - Write a program which prints the occurence of the same number in the array.

const occurenceArray = [2, 4, 5, 5, 5, 7, 8, 9, 0];
let result = {};

for (i = 0; i < occurenceArray.length; i++) {

    if (occurenceArray[i] in result) {
        result[occurenceArray[i]]++
    } else {
        result[occurenceArray[i]] = 1;
    }

}

console.log(result) //OUTPUT - { '0': 1, '2': 1, '4': 1, '5': 3, '7': 1, '8': 1, '9': 1 }

//--------------------------------------------------------------------------------------------------

// Q4 - Write a js program which pops out the repeated element in the array. 

const repeatedArray = [4, 4, 2, 2, 1, 1, 0, 0];


for (i = 0; i < repeatedArray.length; i++) {

    if (repeatedArray[i] == repeatedArray[i + 1]) {
        repeatedArray.splice(i, 1)
    }

}

console.log(repeatedArray); // OUTPUT - [4,2,1,0] 
// Disclamer - It will only work if the element is duplicated only once. And if the same  element comes twice consecutively it will remove one occurrence and continue to check for next consecutive elements.

//---------------------------------------------------------------------------------------------------

const specificArray = [1, 2, 3, 4, 5];
let specificElem = 5;
let indexPosition;
let isPresent = specificArray.includes(specificElem);

if (!isPresent) {
    console.log(`elem is not present`);

}

for (i = 0; i < specificArray.length; i++) {

    if (specificElem == specificArray[i]) {
        indexPosition = specificArray.indexOf(specificArray[i])
    }
}

console.log(`The index position of ${specificElem} is ${indexPosition}`) // OUTPUT - The index position of 5 is 4








