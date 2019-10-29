function register(){
    var email = document.querySelector("#register_email").value;
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#register_password").value;
    var confirm_password = document.querySelector("#confirm_password").value;
    
    if(password == confirm_password){
        FirebaseService.createUser(email, password)
            .then(function() {console.log('user registered');
            FirebaseService.updateUserName(username)})
            .catch(FirebaseService.__manageError);
        register_info = document.getElementsByName("register_info")[0];
        register_info.reset();
        close_register_panel();
    }
    
    else{
        alert("please check your passwords");
    }
}