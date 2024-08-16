import {
    auth,
    signInWithEmailAndPassword,
} from "./../../configration/app.js";

const signinform = document.getElementById("signin_form");

signinform.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = e.srcElement[0].value;
    const password = e.srcElement[1].value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location.href = "./../../Dashboard/index.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
