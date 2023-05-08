interface Person {
  name: string;
  age: number;
}
// array of objects with properties name and age
const persons: Person[] = [
  { name: "Abul", age: 18 },
  { name: "Babul", age: 30 },
  { name: "Cabul", age: 15 },
  { name: "Dabul", age: 12 },
  { name: "Ebul", age: 43 },
];
// a function that takes in an array of objects
function myFunction(people: Person[]) {
  // returns only the objects where the person's age is greater than or equal to 18
  return people.filter((p) => p.age >= 18);
}
console.log(myFunction(persons));
