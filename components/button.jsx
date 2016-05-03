import React,{Component} from 'react'

export default class Button extends Component {
  render(){
      return <button onClick={this.props.click} className={'btn btn-lg btn-' + this.props.type + ' center-block'} disabled={this.props.disabled}><span className={'btn-icon icon-budicon-' + this.props.icon}> </span>{this.props.text}</button>;
  }
}
