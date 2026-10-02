// ======================================
// ELEMENT
// ======================================

const header =
  document.querySelector(".header");

const nav =
  document.querySelector(".nav");

const menuButton =
  document.querySelector(".menu-button");



// ======================================
// HEADER SCROLL
// ======================================

function updateHeader() {

  if (
    window.scrollY > 40 &&
    !nav.classList.contains("open")
  ) {

    header.classList.add(
      "scrolled"
    );

  } else {

    header.classList.remove(
      "scrolled"
    );

  }

}


window.addEventListener(
  "scroll",
  updateHeader
);


updateHeader();



// ======================================
// MOBILE MENU
// ======================================

menuButton.addEventListener(
  "click",
  () => {

    nav.classList.toggle(
      "open"
    );


    const isOpen =
      nav.classList.contains(
        "open"
      );


    menuButton.textContent =
      isOpen
        ? "CLOSE"
        : "MENU";


    document.body.classList.toggle(
      "menu-open",
      isOpen
    );


    document.documentElement.classList.toggle(
      "menu-open",
      isOpen
    );


    if (isOpen) {

      header.classList.remove(
        "scrolled"
      );

    } else {

      updateHeader();

    }

  }
);



// ======================================
// NAV LINK
// ======================================

document
  .querySelectorAll(".nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove(
          "open"
        );


        menuButton.textContent =
          "MENU";


        document.body.classList.remove(
          "menu-open"
        );


        document.documentElement.classList.remove(
          "menu-open"
        );


        updateHeader();

      }
    );

  });



// ======================================
// REVEAL ANIMATION
// ======================================

const revealTargets =
  document.querySelectorAll(`
    .concept-heading,
    .concept-copy,
    .section-heading,
    .design-row,
    .menu-category,
    .access-heading,
    .access-list,
    .contact > *
  `);


revealTargets.forEach(
  element => {

    element.classList.add(
      "reveal"
    );

  }
);


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "active"
            );


            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },

    {
      threshold: 0.08
    }

  );


revealTargets.forEach(
  element => {

    observer.observe(
      element
    );

  }
);