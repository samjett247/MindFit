import React, { Component } from 'react'
import Statbox from './statbox.js'

class Landing2 extends Component {
  render(){
    var titles = ['Average # of hours slept','Average # of disruptions ','Average time to fall asleep']
    return(
      <div className="background">
        <div className="container-fluid d-flex h-100 align-items-center">
          {titles.map((value) => {
            return(
              <div class="container col-4">
                <div class="row">
                  <div class="col-md-100">
                    <Statbox name = {value}/>
                    </div>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default Landing2
