document.getElementById("signup_form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("signup_username").value;
    const email = document.getElementById("signup_email").value;
    const password = document.getElementById("signup_password").value;

    const newUser = {
        username: username,
        email: email,
        password: password
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign up successful! You can now log in.");
    window.location.href = "./login.html";
});
