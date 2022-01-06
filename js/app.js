/**
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
// Global functions start
const sections = document.getElementsByTagName('section');
// Global functions end
    window.onload = () => {
        generateButtons();
    };

// dynamically build nav links start
    const generateButtons = () => {
        const navBarList = document.getElementById('navbar__list');
        for (let i = 1; i <= sections.length; i++) {
            const newLi = document.createElement('li');
            //new
            newLi.setAttribute('class', 'section' + i);
            //Create the A so the html looks like <li><a></a></li>
            const newA = document.createElement('a');
            //Adding the A to the li
            newLi.appendChild(newA);
            //Adding the href so it links to the sections with the id
            newA.setAttribute('href', '#section' + i);
            newA.innerText = 'Section ' + i;
            //appending everything to the nav bar
            navBarList.appendChild(newLi);
          }
    };
// dynamically build nav links end
// section detection and nav active state with event listener start
        document.addEventListener('scroll', (e) => {
            e.preventDefault();
        for (let section of sections) {
            const bounding = section.getBoundingClientRect();
            if (bounding.top <= 150 && bounding.bottom >= 150) {
                const id = section.getAttribute('id');
                document.querySelector(`.${id}`).classList.add('active');
                section.classList.add('your-active-class');
            } else {
                    const id = section.getAttribute('id');
                    document.querySelector(`.${id}`).classList.remove('active');
                    section.classList.remove('your-active-class');
            }
        }
    });
// section detection and nav active state with event listener end