(function () {
  // Store the initial body padding to prevent layout shift
  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  let initialBodyPadding =
    parseInt(
      window
        .getComputedStyle(document.querySelector("body"))
        .getPropertyValue("padding-right")
    ) || 0;
  // Function to disable scroll
  const disableMainScroll = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${
        initialBodyPadding + scrollbarWidth
      }px`;
    }
  };
  // Function to enable scroll
  const enableMainScroll = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  };

  document.body.addEventListener(
    "touchmove",
    function (e) {
      if (navbar.classList.contains("active") && !navbar.contains(e.target)) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  // selector helper function
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  // eventlistener helper function
  const on = (type, el, listener, all = false) => {
    let targetEl = select(el, all);
    if (targetEl) {
      if (all) {
        targetEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        targetEl.addEventListener(type, listener);
      }
    }
  };

  const preventTouchEvent = () => {
    on(
      "touchmove",
      "body",
      (e) => {
        if (
          navbar.classList.contains("navbar-active") &&
          !navbar.contains(e.target)
        ) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
  };
  // mobile nav toggle
  on("click", "#hamburger-el", function (e) {
    const hamburger = select("#hamburger-el");
    const navbar = select(".navbar");
    hamburger.classList.toggle("opened");
    hamburger.setAttribute(
      "aria-expanded",
      hamburger.classList.contains("opened")
    );
    select(".overlay").classList.toggle("active");
    navbar.classList.toggle("navbar-active");
    navbar.classList.contains("navbar-active")
      ? disableMainScroll()
      : enableMainScroll();
    //preventing touch events on body
    document.body.addEventListener(
      "touchmove",
      (e) => {
        if (
          navbar.classList.contains("navbar-active") &&
          !navbar.contains(e.target)
        ) {
          e.preventDefault();
        }
      },
      { passive: false }
    );
    // end
    select(".menu > li", true).forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });

  const collapseDropdown = () => {
    const navbar = select(".navbar");
    navbar
      .querySelector(".dropdown.active .dropdown-menu")
      .removeAttribute("style");
    navbar.querySelector(".dropdown.active").classList.remove("active");
  };

  on("click", ".navbar", (e) => {
    const navbar = select(".navbar");
    if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
      e.preventDefault();

      const menuDropdown = e.target.parentElement;

      if (menuDropdown.classList.contains("active")) {
        collapseDropdown();
      } else {
        if (navbar.querySelector(".dropdown.active")) {
          collapseDropdown();
        }

        menuDropdown.classList.add("active");
        const dropdownMenu = menuDropdown.querySelector(".dropdown-menu");
        dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
      }
    }
  });
  // easy on scroll helper function
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  class TypeWritter {
    constructor(textElement, words, wait = 3000) {
      this.textElement = textElement;
      this.words = words;
      this.txt = "";
      this.wait = parseInt(wait, 10);
      this.wordIndex = 0;
      this.type();
      this.isDeleting = false;
    }
    type() {
      // getting current index
      const current = this.wordIndex % this.words.length;
      // get word from the current index
      const fullTxt = this.words[current];
      // check if deleting
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      }
      // adding char
      else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
      // inserting text into the DOM
      this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      let typeSpeed = 100;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }
      // if word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        // setting isDeleting to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        // move to the next word
        this.wordIndex++;
        // pause abit before type starts
        typeSpeed = 100;
      }
      setTimeout(() => this.type(), typeSpeed);
    }
  }

  function initTypeWritter() {
    const textElement = document.querySelector(".typewriter-text");
    const words = JSON.parse(textElement.getAttribute("data-words"));
    const wait = textElement.getAttribute("data-wait");

    new TypeWritter(textElement, words, wait);
  }
  initTypeWritter();

  // swiper
  new Swiper(".itemSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
      },
    },
  });

  // date function
  const setYear = () => {
    const dateEl = select("#date-el");
    let date = new Date();
    let year = date.getFullYear();
    dateEl.textContent = year;
  };
  setYear();
})();
