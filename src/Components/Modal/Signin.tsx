import React, { Component } from 'react';
import styles from './Signin.module.css';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: 'AIzaSyCPluhTwNxaZyeGKQaXmS_LW7t2OU6DN1U',
  authDomain: 'gitmentor-d8678.firebaseapp.com'
});

const firebaseAuth: any = firebase.auth();

class Signin extends Component {
  state = { isSignedIn: false };
  uiConfig: any = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebaseAuth.onAuthStateChanged((user: any) => {
      this.setState({ isSignedIn: !!user });
      console.log('user', user);
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebaseAuth.currentUser.displayName}</h1>
            <img alt="profile picture" src={firebaseAuth.currentUser.photoURL} />
          </span>
        ) : (
          <>
            <div className={styles.signin}>
              <h2>Sign in</h2>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebaseAuth}
                className={`${styles.button} ${styles.accept} App`}
              />
              <h3>or Sign in with GitHub Username</h3>
              <input
                className={`${styles.button} ${styles.input}`}
                type="text"
                placeholder="Your GitHub Username"
              />

              <button className={`${styles.button} ${styles.create}`}> Log in</button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Signin;
