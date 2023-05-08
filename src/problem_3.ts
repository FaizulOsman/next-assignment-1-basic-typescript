const arrayOfStr: string[] = ["Abul", "Babul", "Cabul", "Dabul", "Ebul"];
function GenericFunction2<T>(...param: T[]): T[] {
  return param.reverse();
}
console.log(GenericFunction2(...arrayOfStr));
