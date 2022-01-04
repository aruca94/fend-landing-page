/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//get html section length
// store in a variable
// can be individually selected with [0 or 1 etc]





//find element you want to dynamically add content to
//store said element in a variable
//create text node and put text inside it
//append text node to element
//append element to tag

    window.onload = () => {
        generateButtons();
    };


// add event listener to the body/ document/ page something
// to look for the sections and then run the below function
    const generateButtons = () => {
        let howMany = document.getElementsByClassName('landing__container').length;
        for(let i = 0; i < howMany; i++) {
        let sectionNum = i + 1;
        const headerNav = document.createElement('li');
        headerNav.setAttribute('id', `section ${sectionNum}`);
        const headerButton = document.createElement('button');
        const texxt = document.createTextNode(`Section ${sectionNum}`);
        headerNav.appendChild(headerButton);
        headerButton.appendChild(texxt);
        let placement = document.getElementById('navbar__list');
        placement.appendChild(headerNav);
        };
    };






    function addOrRemoveActiveClass(){
        const menuElements = document.getElementsByClassName("menu__link");
        for (menu of menuElements){
            if (menu.getAttribute('data-link') == sectionId){
                menu.classList.add("active");
            } else {
                if (menu.classList.contains("active")){
                    menu.classList.remove("active");
                }
            }
        }
    }





    // start event listeners for section detection


    const sections = document.getElementsByTagName('section');
        document.addEventListener('scroll', () => {

    // loop over sections
        for (let section of sections) {
            const bounding = section.getBoundingClientRect();
            if (bounding.top <= 150 && bounding.bottom >= 150) {
                section.classList.add('your-active-class');
                addOrRemoveActiveClass();
            } else {
                if (section.classList.contains('your-active-class')) {
                    section.classList.remove('your-active-class');
                }
            }

        }
    });



// start scroll-to-section


    document.addEventListener('click', () => {
        
    })


//end sccroll-to-section

//build navigation menu
// add functionality to distinguish the section in view
//add functionality to scroll to sections from nav
//refactor
//add additional sections to html doc
//test performance
//add active state to nav items when section is in viewport
//
//
//****************************
// landing container in html seems to be used for all sections
// maybe store that in a variable and loop over it to check
// how many there is and create that many buttons in the nav
// ****************************
//
//
// check to see when the section gets to the top of the page
// place a small border around the section when that happens
// may have to use event listeners to check this, idk
// as it goes from section to section that is at the top
// remove border and add border to next section



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
