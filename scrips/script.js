const clickButton = document.querySelector('.click-me');
// console.log(clickButton);
function clickHandler()
{
    alert("You clicked me!");
    // clickButton.removeEventListener("click", clickHandler);
}
clickButton.addEventListener("click", clickHandler, {once:true} );

