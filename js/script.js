//* Question 1 *//
var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase === suppliedName.toLowerCase){
  console.log("These strings are equal");
}

//* Question 2 *//
var username = "myusername";
var lengthOfUsername = username.length

if(lengthOfUsername >= 4 && lengthOfUsername <=10){
  console.log ("Acceptable username");
} else {
  if (lengthOfUsername < 4){
    console.log ("Too few characters");
  }
  if (lengthOfUsername > 10){
    console.log ("Too many characters");
  }
}