// src/App.js

import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import {Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    var response_type=encodeURIComponent('code')
    var client_id=encodeURIComponent('22DJRK')
    var redirect_uri=encodeURIComponent('http://localhost:3000/auth_return')
    var scope=encodeURIComponent('activity nutrition heartrate location nutrition profile settings sleep social weight')
    var url = 'https://www.fitbit.com/oauth2/authorize?response_type='+
    response_type +
    '&client_id='+
    client_id+
    //'&redirect_uri='+
    //redirect_uri+
    '&scope='+
    scope;
    console.log(url)
    return(
      <div>
        <a href= {url}>TESTING</a>
      </div>
    )
  }
}

export default App;
