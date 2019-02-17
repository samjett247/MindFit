import React, { Component } from 'react'

class Statbox extends Component {
  render(){
    return (
      <div className="jumbotron">
          <p class="text-align-center align-top"> <h5> {this.props.number} </h5> </p>
        <hr class="my-4"></hr>
        <p class="text-justify align-bottom"> <h5> {this.props.name} </h5> </p>
      </div>
    )
  }
}
export default Statbox
