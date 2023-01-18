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

//* Question 3 *//
// The invoice must be paid
// The product must have been dispatched
// The customer must have signed for the delivery

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if ((invoicePaid === true) && (productDispatched === true) && (customerHasSigned === true)){
  console.log ("The order is completed");
} else {
  if (productDispatched === false){
    console.log ("The product is not dispatched");
  }
  if (customerHasSigned === false){
    console.log ("The customer has not signed");
  }
}

//* Question 4 *//
// The invoice must be paid
// The product must have been dispatched
// The customer must have signed for the delivery

var invoicePaid = true;
var productDispatched = true;
var customerHasSigned = true;

if ( !invoicePaid || !productDispatched || !customerHasSigned){
  if (!invoicePaid){
    console.log ("The invoice is not paid");
  }
  if (!productDispatched){
    console.log ("The product is not dispatched");
  }
  if (!customerHasSigned){
    console.log ("The customer has not signed");
  }
} else {
  console.log ("Order completed")
}