firebase.initializeApp({
    apiKey: "AIzaSyAk39q3sn8XVgdm_lse_8F9LItObj5Xd-Y",
    authDomain: "twix-servers.firebaseapp.com",
    databaseURL: "https://twix-servers-default-rtdb.firebaseio.com",
    projectId: "twix-servers",
    storageBucket: "twix-servers.appspot.com",
    messagingSenderId: "484781384781",
    appId: "1:484781384781:web:1c3a493e7f601f143da804",
    measurementId: "G-6SQPW8VHYN"
});

const db = firebase.firestore();


const uidInput = document.getElementById("uidInput");
const getInfoBtn = document.getElementById("getInfoBtn");
const userInfoContainer = document.getElementById("userInfoContainer");
const userInfoList = document.getElementById("userInfoList");

getInfoBtn.addEventListener('click', ()=>{
    const uid = uidInput.value;
    db.collection("userInfo").doc(uid).get().then((doc) => {
        if (doc.exists) {
            userInfoList.innerHTML = "Loading...";
            const userData = doc.data();
            userInfoList.innerHTML = "";
            userInfoList.innerHTML += `<li><strong>Name:</strong> ${userData.Name}</li>`;
            userInfoList.innerHTML += `<li><strong>Date of Birth:</strong> ${userData.DateOfBirth}</li>`;
            userInfoList.innerHTML += `<li><strong>Gender:</strong> ${userData.Gender}</li>`;
            userInfoList.innerHTML += `<li><strong>Phone:</strong> ${userData.Phone}</li>`;
            userInfoList.innerHTML += `<li><strong>Address:</strong> ${userData.Address}</li>`;
            userInfoList.innerHTML += `<li><strong>UID:</strong> ${userData.UID}</li>`;
            userInfoContainer.style.display = "block";
        } else {
            alert("User not found!");
            userInfoList.innerHTML = "";
        }
    }).catch((error) => {
        console.error("Error getting user info:", error);
    });
});