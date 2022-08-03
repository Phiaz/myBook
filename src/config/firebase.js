const {initializeApp} = require('firebase/app')
const {getStorage} = require('firebase/storage')

const config = require('./key')
const firebaseConfig = {
    apiKey: config.firebase_ApiKey,
    authDomain: config.firebase_authDomain,
    projectId: config.firebase_projectId,
    storageBucket: config.firebase_storageBucket,
    messagingSenderId: config.firebase_messagingSenderId,
    appId: config.firebase_appId,
    measurementId: config.firebase_measurementId
}
const app = initializeApp(firebaseConfig)
const bucket = getStorage(app, config.firebase_url)
module.exports = {
    bucket
}

