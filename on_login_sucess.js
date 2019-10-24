function on_login_success(){
    var cart = document.getElementById("cart");
    var register = document.getElementById("register_link");
    var login = document.querySelector("#login_link a");
    var username = FirebaseService.getCurrentUser().displayName;
    var username_heading = document.getElementById("username_heading");
    username_heading.innerHTML = username;
    login.innerHTML = "Log Out";
    login.setAttribute("onclick","FirebaseService.signOut()");
    register.style.display = "none";
    cart.style.display = "block";
}

function on_logout_success(){
    var cart = document.getElementById("cart");
    var register = document.getElementById("register_link");
    var login = document.querySelector("#login_link a");
    document.getElementById("username_heading").innerHTML = "";
    cart.style.display = "none";
    login.innerHTML = "Log In";
    login.setAttribute("onclick","login_panel()");
    register.style.display = "block";
}