var count2 = 0;

function register_window(){
    register_panel = document.getElementById("register_window");
    if(count2%2==0){
        register_panel.style.top = "20%";
    }
    else if(count2%2!=0){
        register_panel.style.top = "100%";
    }
    count2++;
}

function close_register_panel(){
    register_panel = document.getElementById("register_window");
    register_panel.style.top = "100%";
    count2--;
}