// 1. Create an array named numbers and store 5 number values in it

let numbers = [1,2,3,4,5]

// 2. Calculate the sum of array items and print it to the console using console.log()

let sum = 0;
for(let i = 0 ; i<numbers.length; i++){
    sum = sum + numbers[i];
}
console.log(sum);
// for(let number of numbers){
//     sum = sum + number;
// }
// console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()

let avgerage = 0;
// for(let number of numbers){
//     avgerage = sum / number.length;
// }
for(let i = 0; i<numbers.length;i++){
    avgerage = sum / numbers.length;
}
console.log(avgerage);

// 4. Find the highest number in the array and print it to the console using console.log()

let highestNumber = 0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>numbers[0]){
        highestNumber = numbers[i];
    }
}
console.log(highestNumber);

// 5. Find the lowest number in the array and print it to the console using console.log()

let lowestNumber = 0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]<numbers[0]){
        lowestNumber = numbers[i];
    }
}
console.log(lowestNumber);


// 6. Find the even numbers in the array and print them to the console using console.log()

let even = [];
for(let num of numbers){    
    if(num%2===0){
        even.push(num);
    }
}
console.log(even);

// 7. Find the odd numbers in the array and print them to the console using console.log()

let odd = [];
for(let num of numbers){    
    if(num%2!==0){
        odd.push(num);
    }
}
console.log(odd);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

// let isDivisibleBy5 = [];
// for(let numb in numbers){
//     if(numb%5==0){
//         isDivisibleBy5.push(numb);
//     }
// }
// console.log(isDivisibleBy5);

for(let i=0;i<numbers.length;i++){
    if(numbers[i]%5 == 0){
        console.log(numbers[i]);
    }
}

// 9. Log all the element of the array one by one

for(let elements of numbers){
    console.log(elements);
}

// 10. Find all the number in the array that is divisible by 3

for(let isDivisible of numbers){
    if(isDivisible%3==0){
        console.log(isDivisible);
    }
}