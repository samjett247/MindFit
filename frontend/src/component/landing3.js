import React, { Component } from 'react'
import Statbox from './statbox.js'
import Example_Chart from '../chart_compiled.js'

class Landing3 extends Component {
  render(){
    return(
      <div className="background">
        <div className="container-fluid d-flex h-10 position-variable fixed-bottom">
        <button type="button" class="btn btn-outline-dark btn-large btn-block" onclick="callTrillio">Contact Doctor</button>
        </div>
        <div className="container align-items-center">
        <Example_Chart/>
        </div>
    </div>
    )
  }
}
export default Landing3
