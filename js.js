var password = document.getElementById("password");
var errorMessage = document.querySelector(".password-validation");
var lowerUpper = document.querySelector(".lowerupper i");
var number = document.querySelector(".number i");
var special = document.querySelector(".specialcharacter i");
var passwordLength = document.querySelector(".eight i");
var show = document.getElementById("eye");
var hide = document.getElementById("eye-slash");

function myFunction() {
  errorMessage.style.display = "block";
  
  if (password.type === "password")
  {
    password.type = "text";
    show.style.visibility = "hidden";
    hide.style.visibility = "visible";
   
  }
  else
  {
    password.type = "password";
    show.style.visibility = "visible";
    hide.style.visibility = "hidden";
    errorMessage.style.display = "block";
  }
}
password.onfocus  = function()
{
  errorMessage.style.display = "block"; 
}

password.onblur = function()
{
  errorMessage.style.display = "none"; 
}
password.onkeyup = function()
{
  if(password.value.length > 8)  
  {     
     passwordLength.classList.remove("fa-times-circle");
     passwordLength.classList.add("fa-check-circle");  
    
  }
  else
  {
     passwordLength.classList.remove("fa-check-circle");
     passwordLength.classList.add("fa-times-circle");     
  }
  if(password.value.match(/[0-9]/))
  {    
    number.classList.remove("fa-times-circle");
    number.classList.add("fa-check-circle");    
  }
  else
  {
    number.classList.remove("fa-check-circle");
    number.classList.add("fa-times-circle");    
  }
  if(password.value.match(/[!,@,#,$,%,^,&,*,(,)]/))
  {
    special.classList.remove("fa-times-circle");
    special.classList.add("fa-check-circle");    
  }
  else
  {
    special.classList.remove("fa-check-circle");
    special.classList.add("fa-times-circle");    
  }
  if (password.value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) 
  {    
    lowerUpper.classList.remove("fa-times-circle");
    lowerUpper.classList.add("fa-check-circle");    
  }
  else
  {
    lowerUpper.classList.remove("fa-check-circle");
    lowerUpper.classList.add("fa-times-circle");
    
  }
}

