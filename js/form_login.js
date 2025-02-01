import Swal from "sweetalert2";

document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai input username dan password
    const username = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validasi input
    if (!username || !password) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Harap isi username dan password!",
            allowOutsideClick: false
        });
        return;
    }

    // Siapkan payload sesuai dengan body request pada curl
    const payload = {
        username: username,
        password: password,
        role: "admin" // Sesuaikan dengan role dari backend Anda
    };

    try {
        // Kirim request ke API menggunakan fetch
        const response = await fetch("https://ws-kaloriku-4cf736febaf0.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        // Periksa respons dari server
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login gagal. Silakan coba lagi.");
        }

        const data = await response.json(); // Ambil respons JSON

        // Login berhasil
        Swal.fire({
            icon: "success",
            title: "Login Berhasil",
            text: `Selamat datang ${data.username || "User"}!`,
            allowOutsideClick: false,
            confirmButtonText: "OK"
        }).then(() => {
            // Redirect ke halaman sesuai role atau dashboard
            if (data.role === "admin") {
                window.location.href = "pages/admin/dashboard.html";
            } else {
                window.location.href = "pages/customer/dashboard.html";
            }
        });
    } catch (error) {
        // Tangani kesalahan login
        Swal.fire({
            icon: "error",
            title: "Login Gagal",
            text: error.message,
            allowOutsideClick: false,
            confirmButtonText: "OK"
        });
    }
});
