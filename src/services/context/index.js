import React from "react";
import PropTypes from "prop-types";
import { AuthProvider } from "./auth";

export function AppProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

AppProviders.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
