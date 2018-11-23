import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyCbIWhMZj3CzJ2J7f3qU5kwD57ubVbnwYw",
  authDomain: "reactjs-1d447.firebaseapp.com",
  databaseURL: "https://reactjs-1d447.firebaseio.com",
  projectId: "reactjs-1d447",
  storageBucket: "reactjs-1d447.appspot.com",
  messagingSenderId: "48949881617"
};

export  const firebaseConnect = firebase.initializeApp(config);

var data = firebase.database().ref('Sanpham/');
    data.once('value').then(function(snapshot){
      console.log(snapshot.val());
    })