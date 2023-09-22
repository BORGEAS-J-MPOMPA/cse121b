/* W02-Task - Profile Home Page */
let fullname = "BORGEAS JULFÉRIQUE MPOMPA";
console.log(fullname);

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const currentYear = new Date().getFullYear();
console.log(`It is now ${currentYear}.`);

const profilePicture = "images/JulFe3+.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.getElementById('home.img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullname}</strong>`;

nameElement.textContent = `<strong>${currentYear}</strong>`;





/* Step 5 - Array */






