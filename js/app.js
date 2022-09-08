window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

const input = document.getElementById("searchbar");
const pictures = document.querySelectorAll(".photo a");

input.addEventListener("keyup", function (event) {
  for (let i = 0; i < pictures.length; i++) {
    if (
      pictures[i]
      .getAttribute("data-caption")
      .toLowerCase()
      .includes(input.value.toLowerCase())
    ) {
      pictures[i].parentElement.style.display = "";
    } else {
      pictures[i].parentElement.style.display = "none";
    }
  }
});