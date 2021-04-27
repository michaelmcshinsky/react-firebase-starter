import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "@/services/context/auth";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useAuth();
  const history = useHistory();

  function _toggle() {
    setIsOpen(!isOpen);
  }

  function _logout() {
    setUser(null);
    _toggle();
    history.push('/login')
  }

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">React Firebase Starter</NavbarBrand>
      <NavbarToggler onClick={_toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="nav-link" exact to="/" onClick={_toggle}>
              Home
            </NavLink>
          </NavItem>
          {user ? (
            <>
              <NavItem>
                <NavLink className="nav-link" to="/admin" onClick={_toggle}>
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <button
                  className="nav-link border-0 bg-transparent"
                  onClick={_logout}
                >
                  Logout
                </button>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink className="nav-link" to="/login" onClick={_toggle}>
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/register" onClick={_toggle}>
                  Register
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
