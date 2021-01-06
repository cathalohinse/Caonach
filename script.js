// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG7qh3zXQew5J1_2Ts0W8JkH9VHLkZdJE",
  authDomain: "norriehenchymonitor-b5883.firebaseapp.com",
  databaseURL: "https://norriehenchymonitor-b5883-default-rtdb.firebaseio.com",
  projectId: "norriehenchymonitor-b5883",
  storageBucket: "norriehenchymonitor-b5883.appspot.com",
  messagingSenderId: "500616408172",
  appId: "1:500616408172:web:4beb03736d9a1171227c49",
  measurementId: "ertytreytrN"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the file storage service
const storage = firebase.storage();
// Get a reference to the database service
const database = firebase.database();

// Create camera database reference
const camRef = database.ref("file");

// Sync on any updates to the DB. THIS CODE RUNS EVERY TIME AN UPDATE OCCURS ON THE DB.
camRef.limitToLast(1).on("value", function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    const image = childSnapshot.val()["image"];
    const time = childSnapshot.val()["timestamp"];
    const storageRef = storage.ref(image);
    
    const pj = fetch("https://norriehenchymonitor-b5883-default-rtdb.firebaseio.com/file/-MQDHfN4E9b96c7auDWG").then(res=&gtres.json()).then(data=&gtconsole.log(data));
    const jp = "timestamp";

    
    storageRef
      .getDownloadURL()
      .then(function(url) {
        console.log(url);
        document.getElementById("photo").src = url;
        document.getElementById("time").innerText = time;
      })
      .catch(function(error) {
        console.log(error);
      });
  });
});