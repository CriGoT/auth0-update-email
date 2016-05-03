module.exports=function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(14),i=a(r),s=n(6),o=a(s);e.exports=function(e,t,n){return i["default"].fromExpress((0,o["default"])(e.secrets))(e,t,n)}},function(e,t,n){"use strict";function a(e){return null!=e&&""!==e}function r(e){return(Array.isArray(e)?e.map(r):e&&"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}):[e]).filter(a).join(" ")}t.merge=function i(e,t){if(1===arguments.length){for(var n=e[0],r=1;r<e.length;r++)n=i(n,e[r]);return n}var s=e["class"],o=t["class"];(s||o)&&(s=s||[],o=o||[],Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]),e["class"]=s.concat(o).filter(a));for(var u in t)"class"!=u&&(e[u]=t[u]);return e},t.joinClasses=r,t.cls=function(e,n){for(var a=[],i=0;i<e.length;i++)n&&n[i]?a.push(t.escape(r([e[i]]))):a.push(r(e[i]));var s=r(a);return s.length?' class="'+s+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(t){return t+":"+e[t]}).join(";"):e},t.attr=function(e,n,a,r){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(r?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):a?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,n){var a=[],i=Object.keys(e);if(i.length)for(var s=0;s<i.length;++s){var o=i[s],u=e[o];"class"==o?(u=r(u))&&a.push(" "+o+'="'+u+'"'):a.push(t.attr(o,u,!1,n))}return a.join("")},t.escape=function(e){var t=String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return t===""+e?e:t},t.rethrow=function s(e,t,a,r){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&t||r))throw e.message+=" on line "+a,e;try{r=r||n(18).readFileSync(t,"utf8")}catch(i){s(e,null,a)}var o=3,u=r.split("\n"),l=Math.max(a-o,0),c=Math.min(u.length,a+o),o=u.slice(l,c).map(function(e,t){var n=t+l+1;return(n==a?"  > ":"    ")+n+"| "+e}).join("\n");throw e.path=t,e.message=(t||"Jade")+":"+a+"\n"+o+"\n\n"+e.message,e},t.DebugItem=function(e,t){this.lineno=e,this.filename=t}},function(e,t){e.exports=require("boom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("request")},function(e,t){e.exports=require("url")},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t=(0,i["default"])(),n=(0,o["default"])(e);return t.use("/",n),t};var r=n(3),i=a(r),s=n(7),o=a(s),u=n(9);a(u)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e){var t=function(t,n,a){try{var r=new m.ManagementClient({token:e.AUTH0_MANAGEMENT_TOKEN,domain:e.AUTH0_DOMAIN});t.auth0Client=r}catch(i){return console.log("Auth0 client not available"),a(i)}return a()},n=(0,c["default"])({secret:new Buffer(e.AUTH0_CLIENT_SECRET,"base64"),audience:e.AUTH0_CLIENT_ID}),a=s["default"].Router();a.get("/isavailable",function(t,n){return t.query.m?(console.log("Checking if e-mail "+t.query.m+" is being used"),void t.auth0Client.users.getAll({per_page:1,include_fields:!0,search_engine:"v2",fields:"email",q:'identities.connection:"'+e.AUTH0_CONNECTION+'" AND email:"'+t.query.m+'"'}).then(function(e){var a=!e.some(function(e){return e.email.toUpperCase()===t.query.m.toUpperCase()});console.log("E-mail "+t.query.m+" is "+(a?"not ":"")+" being used"),n.status(200).json(a)})["catch"](function(e){console.log(e),n.status(500).json({name:"InternalError",code:"management_api_error",description:"The Managemente API returned an error",statusCode:500})})):n.status(400).json({name:"BadRequestError",code:"mail_required",description:"You must provide a mail to validate",statusCode:400})}),a.patch("/me",function(e,t){return e.body&&e.body.email?(console.log("Updating user "+e.user.sub+" with email "+e.body.email),void e.auth0Client.users.update({id:e.user.sub},{email:e.body.email}).then(function(n){console.log("User "+e.user.sub+" updated!"),e.auth0Client.jobs.verifyEmail({user_id:e.user.sub}).then(function(n){console.log("Verification for user "+e.user.sub+" requested!"),t.status(201).json({status:"completed",message:"Your E-mail address has been updated you will shortly receive a message to verify it."})})["catch"](function(e){console.log(e),t.status(201).json({status:"pending",message:"Your E-mail address has been updated but the message to verify your new address was not sent."})})})["catch"](function(e){console.log(e),400===e.statusCode?t.status(400).json({name:e.name,code:"bad_api_request",description:e.message,statusCode:400}):t.status(500).json({name:"InternalError",code:"management_api_error",description:"The Managemente API returned an error while updating the user",statusCode:500})})):t.status(400).json({name:"BadRequestError",code:"mail_required",description:"You must provide a mail to update the user info",statusCode:400})});var r=s["default"].Router();return r.use("/api",n,t,h["default"].json(),a),r.get("/",function(t,n){n.header("Content-Type","text/html"),n.status(200).send((0,u["default"])({baseUrl:d["default"].getBaseUrl(t),config:e}))}),r}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var i=n(3),s=a(i),o=n(13),u=a(o),l=n(17),c=a(l),p=n(8),d=a(p),f=n(16),h=a(f),m=n(15)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(5),o=a(s),u=function(){function e(){r(this,e)}return i(e,null,[{key:"getBaseUrl",value:function(e){var t=o["default"].parse(e.originalUrl).pathname.replace(e.path,""),n="https";return"development"===(process.env.NODE_ENV||"development")&&(n=e.protocol),o["default"].format({protocol:n,host:e.get("host"),pathname:t})}}]),e}();t["default"]=u},function(e,t,n){function a(e,t){var n="string"==typeof e&&e===t||e instanceof RegExp&&!!e.exec(t);return e instanceof RegExp&&(e.lastIndex=0),e&&e.url&&(n=a(e.url,t)),n}function r(e,t){return e?(e=Array.isArray(e)?e:[e],!!~e.indexOf(t)):!0}var i=n(5);e.exports=function(e){var t=this,n="function"==typeof e?{custom:e}:e;return n.useOriginalUrl="undefined"==typeof n.useOriginalUrl?!0:n.useOriginalUrl,function(e,s,o){var u=i.parse((n.useOriginalUrl?e.originalUrl:e.url)||e.url||"",!0),l=!1;n.custom&&(l=l||n.custom(e));var c=!n.path||Array.isArray(n.path)?n.path:[n.path];c&&(l=l||c.some(function(t){return a(t,u.pathname)&&r(t.methods,e.method)}));var p=!n.ext||Array.isArray(n.ext)?n.ext:[n.ext];p&&(l=l||p.some(function(e){return u.pathname.substr(-1*e.length)===e}));var d=!n.method||Array.isArray(n.method)?n.method:[n.method];return d&&(l=l||!!~d.indexOf(e.method)),l?o():void t(e,s,o)}}},function(e,t,n){n(1);e.exports=function(e){var t=[];return t.push("<script type=\"text/babel\">var App = React.createClass({\n    componentWillMount: function() {\n      this.createLock();\n      this.setupAjax();\n      this.setState(this.getState())\n    },\n\n    createLock: function() {\n      this.lock = new Auth0Lock(this.props.clientId, this.props.domain);\n    },\n\n    setupAjax: function() {\n      var profile = this.getState() || {};\n      if (profile.id_token)\n      {\n        $.ajaxSetup({\n          'beforeSend': function(xhr) {\n              xhr.setRequestHeader('Authorization',\n                    'Bearer ' + profile.id_token);\n          }\n        });\n      }\n    },\n\n    getState: function() {\n      var state;\n      var authHash = this.lock.parseHash(window.location.hash);\n      if (authHash) {\n        if (authHash.error) {\n          console.log(\"Error signing in\", authHash);\n        } else{\n          state = authHash;\n        }\n      }\n      return state;\n    },\n\n    render: function() {\n      if (this.state.profile)\n        return <LoggedIn lock={this.lock} profile={this.state.profile} {...this.props} />;\n      else\n        return <Home lock={this.lock} {...this.props} />;\n    }\n  });</script>"),t.join("")}},function(e,t,n){n(1);e.exports=function(e){var t=[];return t.push("<script type=\"text/babel\">var timer;\nvar LoggedIn = React.createClass({\n  isValidMail : function(value){\n    var regExp = /^((([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+(\\.([a-z]|\\d|[!#\\$%&'\\*\\+\\-\\/=\\?\\^_`{\\|}~]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])+)*)|((\\x22)((((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(([\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x7f]|\\x21|[\\x23-\\x5b]|[\\x5d-\\x7e]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(\\\\([\\x01-\\x09\\x0b\\x0c\\x0d-\\x7f]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]))))*(((\\x20|\\x09)*(\\x0d\\x0a))?(\\x20|\\x09)+)?(\\x22)))@((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))$/i;\n    return regExp.test(value || this.state.new_mail)\n  },\n\n  updateState: function(newState){\n    this.setState($.extend({},this.state,newState));\n  },\n\n  mailChanged : function(new_mail){\n    new_mail= new_mail || this.state.new_mail;\n    return this.props.profile.email !== new_mail && new_mail && new_mail!=='';\n  },\n\n  getInitialState: function() {\n    return {\n      new_mail: this.props.profile.email,\n      is_available: false,\n      working: false,\n      result: null\n    }\n  },\n\n  setResult : function (type,message) {\n      this.updateState({working: false, result: {type: type, message: message}});\n      window.location.replace('#');\n  },\n\n  callApi: function(method,path,data,done,fail){\n    this.updateState({working: true});\n    $.ajax({\n      method: method,\n      url: this.props.apiUrl + '/' + path,\n      data: data,\n      dataType: 'json',\n      contentType: 'application/json',\n      cache: false})\n    .then(done,fail);\n  },\n\n  updateEmail: function() {\n    this.callApi('PATCH','me',JSON.stringify({email:this.state.new_mail}),\n      result=> this.setResult('success',result.message),\n      err =>{\n        console.log('Error updating e-mail',err);\n        this.setResult('danger',err.description)\n    });\n  },\n\n  checkAvailability: function(){\n      if (this.mailChanged() && this.isValidMail()){\n        var state = this.state;\n        this.callApi('GET','isavailable',{m:state.new_mail},\n        result=>{\n          if (state.new_mail===this.state.new_mail)\n            this.updateState({is_available: result, working: false});\n        },\n        err =>{\n          console.log(err);\n          this.updateState({is_available: false, working: false});\n        });\n      }\n  },\n\n  onMailChange: function(event) {\n    window.clearTimeout(timer);\n    this.updateState({new_mail: event.target.value,is_available: false,working: this.mailChanged(event.target.value) && this.isValidMail(event.target.value) });\n    timer = window.setTimeout(this.checkAvailability,350);\n  },\n\n  renderForm : function() {\n    return (\n      <form className=\"form-horizontal\">\n        <div className=\"form-group\">\n          <label className=\"col-xs-3 control-label\">Current E-Mail</label>\n          <div className=\"col-xs-6\">\n            <input type=\"text\" required readOnly className=\"form-control\" value={this.props.profile.email} />\n          </div>\n        </div>\n        <div className=\"form-group\">\n          <label className=\"col-xs-3 control-label\">New E-Mail</label>\n          <div className=\"col-xs-6\">\n            <input type=\"text\" onChange={this.onMailChange} className=\"form-control\" readOnly={this.state.result || this.state.error || (this.state.is_available && this.state.working)} value={this.state.new_mail} />\n          </div>\n        </div>\n      </form>);\n  },\n\n  renderAction: function() {\n    if (this.state.result)\n      return <Result type={this.state.result.type} text={this.state.result.message} />;\n\n    if (this.state.working)\n      return <Spinner />;\n\n    if (!this.isValidMail())\n      return <Button type=\"warning\" icon='780' text='Invalid E-mail address' />;\n\n    if (this.mailChanged() && !this.state.is_available)\n        return <Button type=\"danger\" icon='782' text='E-mail address already in use' />;\n\n    return <Button click={this.updateEmail} disabled={!this.mailChanged()} type=\"primary\" icon='781' text='Update E-mail' />;\n  },\n\n  render: function() {\n    if (this.props.profile) {\n      return (\n        <div>\n          <h2>Welcome {this.props.profile.name || this.props.profile.nickname || this.props.profile.email}</h2>\n          {this.renderForm()}\n          {this.renderAction()}\n        </div>);\n    } else {\n      return (\n          <div className=\"alert alert-danger\">There was an error retrieving your information. Please, try again later or contact your administrator.</div>\n        );\n    }\n  }\n});</script>"),t.join("")}},function(e,t,n){n(1);e.exports=function(e){var t=[];return t.push("<script type=\"text/babel\">var Spinner = React.createClass({\n  render: function(){\n    return <div className=\"spinner spinner-md is-auth0 center-block\"><div className=\"circle\"></div></div>\n  }\n});\n\nvar Result = React.createClass({\n  render:function(){\n    return <div className={'alert alert-' + this.props.type}><p>{this.props.text}</p><strong>For your security close the browser</strong></div>;\n  }\n});\n\nvar Button = React.createClass({\n  render : function(){\n      return (\n        <button onClick={this.props.click} className={'btn btn-lg btn-' + this.props.type + ' center-block'} disabled={this.props.disabled}><span className={'btn-icon icon-budicon-' + this.props.icon}> </span>{this.props.text}</button>\n      );\n  }\n});\n\nvar Home = React.createClass({\n  showLock: function() {\n    this.props.lock.showSignin({closable:false,rememberLastLogin:false,connections:[this.props.connection],container:'auth0-lock',authParams:{scope:'openid email name nickname'}});\n  },\n\n  componentDidMount:function() {\n    this.showLock();\n  },\n\n  render: function() {\n    return (\n      <div className=\"col-xs-6 col-xs-offset-4\">\n        <div id='auth0-lock'></div>\n      </div>\n    );\n  }\n});</script>"),t.join("")}},function(e,t,n){var a=n(1);e.exports=function(e){var t,r=[],i=e||{};return function(i,s,o,u){r.push('<!DOCTYPE html><html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=Edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"'+a.attr("content",""+o,!0,!0)+'><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/2.0.1/lib/logos/img/favicon.png"><link rel="apple-touch-icon" href="apple-touch-icon.png"><link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/latest/index.css"><script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script><script type="text/javascript" src="https://fb.me/react-0.14.0.min.js"></script><script type="text/javascript" src="https://fb.me/react-dom-0.14.0.js"></script><script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script><script type="text/javascript" src="https://cdn.auth0.com/js/jwt-decode-1.4.0.min.js"></script><script type="text/javascript" src="https://cdn.auth0.com/js/navbar-1.0.1.min.js"></script><script type="text/javascript" src="https://cdn.auth0.com/auth0/auth0-2.1.0.min.js"></script><script type="text/javascript" src="https://cdn.auth0.com/js/lock-9.0.min.js"></script></head><body><header class="dashboard-header"><nav role="navigation" class="navbar navbar-default"><div class="container"><div class="navbar-header"><i aria-hidden="true" style="font-size:40px" class="icon-budicon-781 icon navbar-brand"></i><span style="font-size:30px" class="navbar-link">E-Mail Update</span></div></div></nav></header><div class="container root-container"><div class="row"><div id="content" class="wrapper col-xs-10"></div></div></div>'+(null==(t=n(12).call(this,e))?"":t)+(null==(t=n(11).call(this,e))?"":t)+(null==(t=n(10).call(this,e))?"":t)+'<script type="text/babel">var AUTH0_DOMAIN=\''+a.escape(null==(t=s.AUTH0_DOMAIN)?"":t)+"';\nvar AUTH0_CLIENT_ID='"+a.escape(null==(t=s.AUTH0_CLIENT_ID)?"":t)+"';\nvar apiUrl = '"+a.escape(null==(t=i)?"":t)+"/api';\nvar AUTH0_CONNECTION = '"+a.escape(null==(t=s.AUTH0_CONNECTION)?"":t)+"'\nReactDOM.render(\n  <App clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN} apiUrl={apiUrl} connection={AUTH0_CONNECTION}/>,\n  document.getElementById('content')\n);</script></body></html>")}.call(this,"baseUrl"in i?i.baseUrl:"undefined"!=typeof baseUrl?baseUrl:void 0,"config"in i?i.config:"undefined"!=typeof config?config:void 0,"description"in i?i.description:"undefined"!=typeof description?description:void 0,"undefined"in i?i.undefined:void 0),r.join("")}},function(e,t,n){function a(e){return function(t,n,a){var r=s(n.x_wt.jtn);return n.originalUrl=n.url,n.url=n.url.replace(r,"/"),n.webtaskContext=o(t),e(n,a)}}function r(e){var t;return e.ext("onRequest",function(e,n){var a=s(e.x_wt.jtn);e.setUrl(e.url.replace(a,"/")),e.webtaskContext=t}),function(n,a,r){var i=e._dispatch();t=o(n),i(a,r)}}function i(e){return function(t,n,a){var r=s(n.x_wt.jtn);return n.originalUrl=n.url,n.url=n.url.replace(r,"/"),n.webtaskContext=o(t),e.emit("request",n,a)}}function s(e){var t="^/api/run/[^/]+/",n="(?:[^/?#]*/?)?";return new RegExp(t+(e?n:""))}function o(e){function t(e,t,a){var r=n(2);"function"==typeof t&&(a=t,t={}),a(r.preconditionFailed("Storage is not available in this context"))}function a(t,a,r){var i=n(2),s=n(4);"function"==typeof a&&(r=a,a={}),s({uri:e.secrets.EXT_STORAGE_URL,method:"GET",headers:a.headers||{},qs:{path:t},json:!0},function(e,t,n){return e?r(i.wrap(e,502)):404===t.statusCode&&Object.hasOwnProperty.call(a,"defaultValue")?r(null,a.defaultValue):t.statusCode>=400?r(i.create(t.statusCode,n&&n.message)):void r(null,n)})}function r(e,t,a,r){var i=n(2);"function"==typeof a&&(r=a,a={}),r(i.preconditionFailed("Storage is not available in this context"))}function i(t,a,r,i){var s=n(2),o=n(4);"function"==typeof r&&(i=r,r={}),o({uri:e.secrets.EXT_STORAGE_URL,method:"PUT",headers:r.headers||{},qs:{path:t},body:a},function(e,t,n){return e?i(s.wrap(e,502)):t.statusCode>=400?i(s.create(t.statusCode,n&&n.message)):void i(null)})}return e.read=e.secrets.EXT_STORAGE_URL?a:t,e.write=e.secrets.EXT_STORAGE_URL?i:r,e}t.fromConnect=t.fromExpress=a,t.fromHapi=r,t.fromServer=t.fromRestify=i},function(e,t){e.exports=require("auth0@2.1.0")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("express-jwt")},function(e,t){e.exports=require("fs")}]);