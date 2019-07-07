import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { UserLogStatus } from '../Context/Context';
import React, { useContext } from 'react';

function PrivateRoute({ component: RouteComponent, ...rest }: any) {
  const { isLoggedin } = useContext(UserLogStatus) as any;
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedin ? (
          <RouteComponent {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
