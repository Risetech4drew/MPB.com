(function () {
  // Store the initial body padding to prevent layout shift
  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  let initialBodyPadding =
    parseInt(
      window.getComputedStyle(document.body).getPropertyValue("padding-right")
    ) || 0;
  // Function to disable scroll
  function disableScroll() {
    if (document.body.style.overflow !== "hidden") {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${
        initialBodyPadding + scrollbarWidth
      }px`;
    }
  }
  // Function to enable scroll
  function enableScroll() {
    if (document.body.style.overflow === "hidden") {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }

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
      ? disableScroll()
      : enableScroll();
    select(".menu > li", (all = true)).forEach((link, index) => {
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
  // stick header on top on scroll
  // let selectHeader = select("#header");
  // if (selectHeader) {
  //   let headerOffset = selectHeader.offsetTop;
  //   let nextElement = selectHeader.nextElementSibling;
  //   const headerFixed = () => {
  //     if (headerOffset - window.scrollY <= 0) {
  //       selectHeader.classList.add("fixed-top");
  //       // nextElement.classList.add("scrolled-offset");
  //     } else {
  //       selectHeader.classList.remove("fixed-top");
  //       // nextElement.classList.remove("scrolled-offset");fixed-top
  //     }
  //   };
  //   window.addEventListener("load", headerFixed);
  //   onscroll(document, headerFixed);
  // }

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
})();
