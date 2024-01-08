let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let backButton = document.getElementById("back");
let seeMoreButtons = document.querySelectorAll(".seeMore");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");

let timeAutoNext = 5000;
let runAutoRun = setTimeout(() => {
  nextButton.click();
}, timeAutoNext);

nextButton.onclick = function () {
  showSlider("next");
};
prevButton.onclick = function () {
  showSlider("prev");
};
let unAcceptClick;
const showSlider = (type) => {
  // membuat pointer event tidak bisa diklik
  nextButton.style.pointerEvents = "none";
  prevButton.style.pointerEvents = "none";
  //   remove prev and next class in css
  carousel.classList.remove("prev", "next");
  let items = document.querySelectorAll(".carousel .list .item");
  //   next click event
  if (type === "next") {
    listHTML.appendChild(items[0]);
    carousel.classList.add("next");
  }
  //   prev click event
  else {
    let positionLast = items.length - 1;
    listHTML.prepend(items[positionLast]);
    carousel.classList.add("prev");
  }
  clearTimeout(unAcceptClick);
  //   memberikan waktu untuk pointer event diklik kembali
  unAcceptClick = setTimeout(() => {
    nextButton.style.pointerEvents = "auto";
    prevButton.style.pointerEvents = "auto";
  }, 2000);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextButton.click();
  }, timeAutoNext);
};

// seeMore click
seeMoreButtons.forEach((button) => {
  button.onclick = function () {
    carousel.classList.add("showDetail");
    clearTimeout(runAutoRun);
  };
});

backButton.onclick = function () {
  carousel.classList.remove("showDetail");
  setTimeout(runAutoRun);
};
