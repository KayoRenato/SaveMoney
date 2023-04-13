import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
  console.log(process.env.PUBLIC_FIREBASE_API_KEY)
  console.log(process.env.PUBLIC_FIREBASE_AUTH_DOMAIN)
  console.log(process.env.PUBLIC_FIREBASE_PROJECT_ID)

  firebase.initializeApp({
    apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export default firebase
