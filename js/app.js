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
const links = document.getElementsByClassName('.menu__link');
const list = document.getElementsByTagName('li');

// Global functions end
const generateButtons = () => {
    const navBarList = document.getElementById("navbar__list");
    for (section of sections) {
      const newLi = document.createElement("li");
      newLi.setAttribute("class", `${section.id}`);
      //Create the A so the html looks like <li><a></a></li>
      const newA = document.createElement("a");
      //Adding the A to the li
      newLi.appendChild(newA);
      //Adding the href so it links to the sections with the id
      newA.innerText = `${section.dataset.nav}`;
      //appending everything to the nav bar
      navBarList.appendChild(newLi);
      scroll(newLi, section);
    }
  };
  window.onload = () => {
    generateButtons();
  };
  // create a smooth scroll function
  function scroll(clickedElement, scrolledElement) {
    clickedElement.addEventListener("click", function (e) {
      e.preventDefault();
      scrolledElement.scrollIntoView({ behavior: "smooth" });
    });
  }
// dynamically build nav links end
// section detection and nav active state with event listener start
        document.addEventListener('scroll', () => {
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