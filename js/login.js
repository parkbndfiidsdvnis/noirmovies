document.getElementById("login_button").addEventListener("click", function(event) {
    event.preventDefault();
    const email = document.getElementById("username_input").value;
    const password = document.getElementById("password_input").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "./index.html";
    } else {
        alert("Invalid email or password");
    }
});
