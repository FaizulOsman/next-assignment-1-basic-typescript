# Interview Questions And Answers

## 1. What is TypeScript, and how is it different from JavaScript?

### Answer:

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

How TypeScript different from JavaScript:

TypeScript allows us to add optional static typing to their JavaScript code, which can help catch errors at compile time rather than runtime. It supports classes, interfaces, & other object-oriented programming features that are not available in plain JavaScript. It offers improved tooling & editor support, including better code navigation, auto-completion, & refactoring tools.

## 2. Can you explain the difference between "interface" and "type" in TypeScript?

### Answer:

In TypeScript, interface & types are used to define the shapes & types of data. The main difference between them is that interfaces can only be used to describe object types, while types can define any type of data. Interfaces can be extended & implemented by classes, while types can be used in unions & intersections. When choosing between interfaces & types, consider whether you are defining an object shape or a more general type of data.

## 3. Can you give an example of how to use generics in TypeScript?

### Answer:

Here's an example of how to use generics in TypeScript:

function ReverseGenericFunction<T>(array: T[]): T[] {
return array.reverse();
}
const names = ["Abul", "Babul", "Cabul"];
const reversedNames = ReverseGenericFunction(names);
console.log(reversedNames);

## 4. What is the difference between an "unknown" and "any" type in TypeScript?

### Answer:

In TypeScript, "unknown" & "any" both are used to represent values of any type.

- unknown is a type-safe counterpart of any. When a value is of type unknown, TypeScript requires that you narrow the type down before using it in a way that assumes a specific type. This can help catch type errors at compile time, whereas using any will bypass TypeScript's type checking altogether. On the other hand any is a type that can represent any value & can be assigned to & from any type. It is generally not recommended to use any because it undermines TypeScript's type checking & can lead to errors at runtime. Using any should be avoided unless there is no other alternative.

## 5. What is the "as" keyword used for in TypeScript?

### Answer:

The "as" keyword in TypeScript is used for type assertions, which allows us to tell the compiler that a value should be treated as a specific type, even if the compiler cannot infer that type from the code.

## 6. Can you explain how to use "type guards" with "in" and "typeof" operators in TypeScript?

### Answer:

Type guards are a feature in TypeScript that allows us to check the type of a variable at runtime & take different actions depending on the type.

The "in" operator can be used to check if a property exists in an object, while the "typeof" operator can be used to check the type of a value. By combining these operators with conditional statements, we can create type guards that help ensure type safety in our code.
