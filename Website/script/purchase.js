var errorMessage = document.getElementById('error');

function registerForm(){
    if(!validateName()){
        return;
    }
    if(!validatePhone()){
        return;
    }
    if(!validateEmail()){
        return;
    }
    if(!validateGender()){
        return;
    }
    if(!validateAge()){
        return;
    }
    if(!validateDist()){
        return;
    }
    if(!validateAdr()){
        return;
    }
    if(!validatePostalCd()){
        return;
    }
    alert('Thank you for your purchase!')
    document.getElementById("myForm").reset();
    
}

function validateName(){
    var name = document.getElementById('name').value;

    if(name == ''){
        errorMessage.innerHTML = 'Please fill your name'
        return false;
    }
    else if(!isalpha(name)){
        errorMessage.innerHTML = 'Your name must be alphabet only'
        return false;
    }

    errorMessage.innerHTML = ''
    return true;
}

function isalpha(name){
    for(var i = 0 ; i < name.length ; i++){
        if(!(name.charAt(i) >= 'a' && name.charAt(i) <= 'z') && !(name.charAt(i) >= 'A' && name.charAt(i) <= 'Z') && !(name.charAt(i) == ' ')){
            return false;
        }
    }
    return true;
}

function validatePhone(){
    var phone = document.getElementById('phone').value

    if(phone == ''){
        errorMessage.innerHTML = 'Please fill your phone number'
        return false;
    }
    else if(!isdigit(phone)){
        errorMessage.innerHTML = 'Phone number must be numbers only'
        return false;
    }
    errorMessage.innerHTML = ''
    return true;
}

function isdigit(phone){
    for(var i = 0 ; i < phone.length ; i++){
        if(!(phone.charAt(i) >= '0' && phone.charAt(i) <= '9')){
            return false;
        }
    }
    return true;
}

function validateEmail(){  
    var text=document.getElementById('email').value
    var AtPos=text.indexOf("@");
    var DotPos=text.lastIndexOf(".");

    if(text==''){
        errorMessage.innerHTML = 'Please fill your email'
        return false;
    }else if (AtPos<1 || DotPos<AtPos+2 || DotPos+2>=text.length){  
        errorMessage.innerHTML = 'Please enter a valid e-mail address'
        return false;
    } 
    errorMessage.innerHTML =''
    return true;
}

function validateGender(){
    var male = document.getElementById('male').checked
    var female = document.getElementById('female').checked

    if(!male && !female){
        errorMessage.innerHTML = 'Please choose a gender'
        return false;
    }

    errorMessage.innerHTML = ''
    return true;
}

function validateAge(){
    var age = document.getElementById('age').value

    if(age == ''){
        errorMessage.innerHTML = 'Please fill your age'
        return false;
    }
    else if(!isdigit(age)){
        errorMessage.innerHTML = 'Age must be numbers only'
        return false;
    }
    else if(age < 13){
        errorMessage.innerHTML = 'You must be 13 years old or older'
        return false;
    }
    errorMessage.innerHTML = ''
    return true;
}

function validateDist(){
    var dist = document.getElementById('dist').value

    if(dist == ''){
        errorMessage.innerHTML = 'Please fill your District Details'
        return false;
    }

    errorMessage.innerHTML = ''
    return true;
}

function validateAdr(){
    var adr = document.getElementById('adr').value

    if(adr == ''){
        errorMessage.innerHTML = 'Please fill your Address Details'
        return false;
    }

    errorMessage.innerHTML = ''
    return true;
}

function validatePostalCd(){
    var pscode = document.getElementById('pscode').value

    if(pscode == ''){
        errorMessage.innerHTML = 'Please fill your Postal Code'
        return false;
    }
    else if(!isdigit(pscode)){
        errorMessage.innerHTML = 'Postal Code must be numbers only'
        return false;
    }
    errorMessage.innerHTML = ''
    return true;
}