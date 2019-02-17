import React, { Component } from 'react'

class Statbox extends Component {
  render(){
    return (
      <div className="jumbotron">
        <hr class="my-4"></hr>
        <p class="text-justify align-bottom"> <h5> {this.props.name} </h5> </p>
      </div>
    )
  }
}
export default Statbox
