import { getDataFromDoc, saveCurrentUser } from "../utlis.js";



let $userName = document.getElementById("name")
let $password = document.getElementById("password")
let $submit = document.getElementById("submitBtn");
$password.onkeyup = (e) => {
    if(e.code === "Enter"){
        $submit.click()
    }
}
$submit.onclick =async (event) =>{
    event.preventDefault();
    let result = await firebase.firestore().collection("Users").where("username","==",$userName.value).where("password","==",CryptoJS.MD5($password.value).toString()).get()
    console.log(result);
    if(result.docs.length != ""){
        setTimeout(function(){window.location.href="../Flappy Bird/index.html"},1000)  
        saveCurrentUser(getDataFromDoc(result.docs[0]))
    
    }
    else {
        alertify
             .alert("WRONG USERNAME OF PASSWORD");
    }
}
