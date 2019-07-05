import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Mentors from '../pages/Mentors';
import Profile from '../pages/Profile';
import { UserLogStatus, UserObject } from '../Context/Context';

const Navigator = () => {
  const [isLoggedin, setLoggedIn] = useState({ isSignedIn: false });
  const [userData, setUserData] = useState<any>({});

  return (
    <UserLogStatus.Provider value={{ isLoggedin, setLoggedIn }}>
      <UserObject.Provider value={{ userData, setUserData }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/mentors" component={Mentors} />
            <Route path="/profile" component={Profile} />
            {/* <Route path="/profile" component={Profile} /> */}
            <Route
              render={() => (
                <h1
                  style={{
                    fontSize: '5rem',
                    textAlign: 'center'
                  }}
                >
                  Page Not Found
                </h1>
              )}
            />
          </Switch>
        </Router>
      </UserObject.Provider>
    </UserLogStatus.Provider>
  );
};

/* <Route path="/trip/:tripId" component={Trips} /> */

export default Navigator;
