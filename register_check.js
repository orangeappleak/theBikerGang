function register(){
    var email = document.querySelector("#email").value;
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    var confirm_password = document.querySelector("#confirm_password").value;
    
    if(password == confirm_password){
        FirebaseService.createUser(email, password)
            .then(function() {console.log('user registered');
            FirebaseService.updateUserName(username).then(function(){
                console.log(FirebaseService.getCurrentUser().displayName);
            })})
            .catch(FirebaseService.__manageError);
    }
    
    else{
        alert("please check your passwords");
    }
}