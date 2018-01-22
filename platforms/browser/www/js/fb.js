
// var config = {
//   apiKey: "AIzaSyDP5AdkSt2j8LnfW-vbNzpEZ9ExEkJnMHw",
//   authDomain: "nlink-1177.firebaseapp.com",
//   databaseURL: "https://nlink-1177.firebaseio.com/",
//   storageBucket: "gs://nlink-1177.appspot.com"
// };
// firebase.initializeApp(config);

// // Get a reference to the database service
// var db = firebase.database();

// function uniqId() {
//   return Math.round(new Date().getTime() + (Math.random() * 100));
// }

// function sendMessageFb()
// {
//   var rdmId = uniqId();
//   firebase.database().ref('order/'+rdmId).set({
//     x: 0,
//     y: 0,
//     msg: "Test"
//   });
//   //$("#msg").val("");
// }

// $("#submitVal").on( "click", function() {
//   alert("kucing");
// });

// var orderRef = firebase.database().ref('order/');
// orderRef.on('child_added', function(data) {
//   showNotif(data.val().msg);
// });

// orderRef.on('child_changed', function(data) {
//   setCommentValues(postElement, data.key, data.val().text, data.val().author);
// });

// orderRef.on('child_removed', function(data) {
//   deleteComment(postElement, data.key);
// });

// var notifMsg = "";
// function showNotif(message)
// {
//   //app.showNotificationWithButton(message)
// }
