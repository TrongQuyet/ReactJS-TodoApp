import React from "react";
import "./Nav.scss"
import {
    Link,NavLink
  } from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" className={(navData) => (navData.isActive ? "active-style" : 'none')}>Home</NavLink>
                <NavLink to="/todo" className={(navData) => (navData.isActive ? "active-style" : 'none')}>TodoApp</NavLink>
                <NavLink to="/about" className={(navData) => (navData.isActive ? "active-style" : 'none')}>About</NavLink>
                <NavLink to="/ListUsers" className={(navData) => (navData.isActive ? "active-style" : 'none')}>ListUsers</NavLink>
            </div>
        )
    }

}
export default Nav;