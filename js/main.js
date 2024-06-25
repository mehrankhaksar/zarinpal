const hamburgerIcon = document.getElementById("hamburger-icon"),
  crossIcon = document.getElementById("cross-icon"),
  mobileMenu = document.getElementById("mobile-menu"),
  mobileMenuFade = document.getElementById("mobile-menu-fade");

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.add("show-mobile-menu");
  mobileMenuFade.classList.add("show-mobile-menu-fade");
});

crossIcon.addEventListener("click", () => {
  mobileMenu.classList.remove("show-mobile-menu");
  mobileMenuFade.classList.remove("show-mobile-menu-fade");
});
