import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyC5s_KSJy8QAZggG5dBLQBolTADRaigEXc",
    authDomain: "ecommernce-site.firebaseapp.com",
    projectId: "ecommernce-site",
    storageBucket: "ecommernce-site.appspot.com",
    messagingSenderId: "291128214456",
    appId: "1:291128214456:web:32d3a25667b20109b8c54d"
})

export const auth = app.auth()
export default app