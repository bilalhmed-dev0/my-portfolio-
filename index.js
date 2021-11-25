// DECLARING VARIABLES 
let toggleButton = document.getElementsByClassName('burger')[0]  // declaring it and getting it from dom
let navbarLinks = document.getElementsByClassName('nav-links')[0]
   // ADDING CLICK LITSENING AND ACTIVATING THE NAV 
   
toggleButton.addEventListener('click',() =>{     // adding a litsener
  navbarLinks.classList.toggle('active')    // to activate it when clicked
})
