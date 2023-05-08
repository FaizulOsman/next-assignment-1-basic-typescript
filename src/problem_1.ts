// declare a function that takes two parameters, a string and a number.
function problemOne(parameter1: string, parameter2: number = 3): void {
  let result = "";
  for (let i = 0; i < parameter2; i++) {
    result += parameter1;
  }
  console.log(result);
  /* or */
  // console.log(parameter1.repeat(parameter2));
}
// The function should log the string parameter repeated the number of times specified by the number parameter
problemOne("Hello", 7);
// If the number parameter is not provided, it should default to 3
problemOne("Hello");
