'use strict';


// navbar variables
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');



// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

// shopping cart toggle function
const cartToggleFunc = function () { shoppingCart.classList.toggle('active') }



// add event on nav-toggle-btn
navToggleBtn.addEventListener('click', function () {

  // If the shopping-cart has an `active` class, it will be removed.
  if (shoppingCart.classList.contains('active')) cartToggleFunc();

  navToggleFunc();

});

// add event on cart-toggle-btn
cartToggleBtn.addEventListener('click', function () {

  // If the navbar-nav has an `active` class, it will be removed.
  if (nav.classList.contains('active')) navToggleFunc();

  cartToggleFunc();

});

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', navToggleFunc);

}


function validateForm() {
  // Get all the input fields on the form
  var fields = document.getElementsByTagName("input");
  document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  // Loop through all the fields and check if any are empty
  for (var i = 0; i < fields.length; i++) {
    // If the field is empty, display an error message and return false
    if (fields[i].value == "") {
      alert("Please fill in all required fields!");
      return false;
    }
  }

  // If all fields are filled in, return true
  return true;
}

// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}