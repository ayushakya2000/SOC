function fu(){
    alert("qwerty");
}
function func(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}
function fnnn(){
    const email=document.getElementById('email').value;
    const pass=document.getElementById('pass').value;
    // auth.createUserWithEmailAndPassword(email, pass).then(cred => {
    //     console.log(cred);
    // })
    
    console.log(email,pass);
}
function f(){
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
    console.log("qwerty")
    }).catch(function(error) {
    // An error happened.
    });
}
function fnn(){
    auth.signOut().then(() =>{
        console.log("logged out");
    });
}
function fn(){
    const email=document.getElementById('email1').value;
    const pass=document.getElementById('pass1').value;
    auth.signInWithEmailAndPassword(email, pass).then(cred =>{
        console.log(cred.user);
    })
}
if(user){
    console.log("qwertyuio")
}