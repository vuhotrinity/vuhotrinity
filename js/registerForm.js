

let userName = document.getElementById('name')
let password = document.getElementById('password')
let passwordConfirmation = document.getElementById('password_Confirmation')
let submitBtn = document.getElementById("submitBtn")
// document.getElementById('name').addEventListener("keyup",function myFunction(){
// console.log(userName.value);
// ;})
passwordConfirmation.onkeyup = (e) => {
    if(e.code === "Enter"){
        submitBtn.click()
    }
}
submitBtn.onclick = async (event) => {
    event.preventDefault();
    
    if(userName.value != '' && password.value != '' & passwordConfirmation.value != '' && password.value == passwordConfirmation.value){
        let result = await firebase.firestore().collection("Users").where("username","==",userName.value).get()
        console.log(result);
        if(result.empty){
             await firebase.firestore().collection("Users").add({username: userName.value,password: CryptoJS.MD5(password.value).toString()})
             alertify
        .alert("Now Please Sign In With Your Registered Account")
           setTimeout(function(){window.location.href="loginForm.html"},2500)  
             // console.log(userName.value);
        }
        else {
            alertify
        .alert("This username has already been used")
        }
    }
    

    else {
        alertify
        .alert("Please Try Again");
    }
}