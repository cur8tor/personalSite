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

var quantity = document.getElementById("quantity");
var price = document.getElementById('quantity');
var priceTotal = document.getElementById('priceTotal');
var value = document.getElementById('value');
var tax = document.getElementById('tax');
var discount = document.getElementById('discount');
var delivery = document.getElementById('delivery');
var yOrder = document.getElementById('yOrder');


quantity.oninput = function() {
  subtotal.innerHTML = ((price.value*5)).toFixed(2);
  value.innerHTML = ((price.value*13)).toFixed(2);
  tax.innerHTML = ((((price.value*5)+5)*0.0712).toFixed(2));
  priceTotal.innerHTML = ((+subtotal.innerHTML)+(+tax.innerHTML)+5).toFixed(2);
  discount.innerHTML = ((+value.innerHTML)-(+subtotal.innerHTML)).toFixed(2);
  delivery.innerHTML = (5).toFixed(2);
  yOrder.innerHTML = price.value;
}

function onloader(){
  console.log("Name: "+"\nEmail: "+"\nMessage: ");
  subtotal.innerHTML = ((price.value*5)).toFixed(2);
  value.innerHTML = ((price.value*13)).toFixed(2);
  tax.innerHTML = ((((price.value*5)+5)*0.0712).toFixed(2));
  priceTotal.innerHTML = ((+subtotal.innerHTML)+(+tax.innerHTML)+5).toFixed(2);
  discount.innerHTML = ((+value.innerHTML)-(+subtotal.innerHTML)).toFixed(2);
  delivery.innerHTML = (5.15).toFixed(2);
  yOrder.innerHTML = price.value;
}

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

  sendEmail(name, email, message, phone, quantity, address);
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

function sendEmail(name, email, message, phone, quantity, address){
  Email.send({
    Host: "smtp.gmail.com",
    Username: "tmartzdc@gmail.com",
    Password: "nbqofwqbpxphjmxl",
    To: "tmartzdc@gmail.com",
    From: "tmartzdc@gmail.com",
    Subject: name+" sent you a message",
    Body: "Name: "+name+"\nEmail: "+email+"\nMessage: "+message,

    Body: name+" ordered "+quantity+" bars.\n"+"Email: "+email+"\nPhone: "+phone+"\nMessage: "+message+"\nAddress: "+address,

  }).then((message) => console.log(name+" ordered "+quantity+" bars.\n"+"Email: "+email+"\nPhone: "+phone+"\nMessage: "+message+"\nAddress: "+address))
}