function concatenateData(input) {
  let name = input[0];
  let firstname = input[1];
  let age = input[2];
  let city = input[3];

  console.log("You are " + name + " " + firstname + ", a " + age + "-" + "years old person from " + city + ".");
}
concatenateData([`Maria`,`Ivanova`, `19`, `Sofia`]);