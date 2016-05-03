import React,{Component} from 'react'
import Spinner from './spinner.jsx'
import Result  from './result.jsx'
import Button from './button.jsx'

let timer;
export default class Form extends Component{
  componentWillMount(){
    this.setState({
      new_mail: this.props.profile.email,
      is_available: false,
      working: false,
      result: null
    });
  }

  isValidMail(value){
    var regExp = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    return regExp.test(value || this.state.new_mail)
  }

  updateState(newState){
    this.setState($.extend({},this.state,newState));
  }

  mailChanged(new_mail){
    new_mail= new_mail || this.state.new_mail;
    return this.props.profile.email !== new_mail && new_mail && new_mail!=='';
  }

  setResult(type,message) {
      this.updateState({working: false, result: {type: type, message: message}});
      window.location.replace('#');
  }

  callApi(method,path,data,done,fail){
    this.updateState({working: true});
    $.ajax({
      method: method,
      url: this.props.apiUrl + '/' + path,
      data: data,
      dataType: 'json',
      contentType: 'application/json',
      cache: false})
    .then(done,fail);
  }

  updateEmail() {
    this.callApi('PATCH','me',JSON.stringify({email:this.state.new_mail}),
      result=> this.setResult('success',result.message),
      err =>{
        console.log('Error updating e-mail',err);
        this.setResult('danger',err.description)
    });
  }

  checkAvailability(){
      if (this.mailChanged() && this.isValidMail()){
        var state = this.state;
        this.callApi('GET','isavailable',{m:state.new_mail},
        result=>{
          if (state.new_mail===this.state.new_mail)
            this.updateState({is_available: result, working: false});
        },
        err =>{
          console.log(err);
          this.updateState({is_available: false, working: false});
        });
      }
  }

  onMailChange(event) {
    window.clearTimeout(timer);
    this.updateState({new_mail: event.target.value,is_available: false,working: this.mailChanged(event.target.value) && this.isValidMail(event.target.value) });
    timer = window.setTimeout(_ =>this.checkAvailability(),350);
  }

  renderForm() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="col-xs-3 control-label">Current E-Mail</label>
          <div className="col-xs-6">
            <input type="text" required readOnly className="form-control" value={this.props.profile.email} />
          </div>
        </div>
        <div className="form-group">
          <label className="col-xs-3 control-label">New E-Mail</label>
          <div className="col-xs-6">
            <input type="text" onChange={this.onMailChange.bind(this)} className="form-control" readOnly={this.state.result || this.state.error || (this.state.is_available && this.state.working)} value={this.state.new_mail} />
          </div>
        </div>
      </form>);
  }

  renderAction() {
    if (this.state.result)
      return <Result type={this.state.result.type} text={this.state.result.message} />;

    if (this.state.working)
      return <Spinner />;

    if (!this.isValidMail())
      return <Button type="warning" icon='780' text='Invalid E-mail address' />;

    if (this.mailChanged() && !this.state.is_available)
        return <Button type="danger" icon='782' text='E-mail address already in use' />;

    return <Button click={this.updateEmail.bind(this)} disabled={!this.mailChanged()} type="primary" icon='781' text='Update E-mail' />;
  }

  render() {
    if (this.props.profile) {
      return (
        <div>
          <h2>Welcome {this.props.profile.name || this.props.profile.nickname || this.props.profile.email}</h2>
          {this.renderForm()}
          {this.renderAction()}
        </div>);
    } else {
      return (
          <div className="alert alert-danger">There was an error retrieving your information. Please, try again later or contact your administrator.</div>
        );
    }
  }
}
