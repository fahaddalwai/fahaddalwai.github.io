'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


const programmingLanguages = [
  { name: "py", iconUrl: "https://skillicons.dev/icons?i=py" },
  { name: "go", iconUrl: "https://skillicons.dev/icons?i=go" },
  { name: "java", iconUrl: "https://skillicons.dev/icons?i=java" },
  { name: "cpp", iconUrl: "https://skillicons.dev/icons?i=cpp" },
  { name: "c", iconUrl: "https://skillicons.dev/icons?i=c" },
  { name: "vue", iconUrl: "https://skillicons.dev/icons?i=vue" },
  { name: "kotlin", iconUrl: "https://skillicons.dev/icons?i=kotlin" },
  { name: "js", iconUrl: "https://skillicons.dev/icons?i=js" },
  { name: "sql", iconUrl: "https://skillicons.dev/icons?i=mysql" },
  { name: "mongodb", iconUrl: "https://skillicons.dev/icons?i=mongodb" }
];

const devOpsTools = [
  { name: "aws", iconUrl: "https://skillicons.dev/icons?i=aws" },
  { name: "azure", iconUrl: "https://skillicons.dev/icons?i=azure" },
  { name: "tensorflow", iconUrl: "https://skillicons.dev/icons?i=tensorflow" },
  { name: "docker", iconUrl: "https://skillicons.dev/icons?i=docker" },
  { name: "elasticsearch", iconUrl: "https://skillicons.dev/icons?i=elasticsearch" },
  { name: "fastapi", iconUrl: "https://skillicons.dev/icons?i=fastapi" },
  { name: "kubernetes", iconUrl: "https://skillicons.dev/icons?i=kubernetes" },
  { name: "flask", iconUrl: "https://skillicons.dev/icons?i=flask" },
  { name: "gitlab", iconUrl: "https://skillicons.dev/icons?i=gitlab" },
  { name: "redis", iconUrl: "https://skillicons.dev/icons?i=redis" }
];

function renderTechStackList(containerId, techStack) {
  const container = document.getElementById(containerId);
  techStack.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'techstack-item';
    listItem.innerHTML = `<img src="${item.iconUrl}" alt="${item.name}">`;
    container.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderTechStackList('programming-languages', programmingLanguages);
  renderTechStackList('devops-tools', devOpsTools);
});




// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}