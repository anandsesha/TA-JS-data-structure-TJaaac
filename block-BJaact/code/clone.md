1. Write the output with reason

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

let person2 = person;

person.firstName = 'Arya';

console.log(person2.firstName); // Arya
console.log(person.firstName); // Arya
console.log(person.lastName); // Doe
console.log(person == person2); // true
console.log(person === person2); // true
console.log(person.lastName === person2.lastName); // true
```

2. Write the output with reason:

```js
let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person };

person.firstName = 'Arya';
person.city = 'Navada';

console.log(personTwo.firstName); // John. Since personTwo is cloned so will use a different address and will not have the updated firstName in person variable as it is in  a different location.
console.log(person.firstName); // Arya
console.log(personTwo.lastName); // Doe
console.log(person.firstName === personTwo.firstName); // false. Both are having separate address locations. So update in first memory wont affect the other memory location.
console.log(person == personTwo); // false. Cloned so will have different address.
console.log(person === personTwo); // false.
console.log(person.address === personTwo.address); // true. Because only shallow cloning is done and object withing object is still shared i.e copy by reference to personTwo as well.
console.log(person.address == personTwo.address); // true
console.log(personTwo.address.city); // San Jose. While updating city value to navada, the proper convention is not followed like person.address.city which would have updated the city to 'Navada' in both places.
console.log(person.address.city); // San Jose
console.log(person.address.city == personTwo.address.city); // true
```

3. Write the output with reason:

```js
let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person, address: { ...person.address } };

person.firstName = 'Arya';
person.city = 'Navada';

console.log(personTwo.firstName); // John. Cloning dosent change in both locations so just changed in person not in personTwo.
console.log(person.firstName); // Arya
console.log(personTwo.lastName); // Doe. Cloning.
console.log(person.firstName === personTwo.firstName); // false. person.firstName is updated to Arya and since its not copy by reference the value of personTwo.firstName is still John.
console.log(person == personTwo); // false 
console.log(person === personTwo); // false
console.log(person.address === personTwo.address); // false. Eventhough they contain the same object data in them still the memory address created by them (person and personTwo) on cloning will be different. 
console.log(person.address == personTwo.address); // false.
console.log(personTwo.address.city); // San Jose. Since its deep cloned it will have same value as city in person variable.
console.log(person.address.city); // San Jose
console.log(person.address.city == personTwo.address.city); // true. Deep cloning.
```

4. Clone the `blogs` variable into a new variable named `clonedBlogs`

```js
let blogs = [
  {
    id: 1,
    title: 'Post #1',
    body: 'My first blog post',
  },
  {
    id: 2,
    title: 'Post #2',
    body: 'My second blog post',
  },
  {
    id: 3,
    title: 'Post #3',
    body: 'My third blog post',
  },
];

// Your code goes here
let clonedBlogs = [{...blogs[0]}, {...blogs[1]}, {...blogs[2]}]
```

5. Clone the `question` variable into a new variable named `questionClone`

```js
var questions = [
  {
    prompt: 'Why is the sky blue?',
    responses: [
      'Because the color blue was on sale at Wallmart',
      'Because blue is the prettiest color',
      'Because the air molecules difract blue light more than any other color',
    ],
  },
  {
    prompt: 'Why are leaves usually green?',
    responses: [
      'So green caterpillars can hide better.',
      'Because leaves can more easily make energy with green light',
      "Because leaves absorb red and blue light so it's green that is reflected",
    ],
  },
];

// Your code goes here
let questionClone = [
  {...questions[0], ...questions[0].responses}
  {...questions[1],...questions[1].responses}
];
```

6. Clone the `allBlogs` variable into a new variable named `allBlogsClone`

```js
var allBlogs = {
  id: 1,
  title: 'Alamofire JSON Serialization',
  body: 'All about serialization in Alamofire...',
  author: {
    id: 1,
    fullName: 'Jeff Potter',
    username: 'jpotts18',
  },
  comments: [
    {
      id: 1,
      body: 'Thanks for the help Jeff, this saved me hours',
    },
    {
      id: 2,
      body: 'Your welcome. I am happy to help!',
    },
  ],
};

// Your code goes here
let allBlogsClone = {
  ...allBlogs,
  author: {...allBlogs.author},
  comments: [ {...allBlogs.comments[0]}, {...allBlogs.comments[1]}],
};
```

7. Clone the `person` variable into a new variable named `clonedPerson`

```js
let person = [
  {
    input: { name: 'Ryan' },
    output: { name: 'Ryan' },
  },
  {
    input: { name: { first: 'Ryan', last: 'Haskell-Glatz' } },
    output: { firstName: 'Ryan', lastName: 'Haskell-Glatz' },
  },
  {
    input: { name: 'Ryan', age: 24 },
    output: { name: 'Ryan', age: 24 },
  },
  {
    input: {
      name: { first: 'Ryan', last: 'Haskell-Glatz' },
      birthday: { year: 1993, month: 'Nov' },
    },
    output: {
      firstName: 'Ryan',
      lastName: 'Haskell-Glatz',
      birthdayYear: 1993,
      birthdayMonth: 'Nov',
    },
  },
];

// Your code goes here
let clonedPerson = [
  {
    input: {...person[0].input},
    output: {...person[0].output}
  },
  

  {
    input: {
      ...person[1].input, name: {...person[1].input.name} 
    },
    output: {
      ...person[1].output
    }
  },


  {
    input: {...person[2].input},
    output: {...person[2].output}
  },
  
  
  {
    input: {...person[3].input},
    output: {...person[3].output}
  }
  ]
```

8. Write a function named `cloneObject` that accepts an object and returns the clone of the object

```js
function cloneObject(obj) {
  
}

// Run the test below to check your function

let user = {
  name: 'John',
  house: 'Stark',
  sisters: ['Arya', 'Sansa'],
};
let cloned = cloneObject(user);

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let clonedPerson = cloneObject(user);

console.log(
  `The user object is ${
    user == cloned ? `not clone` : `cloned successfully 😁👑`
  }`
);
console.log(
  `The person object is ${
    person == clonedPerson ? `not clone` : `cloned successfully 😁👑`
  }`
);
```
