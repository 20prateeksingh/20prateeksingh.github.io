document.addEventListener("click",function (e){
  if(e.target.classList.contains("gallery-item")){
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const alt = e.target.getAttribute("alt");
    document.getElementById("exampleModalLabel").textContent = alt;
    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
    myModal.show();
  }
})

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 1080px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1080 ||
    document.documentElement.scrollTop > 1080
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}