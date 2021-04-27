import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from '@/services/context/auth'

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { authenticated, loadingAuthState } = useAuth();
  if (loadingAuthState) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        authenticated ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { prevPath: rest.path } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
