function showError(field, message) {
    document.getElementById(field).innerHTML = message;
}

function validateForm() {
    // Retrieving the values of form elements 
    var firstname = document.signup.firstname.value;
    var lastname = document.signup.lastname.value;
    var password = document.signup.password.value;
    var passwordconf = document.signup.passwordconf.value;
    var username = document.signup.username.value;
    var education = document.signup.education.value;
    var email = document.signup.email.value;
    var age = document.signup.age.value;
    	
    var firstnameErr = lastnameErr = passwordErr = passwordconfError = usernameErr =educationErr = emailErr = ageErr = true;
    
    // Validate firstname
    if(firstname == "") {
        showError("firstnameErr", "Please enter your first name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(firstname) === false) {
            showError("firstnameErr", "Please enter a valid first name");
        } else {
            showError("firstnameErr", "");
            firstnameErr = false;
        }
    }
    // Validate lastname
    if(lastname == "") {
        showError("lastnameErr", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastname) === false) {
            showError("lastnameErr", "Please enter a valid last name");
        } else {
            showError("lastnameErr", "");
            lastnameErr = false;
        }
    }

    // Validate password
    if(password == "") {
        showError("passwordErr", "Password Field is required");
    } else { 
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
             
        if(password.length<=6) {
            showError("passwordErr", "Password length must be atleast 6 characters");
        } else if(!password.match(upperCaseLetters)) {
            showError("passwordErr", "The password must contain at least 1 uppercase letter");
             
        }else if(!password.match(numbers)){
            showError("passwordErr", "The password must contain atleast 1 digit");
        }
        else {
            showError("passwordErr", "");
            passwordErr = false;
        }
    }

// validate password confirmation
    if(passwordconf == "") {
        showError("passwordconfErr", "Password confirmation is need");
    } else { 
        
             
        if(password != passwordconf) {
            showError("passwordconfErr", "The two passwords do not match");
        } 
        else {
            showError("passwordconfErr", "");
            passwordconfErr = false;
        }
    }


// validate username

    if(username == "") {
        showError("usernameErr", "Username is required");
    } else { 
        
             
        if(username.length<=6) {
            showError("usernameErr", "Username must be atleast 6 characters");
        } else if(username.charAt(0) != username.charAt(0).toUpperCase()){
            showError("usernameErr", "First character must be capital");
        }
        else {
            showError("usernameErr", "");
            usernameErr = false;
        }
    }


// validate the education status
    if(education == "") {
        showError("educationErr", "Education status must be selected");
    } else { 
            showError("educationErr", "");
            educationErr = false;
        
    }

// validate age
    if(age == "") {
        showError("ageErr", "Age field is required");
    } else { 
        // the age gap
             
        if(age>60 || age<18) {
            showError("ageErr", "The age must be between 18 and 60");
        } 
        else {
            showError("ageErr", "");
            ageErr = false;
        }
    }


// incase of errors- no submitting form
if((firstnameErr || lastnameErr || passwordErr||passwordconfErr|| educationErr|| usernameErr|| ageErr) == true) {
    return false;
 } else{
     alert("success");
     return true;
 }




};