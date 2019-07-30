import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Mentors from '../pages/Mentors';
import Profile from '../pages/Profile';
import { UserLogStatus, UserObject } from '../Context/Context';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Error from '../Components/Error/Error';

const Navigator = () => {
  const [isLoggedin, setLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>({});

  return (
    <UserLogStatus.Provider value={{ isLoggedin, setLoggedIn }}>
      <UserObject.Provider value={{ userData, setUserData }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/mentors" component={Mentors} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route render={() => <Error />} />
          </Switch>
        </Router>
      </UserObject.Provider>
    </UserLogStatus.Provider>
  );
};

export default Navigator;
