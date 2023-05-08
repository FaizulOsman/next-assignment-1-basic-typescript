// a TypeScript class called Person that has private properties name and age, and a public method getDetails
class Person {
  constructor(private name: string, private age: number) {}
  // public method getDetails that returns a string with the person's name and age
  public getDetails(): string {
    return `Person name is ${this.name} and age is ${this.age}`;
  }
}
// a TypeScript class called Student that extends the Person class and has an additional private property grade
class Student extends Person {
  constructor(name: string, age: number, private grade: string) {
    // Use the super keyword to call the constructor of the Person class and initialize the name and age properties
    super(name, age);
  }
  // Define a public method getGrade that returns the student's grade
  getGrade(): string {
    return `Grade is ${this.grade}`;
  }
}

const person1 = new Person("Abul", 52);
console.log(person1.getDetails());

const student1 = new Student("Babul", 25, "A+");
console.log(student1.getGrade());
