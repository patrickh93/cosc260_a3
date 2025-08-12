window.addEventListener("load", function (e) {
  const regoForm = document.getElementById("registration-form");
  //form submit event listener
  regoForm.addEventListener("submit", validate);
});

//function to clear all errors
function clearErrors() {
  document.getElementById("errors").innerHTML = "";
}

//function to add error message to errors div
function addError(message) {
  const p = document.createElement("p");
  p.classList.add("error"); //add error class for styling
  p.textContent = message;
  document.getElementById("errors").appendChild(p);
}

//validation function
function validate(e) {
  e.preventDefault(); //prevent default form submission
  clearErrors(); //clear previous errors

  let success = true;
  const regoForm = document.getElementById("registration-form");

  //validate full name
  const fullName = regoForm.elements["name"].value;
  if (fullName.length === 0) {
    addError("You must enter a name");
    success = false;
  } else if (fullName.length < 2 || fullName.length > 100) {
    addError("Your name must be between 2 and 100 characters long");
    success = false;
  } else if (!/^[a-zA-Z\s'-]+$/.test(fullName)) {
    addError("Your first name contains invalid characters.");
    success = false;
  }

  //validate age
  const age = regoForm.elements["age"].value;
  if (age.length === 0) {
    addError("You must enter your age");
    success = false;
  } else if (age < 18 || age > 130) {
    addError("Your age must be between 18 and 130");
    success = false;
  }

  // validate email
  const email = regoForm.elements["email"].value;
  if (email.length === 0) {
    addError("You must enter your email");
    success = false;
  } else if (!/^[a-zA-Z-]([\w-.]+)?@([\w-]+\.)+[\w]+$/.test(email)) {
    addError("You must enter a valid email address");
    success = false;
  }

  // validate mobile
  const mobile = regoForm.elements["mobile"].value;
  if (mobile.length > 0) {
    if (mobile.length !== 10) {
      addError("Your mobile number must be 10 digits long");
      success = false;
    } else if (!/^[0-9]+$/.test(mobile)) {
      addError("Your mobile number must only contain the digits 0-9");
      success = false;
    } else if (!/^04/.test(mobile)) {
      addError("Your mobile number must begin with 04");
      success = false;
    }
  }

  //If registration is successful, alert the user
  if (success) {
    alert("Registration Successful!");
  }
}
