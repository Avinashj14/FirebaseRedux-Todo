// authActions.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, firestore } from '../firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'; 

export const signUp = (email, password, username) => async (dispatch) => {
  try {
    console.log('signUp action called'); // Add this line to log that the action is called
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    
    

    const uid = userCredential.user.uid;
    
    console.log(uid)
    const docRef = await addDoc(collection(firestore, 'users'), {
        username,
        email,
      });
  
      console.log('Document written with ID:', docRef.id);
  
  
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };
  


  export const signIn = (email, password) => async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword (auth, email, password);
      const uid = userCredential.user.uid;
      console.log("sign in success" , uid)

    const userQuery = collection(firestore, 'users');
    const q= query(userQuery, where('email', '==', email));
    const querySnapshot = await getDocs (q);


    if (querySnapshot.docs.length > 0) {
      const userDoc = querySnapshot.docs[0];
      const documentId = userDoc.id;
      console.log('Document ID that we have captured:-', documentId);
      const userData = userDoc.data();
      const username = userData.username;
      console.log('Username:', username);
      dispatch(setDocId(documentId));
  
      dispatch(setUsername(username));
    }
      dispatch(setUid(uid));
      return true;

    } catch (error) {
      console.error('Error signing in:', error.message);
      return false
    }
  };


  export const signOutUser = () => async (dispatch) => {
    try {
      await signOut(auth);
      dispatch(setUid(null));
      dispatch(setDocId(null)); 
    
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

export const setUid = (uid) => ({
  type: 'SET_UID',
  payload: uid,
});

export const setDocId = (docId) => ({
  type: 'SET_DOC_ID',
  payload: docId,
});
export const setUsername = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
});