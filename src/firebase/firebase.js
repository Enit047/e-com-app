import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDS7WSk9mR7qZMVhHbwKqC8TETUaD_quDM",
    authDomain: "e-com-platform.firebaseapp.com",
    databaseURL: "https://e-com-platform.firebaseio.com",
    projectId: "e-com-platform",
    storageBucket: "e-com-platform.appspot.com",
    messagingSenderId: "444653475301",
    appId: "1:444653475301:web:3d146f87ae04ce4cda8b0c"
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


// *** Related to sign in with GoogleAccount ***

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({'prompt': 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

// *** // ***


export const createUserProfileDoc = async (userAuth, additionalData) => {
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if(!snapshot.exists){
        const {displayName, email} = userAuth
        const date = new Date()

        try{
            await userRef.set({
                email,
                displayName,
                date,
                ...additionalData
            })
        } catch (e) {
            console.error('Error with creating account: ', e)
        }
    }

    return userRef
}

export default firebase