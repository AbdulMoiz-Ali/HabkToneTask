import {
    app,
    auth,
    collection,
    db,
    doc,
    getDoc,
    onAuthStateChanged,
    signOut,
    getDocs
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

const getAllProducts = async () => {
    // const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const products_list = document.getElementById("products_list");
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const { title, description, picture } = doc.data();
        console.log(picture)
        products_list.innerHTML += `

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src="${picture}" alt="images" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${description}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                     <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        `;
    });
};
getAllProducts();