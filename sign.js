

function submitdata(){
   
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(email == '' || password == '') {
        window.alert('please fill the inputs')
    } 
     else {
       
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.location.href = './dashboard.html'
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(errorCode + errorMessage)
        });


     }
    
}