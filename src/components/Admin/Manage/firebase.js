import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyCbIWhMZj3CzJ2J7f3qU5kwD57ubVbnwYw",
  authDomain: "reactjs-1d447.firebaseapp.com",
  databaseURL: "https://reactjs-1d447.firebaseio.com",
  projectId: "reactjs-1d447",
  storageBucket: "reactjs-1d447.appspot.com",
  messagingSenderId: "48949881617"
};
firebase.initializeApp(config);
export const nodeData = firebase.database().ref("/Sanpham");
// export default nodeData 