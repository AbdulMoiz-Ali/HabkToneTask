import {
    app,
    auth,
    collection,
    db,
    doc,
    getDoc,
    onAuthStateChanged,
    signOut,
} from "./configration/app.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        getDoc(doc(db, "users", uid))
            .then((snapshot) => {
                const userData = snapshot.data();
                console.log(userData)
                const name = document.getElementById("name-add");
                const email = document.getElementById("email-add");
                const detail = document.getElementById("detail");
                const login = document.getElementById("login");
                login.style.display = "none";
                detail.style.display = "flex";
                name.innerHTML = userData.firstname;
                email.innerHTML = userData.email;


                // const name1 = document.getElementById("name-add1");
                // const email1 = document.getElementById("email-add1");
                // const detail1 = document.getElementById("detail1");
                // const login1 = document.getElementById("login1");
                // login1.style.display = "none";
                // detail1.style.display = "flex";
                // name1.innerHTML = userData.firstname;
                // email1.innerHTML = userData.email;
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify({ uid, firstName: userData.firstname })
                );
                // getAllProducts();
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(uid, "===> loged in");
    } 
});

const logout_btn = document.getElementById("btn-logout");

logout_btn.addEventListener("click", function () {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            localStorage.removeItem("currentUser");
        })
        .catch((error) => {
            // An error happened.
        });
});
function btnsideclose() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none";
}