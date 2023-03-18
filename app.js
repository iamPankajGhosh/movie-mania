const rightArrows = document.querySelectorAll(".right");
const leftArrows = document.querySelectorAll(".left");
const movieLists = document.querySelectorAll(".movie-list");

rightArrows.forEach((right, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;

  right.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (3 + clickCounter) + (3 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].getBoundingClientRect().x - 390
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});


//toggle
const toggleBall = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.slide-arrow,.navbar-container,.sidebar,.side-menu-icon,.toggle,.toggle-ball"
);

toggleBall.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
});
