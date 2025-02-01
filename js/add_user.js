document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userInsertForm");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        const fullname = document.getElementById("fullname").value;
        const phonenumber = document.getElementById("phone").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;

        const requestBody = {
            fullname: fullname,
            phone: phonenumber, // Sesuai dengan request body curl
            username: username,
            password: password,
            role: role,
        };

        try {
            const response = await fetch("https://ws-kaloriku-4cf736febaf0.herokuapp.com/registeruser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Registration successful! Redirecting to login page...");
                window.location.href = "../admin/user.html";
            } else {
                alert("Registration failed: " + result.message);
            }
        } catch (error) {
            alert("An error occurred: " + error.message);
        }
    });
});