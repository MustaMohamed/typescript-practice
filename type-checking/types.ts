// numbers
const num: number = 5;
const num1: number = 1.7;

// strings
const str: string = 'Iam a string';
const str1: string = 'Iam also a string';
const str2: string = `Also I'm a string`;

// boolean
const truthy: boolean = true;
const falsy: boolean = false;

// objects
// generic object
/* equals to 
 const person: {} = {
 name: 'Ahmed',
 age: 15
 };
 */
const person: object = {
  name: 'Ahmed',
  age: 15,
};
const book: {
  author: string;
  pages: number;
  topics: string[]
} = {
  author: 'T. Martin',
  pages: 355,
  topics: ['sports', 'health'],
};

// nested objects
const product: {
  id: string;
  price: number;
  tags: string[],
  details: {
    title: string;
    description: string;
  }
} = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};

// arrays
const sports: string[] = ['Football', 'basketball']; // single type
const levels: number[] = [1, 2, 3]; // single type
// const levels: number[] = [1, 2, 3, 'level 1'] // error, can't add string with numbers
const sportsWithLevels: (number | string)[] = ['Football', 1, 'basketball', 2]; // multi-typed
// tuples
const options: [number, string] = [1, 'Choose'];
// const options: [number, string] = [1, 1]; // error
// const options: [number, string] = [1, 'Choose', 1]; // error
// const options: [number, string] = [1, 'Choose', 'All']; // error

// enum
enum Role {
  Admin, // 0
  User, // 1
  Developer// 2
}

enum UserType {
  Admin = 1, // 1
  User, // 2
  Developer// 3
}

enum ContentType {
  ReadOnly = 'READ_ONLY', // READ_ONLY
  Write = 'WRITE', // WRITE
  ReadWrite = 'READ_WRITE' // READ_WRITE
}

const userRole: UserType = UserType.Admin;

// union types
let multiTyped: number | string = 15;
multiTyped = 'value'; // no errors
// multiTyped = [] // error

// literal
let mixed: 'mix' | 'max' = 'mix';
mixed = 'mix'; // no error
// mixed = 'BlaBla'; // error

// type alias
type Mixed = number | string;
let alias: Mixed = 'Alias';
// alias = [] // error

// function types
// function_name (param: type): return_type {}
function typedFunction(param: number): void {
  console.log(param);
}
const otherTyped: (p1: number, p2: string) => number = (p1, p2) => (15);

// callback functions
function useCallback(param: string, callback: (p: string) => void): void {
  let num: number = 15;
  // callback(num); // error
  callback(param);
}