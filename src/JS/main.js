function validateForm() { 

  const age = document.getElementById("age").value;

  const weight = document.getElementById("weight").value;

  let message = ""; // a blank message that will be filled in dependent on validity

  if (age >= 5 && age <= 7) {
    if (weight >= 15 && weight <= 20) { /*condition for 5-7 age group */
      message = "You are fit.";
      document.getElementById("message").innerHTML = message;
    } else if (weight < 15) {
      message = "You are underweight.";
      document.getElementById("message").innerHTML = message;
    } else {
      message = "You are overweight.";
      document.getElementById("message").innerHTML = message;
    }
  } else if (age >= 8 && age <= 10) { /*condition for 8-10 age group */
    if (weight >= 21 && weight <= 25) {
      message = "You are fit.";
      document.getElementById("message").innerHTML = message;
    } else if (weight < 21) {
      message = "You are underweight.";
      document.getElementById("message").innerHTML = message;
    } else {
      message = "You are overweight.";
      document.getElementById("message").innerHTML = message;
    }
  } else if (age >= 11 && age <= 15) {  /*condition for 11-15 age group */
    if (weight >= 26 && weight <= 30) {
      message = "You are fit.";
      document.getElementById("message").innerHTML = message;
    } else if (weight < 26) {
      message = "You are underweight.";
      document.getElementById("message").innerHTML = message;
    } else {
      message = "You are overweight.";
      document.getElementById("message").innerHTML = message;
    }
  } else if (age >= 16 && age <= 20) {  /*condition for 16-20 age group */
    if (weight >= 31 && weight <= 40) {
      message = "You are fit";
      document.getElementById("message").innerHTML = message;
    } else if (weight < 31) {/*condition for 5-7 age group */
      message = "You are underweight.";
      document.getElementById("message").innerHTML = message;
    } else {
      message = "You are overweight.";
      document.getElementById("message").innerHTML = message;
    }
  } else {
    message = "age must be between 5 and 20 years old.";
  }
}
