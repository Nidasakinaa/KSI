import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function validateInput(value, fieldName) {
    if (!value) {
        alert(`Please enter a valid ${fieldName}`);
        return false;
    }
    return true;
}

function pushData() {
    
    let name = getValue("name");
    let description = getValue("description");
    let ingredients = getValue("ingredients");
    let calories = parseFloat(getValue("calories"));
    let category = getValue("category");
    let image = getValue("image");

    console.log("URL yang dikirim:", image); // Debugging URL gambar

    if (
        validateInput(name, "Name") &&
        validateInput(description, "Description") &&
        validateInput(ingredients, "Ingredients") &&
        validateInput(calories, "Calories") &&
        validateInput(category, "Category") &&
        validateInput(image, "Image") 

    ) {
        let data = {
            name: name,
            description: description,
            ingredients: ingredients,
            calories: calories,
            category: category,    
            image: image,
        };
        postData(urlPOST, data, AmbilResponse);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("menuInsertForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Mencegah form dari submit otomatis
        pushData(); // Menjalankan fungsi pushData
    });
});
