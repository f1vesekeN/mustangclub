document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "admin" && password === "123456") {
            localStorage.setItem("savedUsername", username);
            alert("Login successful!");
            window.location.href = "main.html"; // Chuyển hướng đến trang chính
        } else {
            alert("Login failed. Incorrect username or password.");
        }
    });
});
