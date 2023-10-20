/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeList = [];
async function geTempletData(){
    const response = await fetch("https://byu-cse.github.io/cse121b-course/week05/temples.json")
    templeList = await response.json()

    console.log('TEMPLE DATA:', templeList);
}
geTempletData();

/* async displayTemples Function */
const displayTemples = (temples) => {};



/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
