import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyAx8MDmxodzwNCY56idXi666MdMeurIocQ',
    authDomain: 'work10-dac23.firebaseapp.com',
    databaseURL: 'https://work10-dac23.firebaseio.com',
    projectId: 'work10-dac23',
    storageBucket: 'work10-dac23.appspot.com',
    messagingSenderId: '284650804432',
    appId: '1:284650804432:web:13487fc1e7bcd680bcbad5',
    measurementId: 'G-VF3F0V0T8Z',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
