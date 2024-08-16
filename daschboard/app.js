import {
    auth, signOut, doc, getDoc, db, updateDoc, getStorage, ref, uploadBytes, getDownloadURL, onAuthStateChanged, setDoc, storage
} from "./../configration/app.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid)
        getDoc(doc(db, "users", uid))
            .then((snapshot) => {
                const userData = snapshot.data();

                const name = document.getElementById("name-add");
                const email = document.getElementById("email-add");
                name.innerHTML = userData.firstname;
                email.innerHTML = userData.email;
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify({ uid, firstName: userData.firstname })
                );
                // getAllProducts();
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(userData)
        console.log(uid, "===> loged in");
    } else {
        window.location.href = "./index.html";
    }
});

const logout_btn = document.getElementById("btn-logout");

logout_btn.addEventListener("click", function () {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            localStorage.removeItem("currentUser");
            window.location.href = "./../index.html"
        })
        .catch((error) => {
            // An error happened.
        });
});





const createmodel = document.getElementById("create-model");
createmodel.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e);
    const title = e.srcElement[0].value;
    const description = e.srcElement[1].value;
    const image = document.getElementById("dropzone-file");
    const file = image.files[0];
    const userdate = {
        title: title,
        description: description,
        image: file
    };
    console.log(userdate);

    uploadBytes(storageRef, file)
        .then((snapshot) => {
            getDownloadURL(storageRef).then((url) => {
                addDoc(productsCollection, {
                    title: title,
                    description: description,
                    image: url,
                });
                console.log(url, "-->");
            });
        })
        .catch((err) => {
            console.log(err, "======");
        });
})
