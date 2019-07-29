import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { UserLogStatus, UserObject } from '../../Context/Context';
import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import styles from './Signin.module.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN
});

const firebaseAuth: any = firebase.auth();

const Signin = () => {
  const { isLoggedin, setLoggedIn } = useContext(UserLogStatus) as any;
  const { userData, setUserData } = useContext(UserObject) as any;

  const uiConfig: any = {
    signInFlow: 'popup',
    signInOptions: [
      {
        provider: firebase.auth.GithubAuthProvider.PROVIDER_ID,
        scopes: ['public_repo', 'read:org', 'read:user']
      }
    ],
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
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebaseAuth}
              className={`${styles.button} ${styles.accept} App`}
            />
            <h3>or Log in with GitHub Email</h3>
            <input
              className={`${styles.button} ${styles.input}`}
              type="text"
              placeholder="Your GitHub Email"
            />

            <button className={`${styles.button} ${styles.create}`}> Log in</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Signin;
