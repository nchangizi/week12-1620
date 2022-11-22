const clickButton = document.querySelector('.click-me');
// console.log(clickButton);
function clickHandler()
{
    alert("You clicked me!")
}
clickButton.addEventListener("click", clickHandler);