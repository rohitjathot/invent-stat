
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {   
	if(openDropdown.classList.contains('show') && (!event.target.matches('.w3-button w3-bar-item'))){
 document.getElementById("myDropdown").classList.toggle("show");
}
}
