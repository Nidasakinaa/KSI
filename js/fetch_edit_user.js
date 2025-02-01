import { get } from "https://bukulapak.github.io/api/process.js";
import { isiData } from "./controller/edit_user.js";
import { urlFetch } from "./config/url_get_detail_user.js";

// Ambil data user dan isi form
get(urlFetch, isiData);

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userEditForm");

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Mencegah reload halaman

        // Ambil data dari form
        const formData = {
            username: document.getElementById("username").value,
            role: document.getElementById("role").value
        };

        try {
            // Kirim data ke server dengan method PUT
            const response = await fetch(`https://ws-kaloriku-4cf736febaf0.herokuapp.com/user/update/${userId}`, {
                method: "PUT", // Pastikan method sesuai dengan API
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Update Success:", result);

            // Tampilkan alert sukses
            alert("Data user berhasil diperbarui!");

            // Redirect ke dashboard setelah sukses
            window.location.href = "user.html";

        } catch (error) {
            console.error("Error updating user:", error);

            // Tampilkan alert error
            alert("Terjadi kesalahan saat memperbarui data. Silakan coba lagi.");
        }
    });
});
