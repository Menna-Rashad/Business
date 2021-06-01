const NavToTopButton = document.querySelector(".navToTop");

NavToTopButton.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 1868) {
    NavToTopButton.classList.add("show");
  } else {
    NavToTopButton.classList.remove("show");
  }
});
