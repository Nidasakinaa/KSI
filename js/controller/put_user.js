import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put_user.js";

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
    let phone = getValue("phone");
    let username = getValue("username");
    let password = parseFloat(getValue("password"));
    let role = getValue("role");

    if (
        validateInput(name, "FullName") &&
        validateInput(phone, "Phone") &&
        validateInput(username, "Username") &&
        validateInput(password, "Password") &&
        validateInput(role, "Role") 
    ) {
        let data = {
            name: name,
            phone: phone,
            username: username,
            password: password,
            role: role,
        };

        putData(urlPUT, data, AmbilResponse); // Kirim data ke API untuk update
    }
}

// Pastikan tombol memiliki id yang sesuai dengan "submitButton" di form HTML
// Pastikan event listener ditambahkan pada form, bukan pada tombol
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("userEditForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Mencegah form dari submit otomatis
        pushData(); // Menjalankan fungsi pushData
    });
});
