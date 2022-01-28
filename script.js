const btn = document.querySelector(".info__share-btn");
const btnTwo = document.querySelector(".social__btn");

const openShareIcons = function () {
  const share = document.querySelector(".social");
  if (share.style.display === "none") {
    share.style.display = "flex";
  } else {
    share.style.display = "none";
    document.addEventListener("keydown", function (e) {
      share.style.display = "none";
    });
  }
};

btn.addEventListener("click", openShareIcons);
btnTwo.addEventListener("click", openShareIcons);
