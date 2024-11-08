// auth.js
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevent form from submitting normally
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();

        if (data.success) {
            window.location.href = "dashboard.html";  // Redirect on successful login
        } else {
            alert("Login failed: " + data.message);
        }
    } catch (error) {
        console.error("Error logging in:", error);
    }
});
