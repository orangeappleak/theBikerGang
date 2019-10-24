function login_check(){
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    FirebaseService.signIn(email, password).then(function(){
        on_login_success();
    }).catch(FirebaseService.__manageError);

}