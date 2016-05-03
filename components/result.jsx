import React, {Component} from 'react'

export default class Result extends Component{
  render(){
    return <div className={'alert alert-' + this.props.type}><p>{this.props.text}</p><strong>For your security close the browser</strong></div>;
  }
}
