function on_login_success(){
    var cart = document.getElementById("cart");
    var register = document.getElementById("register_link");
    var login = document.querySelector("#login_link a");
    var username = FirebaseService.getCurrentUser().displayName;
    var username_heading = document.getElementById("username_heading");
    var panel = document.getElementById("login_window");
    username_heading.innerHTML = "logged in as:"+username;
    login.innerHTML = "Log Out";
    login.style.transform = "translateY(-400px)";
    login.setAttribute("onclick","FirebaseService.signOut()");
    register.style.display = "none";
    cart.style.display = "block";
    panel.style.transform = "translateY(110vh)";
}

function on_logout_success(){
    var cart = document.getElementById("cart");
    var register = document.getElementById("register_link");
    var login = document.querySelector("#login_link a");
    document.getElementById("username_heading").innerHTML = "";
    setTimeout(function(){
    cart.style.display = "none";
    login.innerHTML = "Log In";
    login.setAttribute("onclick","login_panel()");
    register.style.display = "block";
    },1000);
}