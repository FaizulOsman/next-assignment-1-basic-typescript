// array of strings
const arrayOfStr: string[] = ["Abul", "Babul", "Cabul", "Dabul", "Ebul"];
// a TypeScript program that uses a generic function
function ReverseGenericFunction<T>(...param: T[]): T[] {
  // reverse an array of strings
  return param.reverse();
}
console.log(ReverseGenericFunction(...arrayOfStr));
