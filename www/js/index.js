/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
       // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCA_ueGafVsmSpty6mo9KN5ubpwJEEGUcA",
    authDomain: "esencialdev.firebaseapp.com",
    databaseURL: "https://esencialdev.firebaseio.com",
    projectId: "esencialdev",
    storageBucket: "esencialdev.appspot.com",
    messagingSenderId: "284982651187"
  };
  firebase.initializeApp(config);
  var db = firebase.database();
console.log("aca");
var connectedRef = db.ref(".info/connected");
var conexion;
connectedRef.on("value", function(snap) {
  if (snap.val() === true) {
    console.log("conexion online");
    conexion = true;

} else {
    console.log("conexion offline");
    conexion = false;
}
});

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

    }   


};//app

app.buscador = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithRedirect(provider).then(function() {
  return firebase.auth().getRedirectResult();
}).then(function(result) {
  // This gives you a Google Access Token.
  // You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});
}


firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token.
    // You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("suerefr");
    console.log(user);
  }
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});


var user = firebase.auth().currentUser;
console.log(user);
if (user) {
  console.log(user);
} else {
    
              
}



    document.getElementById('search').addEventListener('click', function() {
        app.buscador();
    });




