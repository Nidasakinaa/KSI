import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post_user.js";

function validateInput(value, fieldName) {
    if (!value) {
        alert(`Please enter a valid ${fieldName}`);
        return false;
    }
    return true;
}

function pushDataUser() {
    
    let name = getValue("name");
    let phone = getValue("phone");
    let username = getValue("username");
    let password = getValue("password");
    let role = getValue("role");

    if (
        validateInput(name, "Name") &&
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
        postData(urlPOST, data, AmbilResponse);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("userInsertForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();  // Mencegah form dari submit otomatis
        pushData(); // Menjalankan fungsi pushData
    });
});
