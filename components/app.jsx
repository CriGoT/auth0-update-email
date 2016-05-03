import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Form from './form.jsx'
import Home from './home.jsx'

class App extends Component{
  componentWillMount() {
    this.createLock();
    this.setupAjax();
    this.setState(this.getState())
  }

  createLock() {
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
  }

  setupAjax() {
    var profile = this.getState() || {};
    if (profile.id_token)
    {
      $.ajaxSetup({
        'beforeSend': function(xhr) {
            xhr.setRequestHeader('Authorization',
                  'Bearer ' + profile.id_token);
        }
      });
    }
  }

  getState() {
    var state;
    var authHash = this.lock.parseHash(window.location.hash);
    if (authHash) {
      if (authHash.error) {
        console.log("Error signing in", authHash);
      } else{
        state = authHash;
      }
    }
    return state;
  }

  render() {
    if (this.state.profile)
      return <Form lock={this.lock} profile={this.state.profile} {...this.props} />;
    else
      return <Home lock={this.lock} {...this.props} />;
  }
}

ReactDOM.render(
  <App clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN} apiUrl={apiUrl} connection={AUTH0_CONNECTION}/>,
  document.getElementById('content')
);
