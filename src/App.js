import React from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
import LoginPage from './Layout/LoginPage'
import LoggedIn from './Layout/LoggedIn';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};



class App extends React.Component {
  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">

          {
            user
              ? <LoggedIn signOut={signOut} user={user} />
              : <LoginPage signIn={signInWithGoogle} />
          }

        </header>
      </div>
    );
  }
}















export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);