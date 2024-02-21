const nameError= document.querySelector("#nameError");
const phoneError= document.querySelector("#phoneError");
const emailError= document.querySelector("#emailError");
const submitError= document.querySelector(".submitError");
const emailConfirm = document.querySelector("#emailConfirm");

function nameValidation() 
{
	var	name = document.forms['signup']['fname'].value;
	if(name.length==0) {
		nameError.innerHTML = "Please enter your name.";
		nameError.classList.add("fa-close");
		nameError.classList.remove("fa-check-circle");
		return	false;
		}
	if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		nameError.innerHTML = "Write your full name.";
		nameError.classList.remove("fa-check-circle");
		nameError.classList.add("fa-close");
		return false;
	}
	nameError.innerHTML = "";
	nameError.classList.remove("fa-close");
	nameError.classList.add("fa-check-circle");
	return true;
}

function phoneValidation() 
{
	var	phone = document.forms['signup']['phone'].value;
	if(phone.length==0) {
		phonError.innerHTML = "Please enter your phone number.";
		phoneError.classList.add("fa-close");
		phoneError.classList.remove("fa-check-circle");
		return	false;
		}
	if(!phone.match(/^[0-9]{10}$/)) {
		phoneError.innerHTML = "Enter numbers in 10 digits.";
		phoneError.classList.remove("fa-check-circle");
		phoneError.classList.add("fa-close");
		return false;
	}
	phoneError.innerHTML = "";
	phoneError.classList.remove("fa-close");
	phoneError.classList.add("fa-check-circle");
	return true;
}

function emailValidation() 
{
	var	email = document.forms['signup']['email'].value;
	if(email.length==0) {
		emailError.innerHTML = "Please enter your email.";
		emailError.classList.add("fa-close");
		emailError.classList.remove("fa-check-circle");
		return	false;
		}
	if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
		emailError.innerHTML = "Enter in requested format.";
		emailError.classList.remove("fa-check-circle");
		emailError.classList.add("fa-close");
		return false;
	}
	emailError.innerHTML = "";
	emailError.classList.remove("fa-close");
	emailError.classList.add("fa-check-circle");
	return true;
}

function emailConfirm() 
{
	var emailCon = document.forms['signup']['conEmail'].value;
	var email = document.forms['signup']['email'].value;
	if(emailCon.length == 0) {
		emailConfirm.innerHTML = "Please re-enter your email.";
		emailConfirm.classList.add("fa-close");
		emailConfirm.classList.remove("fa-check-circle");
		return false;
	}
	if(!emailCon.value == email.value) {
		emailConfirm.innerHTML = "Re-check your email.";
		emailConfirm.classList.add("fa-close");
		emailConfirm.classList.remove("fa-check-circle");
		return false;
	}
	emailConfirm.innerHTML = "";
	emailConfirm.classList.add('fa-check-circle');
	emailConfirm.classList.remove("fa-close");
	return true;
}