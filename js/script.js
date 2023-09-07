
// navigation bar effect
window.addEventListener("scroll", function () {
  const header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// skills

const skillsContent = document.querySelectorAll('.skills_content');
const skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
  const itemClass = this.parentNode.className;

  if (itemClass.includes('skills_close')) {
    this.parentNode.className = 'skills_content skills_open';
  } else {
    this.parentNode.className = 'skills_content skills_close';
  }


  const skillsSection = document.getElementById('skills');
  skillsSection.scrollIntoView({ behavior: 'smooth' });
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

// project

const projectModals = document.querySelectorAll(".project-model");
const imgCards = document.querySelectorAll(".img-card");
const projectCloseBtns = document.querySelectorAll(".project-close-btn");

var projectModal = function (modalClick) {
  projectModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    projectModal(i);
  });
});

projectCloseBtns.forEach((projectCloseBtn) => {
  projectCloseBtn.addEventListener("click", () => {
    projectModals.forEach((projectModalView) => {
      projectModalView.classList.remove("active");
    })

  })
})

// scroll to top
const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", this.window.scrollY > 500);
})

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})


document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      let sectionHeight = current.offsetHeight;
      let sectionTop = current.offsetTop - 50;
      let id = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav-items a[href="#${id}"]`).classList.add("active");
      } else {
        document.querySelector(`.nav-items a[href="#${id}"]`).classList.remove("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-items a");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    // Initialize a variable to keep track of the currently active section
    let currentActiveSection = null;

    sections.forEach((current) => {
      let sectionHeight = current.offsetHeight;
      let sectionTop = current.offsetTop - 50;
      let id = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        currentActiveSection = id;

        // Remove the "active" class from all navigation items
        navItems.forEach((navItem) => {
          navItem.classList.remove("active");
        });

        // Add the "active" class to the navigation item corresponding to the current section
        document.querySelector(`.nav-items a[href="#${id}"]`).classList.add("active");
      }
    });

    // If no section is active, remove the "active" class from all navigation items
    if (!currentActiveSection) {
      navItems.forEach((navItem) => {
        navItem.classList.remove("active");
      });
    }
  });
});



// dark theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme"); // Toggle the dark theme class
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});
const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  document.body.classList[savedIcon === "sun" ? "add" : "remove"]("sun");

}

// resposive navigation menu

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
})

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
})

navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active");
  })
});

// common reveal option
ScrollReveal({ 
  reset: true,
  distance: '60px',
  duration: 2500,
  delay:100
});

// target elemnts
ScrollReveal().reveal('.home .info h2,project_section_title,skills_section_title,section-title-01,section-title-02', {delay:0, origin:'left'});
ScrollReveal().reveal('.home .info h2, .home .info h3,.about-info .btn', {delay:0, origin:'right'});
ScrollReveal().reveal('.home .info .btn', {delay:0, origin:'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay:0, origin:'left',interval:200});
ScrollReveal().reveal('.home-img ,.about-img,.qualification', {delay:0, origin:'bottom'});
ScrollReveal().reveal('.about .description ,.contact-right', {delay:0, origin:'right'});
ScrollReveal().reveal('.skills_content, .contact-left h2', {delay:0, origin:'right'});
ScrollReveal().reveal('footer .group', {delay:0, origin:'top',interval:100});
ScrollReveal().reveal('.img-card', {delay:0, origin:'right'});
ScrollReveal().reveal('.about .description', {delay:0, origin:'right'});








