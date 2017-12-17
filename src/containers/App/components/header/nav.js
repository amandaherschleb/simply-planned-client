import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setCurrentUser, setAuthToken} from '../../actions';
import {clearAuthToken} from '../../local-storage';

import './nav.css';

export function Nav(props) {
  console.log('props path', props.pathname)
  function logOut(e) {
    e.preventDefault();
    props.dispatch(setCurrentUser(null));
    props.dispatch(setAuthToken(null));
    clearAuthToken();
  }

  if (props.isLoggedIn && props.pathname === '/dashboard') {
    return (
      <div className="header-link-container">
        <a href="no-javascript.html" className="header-link" onClick={e => logOut(e)}>Log Out</a>
      </div>
    );
  } else if (props.isLoggedIn) {
    return (
      <ul className="header-list header-link-container">
        <li><Link to="/dashboard" className="header-link">Dashboard</Link></li>
        <li><a href="no-javascript.html" className="header-link" onClick={e => logOut(e)}>Log Out</a></li>
      </ul>
    );

  } else if (props.pathname === "/login") {
    return (
      <div className="header-link-container">
        <Link to="/sign-up" className="header-link">Sign Up</Link>
      </div>
    );
  } else {
    return (
      <div className="header-link-container">
        <Link to="/login" className="header-link">Log In</Link>
      </div>
    );
  }
};

export const mapStateToProps = state => ({
  isLoggedIn: state.app.auth.currentUser !== null
});

export default connect(mapStateToProps)(Nav);
