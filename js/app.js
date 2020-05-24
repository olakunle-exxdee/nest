const hamburger = document.querySelector(".hamburger");

const links = document.querySelector(".unorder_list");

hamburger.addEventListener("click", function () {
  if (links.classList.contains("show")) {
    links.classList.remove("show");
  } else {
    links.classList.add("show");
  }
});
