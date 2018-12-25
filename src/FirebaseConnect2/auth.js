import { auth,firebaseConnect } from '../FirebaseConnect';

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
	auth.signInWithEmailAndPassword(email, password);
// Sign out
export const doSignOut = () =>
	auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
	auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
	auth.currentUser.updatePassword(password);

export const user = uid => firebaseConnect.database().ref(`/users/${uid}`);

export const users = () => firebaseConnect.database().ref('/users');