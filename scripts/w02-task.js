/* W02-Task - Profile Home Page */
/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "BORGEAS JULFÉRIQUE MPOMPA";
// console.log(fullName);
const currentYear = new Date().getFullYear();
// console.log(`It is now ${currentYear}.`);

const profilePicture = 'images/JulFe3+.jpg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector('img[alt="Placeholder Image"]');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);




/* Step 5 - Array */






