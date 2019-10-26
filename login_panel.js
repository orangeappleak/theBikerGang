var count1 = 0;

function login_panel(){
    var panel = document.getElementById("login_window");
    var login_link = document.getElementById("login_link");
    if(count1%2 == 0){
        panel.style.transform = "translateY(40px)";
        panel.style.opacity = "0.98";
    }
    
    else if(count1%2!=0){
        panel.style.transform = "translateY(110vh)"
        panel.style.opacity = "0.1";
    }
    count1++;
}

function close_panel(){
    panel = document.getElementById("login_window");
    animate_menu2 = document.getElementById("animate_menu2");
    login_link = document.getElementById("login_link");
    panel.style.transform = "translateY(110vh)"
    panel.style.opacity = "0.1";
    count1--;
}

FirebaseService.on_current_userchange(function(user){
    if(user!=null){
        on_login_success();
    }
    else if(user == null){
        on_logout_success();
    }
});