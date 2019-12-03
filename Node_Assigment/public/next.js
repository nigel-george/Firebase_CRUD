
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

    //for viewing the data on the page
    database.ref('regis').on('value', function(data){
      
let count=0;

            var content = '';
            data.forEach(function(snapdata){
               var user=snapdata.val().Name;
               var appkeys=Object.keys(data.val())[count];
                content +='<tr>';

content += '<td  value="'+appkeys+'" hidden >'+ appkeys +'</td>';
                content += '<td>' + snapdata.val().Name + '</td>';
                content += '<td>' + snapdata.val().Contact + '</td>';
                content += '<td>' + snapdata.val().Email + '</td>';
                content += '<td><button class="button edit-button " id="eid'+count+'" value="'+appkeys+'" onclick="edit('+count+');" >EDIT</button></td>'
                content += '<td ><button class="button del-button" id="del'+count+'" value="'+appkeys+'" onclick="delRecord('+count+');">DELETE</button></td>'
                
                content += '</tr>';
               count++; 
            });
            $('#mytab').append(content);
      
    });
//for deleting the particular record
    function delRecord(count){

var ids =document.getElementById("del"+count).value;

let userRef2 = database.ref('regis/' + ids);
    userRef2.remove();
    alert("Record deleted successfully!");
   window.location.reload();
    }
//for calling the edit div
    function edit(count){
    
     
      document.getElementById("main-table").style.visibility = "hidden";

      document.getElementById("edit-div").style.visibility = "visible";
      
      var idkey=document.getElementById("eid"+count).value;
    

      database.ref('regis/'+idkey).on('value', function(data2){

      document.getElementById("edit-label").value = idkey;
        document.getElementById("edit-name").value = data2.val().Name;
        document.getElementById("edit-email").value = data2.val().Email;
        document.getElementById("edit-mob").value = data2.val().Contact;
        document.getElementById("editme").value = idkey;
      });
    }
//for editing the record
   function editRecord(count){
  
      var name2 = document.getElementById("edit-name").value;
var email2 = document.getElementById("edit-email").value;
var contact2 = document.getElementById("edit-mob").value;
var f2={
    Name:name2,
    Email:email2,
    Contact: contact2
    
};
var eids =count;

let userRef2 = database.ref('regis/' + eids);
    userRef2.update(f2,function() {
   alert("Record Updated ");
   window.location.reload();
});
    

    }