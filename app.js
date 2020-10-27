<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD-beGzm4yqNokhOF5kuZWZhKy7om_aXNY",
    authDomain: "urielswebapp.firebaseapp.com",
    databaseURL: "https://urielswebapp.firebaseio.com",
    projectId: "urielswebapp",
    storageBucket: "urielswebapp.appspot.com",
    messagingSenderId: "167911021716",
    appId: "1:167911021716:web:ea6c0502d48c9ca9312881"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

(function() {
	const txtEmail= document.getElementById('txtEmail');
	const txtPassword= document.getElementById('txtPassword');
	const btnLogin= document.getElementById('btnLogin');
	const txtEmail= document.getElementById('btnSignUp');

	btnLogin.addEventListener('click',e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth= firebase.auth();
		
		const promise = auth.signInWithEmailAndPassword(email, password);
		promise.catch(e => console.log(e.message));
		
	btnSignup.addEventListener('click',e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth= firebase.auth();
		
		const promise =auth.createUserWithEmailAndPassword(email, password);
		promise.catch(e => console.log(e.message));
	};
	