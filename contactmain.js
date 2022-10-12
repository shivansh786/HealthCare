var firebaseConfig = {
    apiKey: "AIzaSyC8LmW7whQc2AhY37VtoYt9Er5VpDjALLs",
    authDomain: "contactus-fe046.firebaseapp.com",
    projectId: "contactus-fe046",
    storageBucket: "contactus-fe046.appspot.com",
    messagingSenderId: "609105220014",
    appId: "1:609105220014:web:d7ccc27263024d66b5b83f",
    measurementId: "G-Q27F7ZQXKH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//variable to access database collection
const db = firestore.collection("formdata")


//get submit form 
let submitButton = document.getElementById('submit')


// Create event listener to allow form submission
submitButton.addEventListener("click", (e) =>{
    //prevent default form submission behavior
    e.preventDefault()

    // get form values 
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let symptom = document.getElementById('symptom').value


    // save form data to firebase
    db.doc().set({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        symptom: symptom
    }).then( () => {
        console.log("Data Saved ")
    }).catch((error) => {
        console.log(error)
    })

    //alert
    alert("Your query has been saved ")
})



/*
//Reference subject collection
var messageRef = firebase.database().ref('message');

document.getElementById('contact-us').addEventListener('Get Consultation', submitForm);
// Submit form
function submitForm(e) {
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var subject = getInputVal('subject');
    var symptom = getInputVal('symptom');
    // Save Message
    saveMessage(name, email, phone, subject, symptom);
}
// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, subject, symptom) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        symptom: symptom
    });
}
*/