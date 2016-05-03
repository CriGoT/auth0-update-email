var App = React.createClass({
  componentWillMount: function() {
    this.createLock();
    this.setupAjax();
    this.setState(this.getState())
  },

  createLock: function() {
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);
  },

  setupAjax: function() {
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
  },

  getState: function() {
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
  },

  render: function() {
    if (this.state.profile)
      return <LoggedIn lock={this.lock} profile={this.state.profile} {...this.props} />;
    else
      return <Home lock={this.lock} {...this.props} />;
  }
});
