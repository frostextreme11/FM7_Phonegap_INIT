// Dom7
var $$ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  panel:{
    swipe: 'left',
  },
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});


var config = {
  apiKey: "AIzaSyDP5AdkSt2j8LnfW-vbNzpEZ9ExEkJnMHw",
  authDomain: "nlink-1177.firebaseapp.com",
  databaseURL: "https://nlink-1177.firebaseio.com/",
  storageBucket: "gs://nlink-1177.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var db = firebase.database();

function uniqId() {
  return Math.round(new Date().getTime() + (Math.random() * 100));
}

function sendMessageFb()
{
  var rdmId = uniqId();
  firebase.database().ref('order/'+rdmId).set({
    x: 0,
    y: 0,
    msg: "Test"
  });
  //$("#msg").val("");
}

$("#submitVal").on( "click", function() {
  alert("kucing");
});

var orderRef = firebase.database().ref('order/');
orderRef.on('child_added', function(data) {
  showAlert(data.val().msg);
});

orderRef.on('child_changed', function(data) {
  setCommentValues(postElement, data.key, data.val().text, data.val().author);
});

orderRef.on('child_removed', function(data) {
  deleteComment(postElement, data.key);
});

function showAlert(message)
{
  app.notification.create({
    icon: '<i class="icon icon-f7"></i>',
    title: 'Notification',
    titleRightText: 'now',
    subtitle: message,
    text: 'Click me to close',
    closeOnClick: true,
    closeTimeout: 2000,
  }).open();
}
