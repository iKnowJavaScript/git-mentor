import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { UserLogStatus, UserObject } from '../../Context/Context';
import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import styles from './Signin.module.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyCPluhTwNxaZyeGKQaXmS_LW7t2OU6DN1U',
  authDomain: 'gitmentor-d8678.firebaseapp.com'
});

const firebaseAuth: any = firebase.auth();

const Signin = () => {
  const { isLoggedin, setLoggedIn } = useContext(UserLogStatus) as any;
  const { userData, setUserData } = useContext(UserObject) as any;

  const uiConfig: any = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  useEffect(() => {
    return firebaseAuth.onAuthStateChanged((user: any) => {
      setLoggedIn(!!user);
      console.log('llogedein in sign in', isLoggedin, { user });
      if (user) {
        const { providerData } = user;
        return setUserData(providerData[0]);
      }
    });
  }, [isLoggedin, setLoggedIn, setUserData]);

  return (
    <div className="App">
      {isLoggedin ? (
        <Redirect to="/mentors" />
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
