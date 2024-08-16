import {
    createUserWithEmailAndPassword,
    auth,
    addDoc,
    collection,
    db,
    doc,
    setDoc
} from "./../../configration/app.js";

const singupform = document.getElementById("singup_form");


singupform.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = e.srcElement[0].value;
    const password = e.srcElement[1].value;
    const firstname = e.srcElement[2].value;
    const lastname = e.srcElement[3].value;
    const phoneno = e.srcElement[4].value;
    const userdate = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phone: phoneno
    };
    console.log(userdate);

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            // addDoc(doc(collection(db, "users")), userdate);
            // window.location.href = "./.././Cards _ TailAdmin - Tailwind CSS Admin Dashboard Template.html";

            setDoc(doc(db, "users", user.uid), userdate).then((userRef) => {
                window.location.href = "./../../index.html";
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(errorMessage);
        });
});
