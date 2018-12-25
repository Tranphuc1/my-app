import { firebaseConnect } from '../FirebaseConnect';
// User API
export const user = uid => firebaseConnect.database().ref(`users/${uid}`);
export const users = () => firebaseConnect.database().ref('users');