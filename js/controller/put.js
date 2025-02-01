import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put.js";

// Fungsi untuk memvalidasi input
function validateInput(value, fieldName) {
    if (!value) {
        alert(`Please enter a valid ${fieldName}`);
        return false;
    }
    return true;
}

// Fungsi untuk mengambil data dan melakukan update
function pushData() {
    let name = getValue("name");
    let description = getValue("description");
    let ingredients = getValue("ingredients");
    let calories = parseFloat(getValue("calories"));
    let category = getValue("category");
    let image = getValue("image");

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
            category: category, // Ambil kategori dari dropdown
            image: image, // Ambil gambar (jika ada input gambar)
        };

        putData(urlPUT, data, AmbilResponse); // Kirim data ke API untuk update
    }
}

// Pastikan tombol memiliki id yang sesuai dengan "submitButton" di form HTML
// Pastikan event listener ditambahkan pada form, bukan pada tombol
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("menuEditForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Mencegah form dari submit otomatis
        pushData(); // Menjalankan fungsi pushData
    });
});
