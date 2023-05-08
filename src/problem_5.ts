function StringSecurityGuard(param: unknown) {
  if (typeof param === "string") {
    console.log(param);
  } else {
    console.log("Entry not allowed. Expected a string as a parameter.");
  }
}
StringSecurityGuard("string");
StringSecurityGuard(5);
