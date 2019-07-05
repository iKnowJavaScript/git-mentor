import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import styles from './Signin.module.css';

import * as firebase from 'firebase';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: 'AIzaSyCPluhTwNxaZyeGKQaXmS_LW7t2OU6DN1U',
  authDomain: 'gitmentor-d8678.firebaseapp.com'
});

const firebaseAuth: any = firebase.auth();

interface State {
  isSignedIn?: boolean;
}

const Signin = ({ props }: any) => {
  console.log('singdjjfd', props);

  const [state, setState] = useState<State>({ isSignedIn: false });
  const [userData, setUserData] = useState<any>({});

  const uiConfig: any = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  useEffect(() => {
    return firebaseAuth.onAuthStateChanged((user: any) => {
      setState({ isSignedIn: !!user });
      const { providerData } = user;

      setUserData(() => providerData[0]);
    });
  }, []);

  // const { from }: any = props.location.state || { from: { pathname: '/profile' } };

  return (
    <div className="App">
      {state.isSignedIn ? (
        <span>
          <div>Signed In!</div>
          <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
          <h1>Welcome {firebaseAuth.currentUser.displayName}</h1>
          <img alt="profile picture" src={firebaseAuth.currentUser.photoURL} />
          <Redirect to={{ pathname: '/profile', state: userData }} />
        </span>
      ) : (
        <>
          <div className={styles.signin}>
            <h2>Sign in</h2>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
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
};

export default Signin;
