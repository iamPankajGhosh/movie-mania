const rightArrows = document.querySelectorAll(".right");
const leftArrows = document.querySelectorAll(".left");
const movieLists = document.querySelectorAll(".movie-list");

rightArrows.forEach((right, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;

  right.addEventListener("click", () => {
    clickCounter++;
    if (itemNumber - (3 + clickCounter) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].getBoundingClientRect().x - 390
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
