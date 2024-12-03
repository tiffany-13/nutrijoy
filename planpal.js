/*The information of the images in the javascript file can be found in the HTML files of the recipe pages*/
function generateRandomFood() {
    // Data for each category with URLs and image links
    const grains = [
        { name: "Egg Fried Rice", url: "grainproduct/rice.html", img: "images/recipe/rice.jpg" },
        { name: "Ba Bao Porridge", url: "grainproduct/porridge.html", img: "images/recipe/porridge.jpg" },
        { name: "Cantonese Yee Mee", url: "grainproduct/mee.html", img: "images/recipe/mee.jpg" },
        { name: "Chinese Stir-Fried Noodles", url: "grainproduct/noodle.html", img: "images/recipe/noodle.jpg" }
    ];

    const vegetables = [
        { name: "Chinese Vegetable Stir-fry", url: "vege/chinesevege.html", img: "images/recipe/chinesevege.jpg" },
        { name: "Green Beans with Ginger", url: "vege/greenbeans.html", img: "images/recipe/greenbean.jpg" },
        { name: "Tomato Egg Stir-Fry", url: "vege/tomato.html", img: "images/recipe/tomato.jpg" },
        { name: "Broccoli with Soy Sauce", url: "vege/broccoli.html", img: "images/recipe/broccoli.jpg" }
    ];

    const meat = [
        { name: "Sweet and Sour Pork", url: "meat/pork.html", img: "images/recipe/pork.jpg" },
        { name: "Kung Bao Chicken", url: "meat/kungbao.html", img: "images/recipe/kungbao.jpg" },
        { name: "Stewed Chicken with Chestnuts", url: "meat/stewed.html", img: "images/recipe/stewed.jpg" },
        { name: "Baked Sea Bass with Lemon Grass", url: "meat/seabass.html", img: "images/recipe/seabass.jpg" }
    ];

    // Object to store categories and their corresponding data
    const categories = {
        grains: grains,
        vegetables: vegetables,
        meat: meat
    };

    // Get selected categories from the checkboxes on the page
    const selectedCategories = Array.from(
        document.querySelectorAll('input[name="category"]:checked') // Select all checked checkboxes
    ).map(input => input.value); // Extract the "value" of each checkbox

    // If no category is selected, display an error message and stop the function
    if (selectedCategories.length === 0) {
        document.getElementById("result").innerHTML = "Please select at least one category.";
        return; // Exit the function early
    }

    // Combine random food from the selected categories
    let randomFood = selectedCategories.map(category => {
        const foodList = categories[category]; // Get the food list for the selected category
        const randomIndex = Math.floor(Math.random() * foodList.length); // Generate a random index
        return foodList[randomIndex]; // Return a random food item from the category
    });

    // Create HTML content to display the random food items
    let resultHTML = "<br>";
    resultHTML += randomFood.map(food => `
        <div class="food-item">
            <a href="${food.url}" target="_suggested">
                <img src="${food.img}" alt="${food.name}" class="food-image" style="width:150px; height:150px;">
                <p>${food.name}</p>
            </a>
        </div>
    `).join(""); // Use template literals to create the structure for each food item

    // Update the HTML content of the "result" element with the generated food items
    document.getElementById("result").innerHTML = resultHTML;
}
