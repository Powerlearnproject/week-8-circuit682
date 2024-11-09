document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevent form from submitting normally
    const username = document.getElementById("email").value;  // Assuming email input is used for username
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })  // Match the fields expected by the backend
        });
        const data = await response.json();

        if (data.token) {  // On successful login, expect a token
            localStorage.setItem("token", data.token);  // Store JWT token in localStorage
            window.location.href = "dashboard.html";  // Redirect on successful login
        } else {
            alert("Login failed: " + (data.error || "Unknown error"));
        }
    } catch (error) {
        console.error("Error logging in:", error);
    }
});
