const buttonShare = document.querySelector(".button");
const profile = document.querySelector(".profile");
const share = document.querySelector(".share");
const buttonClicked = document.querySelector(".button--clicked");

buttonShare.addEventListener("click", function () {
  profile.style.display = "none";
  share.style.display = "flex";
});

buttonClicked.addEventListener("click", function () {
  profile.style.display = "flex";
  share.style.display = "none";
});