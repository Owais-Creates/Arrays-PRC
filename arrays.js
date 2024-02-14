// Here iam gonna solve questions based on arrays. 

// Q1 - Create a program with array of strings and returns the longest string in the array.

// let strArray = ["asdfgh", "sdas", "asdfgsdh"];
// let defaultPosition = strArray[0];
// let longestString = "";

// for (i = 1; i < strArray.length; i++) {
//     if (strArray[i].length > defaultPosition.length) {
//         longestString = strArray[i];

//     } else {
//         console.log(`${defaultPosition} is longer`);
//         break
//     }
// }

// console.log(longestString)

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

const repeatedArray = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd'];


for (i = 0; i < repeatedArray.length; i++) {
    for (j = 0; j < repeatedArray.length; j++) {
        if (repeatedArray[i] === repeatedArray[j]) {
         repeatedArray.pop(repeatedArray[j])
        }
    }

}

console.log(repeatedArray);







