/* ==========================================================================
   navbar.js — phone menu toggle + active-section highlight.
   Works with the markup in navbar.html. No settings to change:
   it reads the links in the menu and watches the sections they point to.
   ========================================================================== */
(function () {
  "use strict";

  var navbar = document.querySelector("[data-navbar]");
  if (!navbar) return;

  var toggle = navbar.querySelector("[data-navbar-toggle]");
  var menu = navbar.querySelector("[data-navbar-menu]");
  if (!toggle || !menu) return;

  navbar.classList.add("is-enhanced");

  /* ---------- Phone menu ---------- */
  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    navbar.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Esc closes the menu and returns focus to the button.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navbar.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Picking a link closes the menu.
  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  // Growing past phone width resets the menu.
  var desktop = window.matchMedia("(min-width: 768px)");
  var onWidthChange = function () { if (desktop.matches) setOpen(false); };
  if (desktop.addEventListener) desktop.addEventListener("change", onWidthChange);

  /* ---------- Active section ---------- */
  if (!("IntersectionObserver" in window)) return;

  var links = Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]'));
  var linkFor = {};
  links.forEach(function (link) {
    var section = document.getElementById(link.getAttribute("href").slice(1));
    if (section) linkFor[section.id] = link;
  });

  function setActive(id) {
    links.forEach(function (link) {
      if (link === linkFor[id]) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  // A section is "active" while it crosses a band near the top of the screen.
  // Sections with no nav link (the hero, Scope, Conclusion) clear the
  // highlight, so it never points at a section you have scrolled away from.
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActive(linkFor[entry.target.id] ? entry.target.id : null);
    });
  }, { rootMargin: "-30% 0px -65% 0px" });

  var main = document.querySelector("main") || document.body;
  Array.prototype.forEach.call(main.querySelectorAll("section[id]"), function (section) {
    observer.observe(section);
  });
})();
