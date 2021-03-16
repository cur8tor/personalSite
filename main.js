// Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: "AIzaSyCn_8yv0oNtCmP43j5g7TlGcLDgmLNoe4g",
      authDomain: "contactform-1d570.firebaseapp.com",
      projectId: "contactform-1d570",
      storageBucket: "contactform-1d570.appspot.com",
      messagingSenderId: "586611958378",
      appId: "1:586611958378:web:0c760da47a3a8131362013",
      measurementId: "G-QGZGPB74LW",
      databaseURL: "https://contactform-1d570-default-rtdb.firebaseio.com/"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  console.log("butttton");
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var address = getInputVal('address');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var quantity = getInputVal('quantity');

  // Save message
  saveMessage(name, address, email, phone, message, quantity);

  // Show alert
  document.querySelector('.alert').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';

  // // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

function payment8(){
  console.log("fghfljf");
  document.querySelector('.contactForm').style.display = 'none';
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, address, email, phone, message, quantity){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    address:address,
    email:email,
    phone:phone,
    message:message,
    quantity:quantity
  });
  console.log("sent!");
}