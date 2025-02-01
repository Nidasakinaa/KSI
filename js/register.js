document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("register-form");
    
    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        const fullname = document.getElementById("username").value;
        const phone = document.getElementById("phone").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const role = document.getElementById("role").value;
        
        const requestBody = {
            fullname: fullname,
            phone: phone,
            username: username,
            password: password,
            role: role // Bisa diganti sesuai kebutuhan
        };

        try {
            const response = await fetch("https://ws-kaloriku-4cf736febaf0.herokuapp.com/registeruser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestBody)
            });

            const result = await response.json();
            
            if (response.ok) {
                alert("Registration successful! Redirecting to login page...");
                window.location.href = "../form_login.html";
            } else {
                alert("Registration failed: " + result.message);
            }
        } catch (error) {
            alert("An error occurred: " + error.message);
        }
    });
});
