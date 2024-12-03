// JavaScript to handle dropdown visibility on hover
document.querySelectorAll("nav ul li").forEach(item => {// Select all list items (`li`) inside the navigation bar (`nav ul`) and loop through them
	item.addEventListener("mouseover", () => { // Add a `mouseover` event listener to each navigation item (triggered when mouse hovers over the item)
		let dropdown = item.querySelector(".dropdown"); // Find the dropdown menu (if it exists) within the current navigation item
		if (dropdown) {
			dropdown.style.display = "block";
		} // If a dropdown menu exists, make it visible by setting `display` to "block"
	});
	item.addEventListener("mouseleave", () => { // Add a `mouseleave` event listener to each navigation item (triggered when the mouse leaves the item)
		let dropdown = item.querySelector(".dropdown"); // Find the dropdown menu (if it exists) within the current navigation item
		if (dropdown) {
			dropdown.style.display = "none"; // If a dropdown menu exists, hide it by setting `display` to "none"
		} 

	});
});
