var Result = React.createClass({
  render:function(){
    return <div className={'alert alert-' + this.props.type}><p>{this.props.text}</p><strong>For your security close the browser</strong></div>;
  }
});

var Button = React.createClass({
  render : function(){
      return (
        <button onClick={this.props.click} className={'btn btn-lg btn-' + this.props.type + ' center-block'} disabled={this.props.disabled}><span className={'btn-icon icon-budicon-' + this.props.icon}> </span>{this.props.text}</button>
      );
  }
});
