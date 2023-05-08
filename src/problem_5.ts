// a TypeScript function that takes a parameter of type unknown
function StringSecurityGuard(param: unknown) {
  // uses a type guard to check whether the parameter is of type string
  if (typeof param === "string") {
    // If it is, log the string to the console
    console.log(param);
  } else {
    // If it is not, log an error message
    console.log("Entry not allowed. Expected a string as a parameter.");
  }
}
StringSecurityGuard("string");
StringSecurityGuard(5);
