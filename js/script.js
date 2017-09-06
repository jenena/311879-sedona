var link = document.querySelector(".hotel-search");

var popup = document.querySelector(".modal-search");

var modalButton = popup.querySelector(".modal-button");

var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var children = popup.querySelector("[name=children]");
var adult = popup.querySelector("[name=adult]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-hide");
});

modalButton.addEventListener("click", function (evt) {
  if (!dateIn.value || !dateOut.value || !children.value || !adult.value) {
    evt.preventDefault();
  }
})
