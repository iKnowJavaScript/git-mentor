import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Mentors from '../pages/Mentors';
import Profile from '../pages/Profile';

const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/mentors" component={Mentors} />
        <Route path="/profile" component={Profile} />
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
  );
};

/* <Route path="/trip/:tripId" component={Trips} /> */

export default Navigator;
