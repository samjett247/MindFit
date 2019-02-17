import React, { Component } from 'react'
import Statbox from './statbox.js'

class Landing2 extends Component {
  render(){
    var indices = [0,1,2]
    var titles = ['Average REM sleep','Average deep sleep','Average light sleep']
    var numbers = ['2.3 hours','3.1 hours','2.5 hours']
    return(
      <div className="background">
        <div className="container-fluid d-flex h-100 align-items-center">
          {indices.map((index) => {
            return(
              <div class="container col-4">
                <div class="row">
                  <div class="col-md-100">
                    <Statbox name = {titles[index]} number = {numbers[index]}/>
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
