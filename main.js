window.addEventListener("scroll", function () {
  var block3 = document.querySelector(".block3");
  var block3Top = block3.offsetTop;
  var windowHeight = window.innerHeight;
  var scrollPosition = window.pageYOffset;

  if (scrollPosition > block3Top - windowHeight / 2) {
    var phonePopup = document.getElementById("phone-popup");
    phonePopup.style.display = "block";

    var closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", function () {
      phonePopup.style.display = "none";
    });
  }
});
