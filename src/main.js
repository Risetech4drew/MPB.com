(function () {
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
    hamburger.classList.toggle("opened");
    hamburger.setAttribute(
      "aria-expanded",
      hamburger.classList.contains("opened")
    );
    select(".mobile-menu").classList.toggle("mobile-menu-active");
    select(".mobile-menu > li", (all = true)).forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navlinkfade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
  // mobile-nav dropdowns
  on("click", ".dropdown", (e) => {
    const dropdownToggler = e.target.closest(".dropdown-menu-toggler");
    if (!dropdownToggler && e.target.closest(".dropdown") != null) return;
    let currentDropdown = dropdownToggler.closest(".dropdown-menu");
    if (currentDropdown) {
      currentDropdown.style.maxHeight = currentDropdown.scrollHeight + "px";
    }
  });
})();
