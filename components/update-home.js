var Home = React.createClass({
  showLock: function() {
    this.props.lock.showSignin({closable:false,rememberLastLogin:false,connections:[this.props.connection],container:'auth0-lock',authParams:{scope:'openid email name nickname'}});
  },

  componentDidMount:function() {
    this.showLock();
  },

  render: function() {
    return (
      <div className="col-xs-6 col-xs-offset-4">
        <div id='auth0-lock'></div>
      </div>
    );
  }
});
