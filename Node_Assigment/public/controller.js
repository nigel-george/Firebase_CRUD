//This function is triggered when data is submitted
function trig(){
 //Fetching the values from form to local variable

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var contact = document.getElementById("mob").value;
var f={
    Name:name,
    Email:email,
    Contact: contact
};
//initializing the firebase  
if (!firebase.apps.length) {
    firebase.initializeApp({  
        apiKey: "AIzaSyCPMS_9aNWJeHgbijFdNeXUESFRsqbMb6g",
        authDomain: "tag8-assignment.firebaseapp.com",
        databaseURL: "https://tag8-assignment.firebaseio.com",
        projectId: "tag8-assignment",
        storageBucket: "tag8-assignment.appspot.com",
        messagingSenderId: "1069437860742",
        appId: "1:1069437860742:web:79f1bb3ce47a53e6a58a07"

    });
 }
 
     
var database = firebase.database();
 //collection regis of firebase  
 var ref1 = database.ref('regis');

 //pushing the form value to regis 
       
ref1.push(f, function() {
   alert("Thankyou for registering! Data Recorded!");
   window.location.reload();
}).key;
               
    
      }
   