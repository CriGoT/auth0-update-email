import React, {Component} from 'react'

export default class Home extends Component{
  showLock() {
    this.props.lock.showSignin({closable:false,rememberLastLogin:false,connections:[this.props.connection],container:'auth0-lock',authParams:{scope:'openid email name nickname'}});
  }

  componentDidMount() {
    this.showLock();
  }

  render() {
    return (
      <div className="col-xs-6 col-xs-offset-4">
        <div id='auth0-lock'></div>
      </div>
    );
  }
}
