const clickButton = document.querySelector(".click-me");
// console.log(clickButton);
function clickHandler() {
  alert("You clicked me!");
  // clickButton.removeEventListener("click", clickHandler);
}
clickButton.addEventListener("click", clickHandler, { once: true });

function changeBGPink() {
  // document.body.style.backgroundColor = "pink";
  document.body.classList.add("pinkBG");
}
clickButton.addEventListener("click", changeBGPink);

function changeText() {
  if (clickButton.textContent === "Click Me!") {
    clickButton.textContent = "clicked";
  } else if (clickButton.textContent === "clicked") {
    clickButton.textContent = "Click Me!";
  }
}
clickButton.addEventListener("click", changeText);

function updateImage()
{
    const image = document.querySelector("#shoppingCart");
    image.src = "images/263142.png";
    image.alt = "shopping cart";
    image.width="100";
    image.height="100";
    // image.setAttribute("src","")
}

clickButton.addEventListener("click", updateImage);
