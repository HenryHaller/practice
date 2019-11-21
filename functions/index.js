const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
// admin.initializeApp();
let db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.scheduledRSSUpdate = functions.pubsub.schedule('every minute').onRun((context) => {
	console.log('Running RSSUpdate Hello World');
	let docRef = db.collection('users').doc('alovelace');

	let setAda = docRef.set({
		first: 'Ada',
		last: 'Lovelace',
		born: 1815
	});
	return setAda;
});
