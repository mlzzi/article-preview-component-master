const btn = document.querySelector(".info__share-btn");
const btnTwo = document.querySelector(".social__btn");

const openShareIcons = function () {
  const share = document.querySelector(".social");
  if (share.style.display === "flex") {
    share.style.display = "none";
  } else {
    share.style.display = "flex";
    document.addEventListener("keydown", function (e) {
      share.style.display = "flex";
    });
  }
};

btn.addEventListener("click", openShareIcons);
btnTwo.addEventListener("click", openShareIcons);
