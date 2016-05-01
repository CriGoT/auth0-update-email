module.exports = 
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ = __webpack_require__(/*! ./ */ 2);
	
	var _2 = _interopRequireDefault(_);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var port = process.env.PORT || 3000;
	
	_2.default.listen(port, function () {
	    console.log('Server started on port', port);
	});

/***/ },
/* 1 */,
/* 2 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(/*! express */ 3);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _webtaskTools = __webpack_require__(/*! webtask-tools */ 4);
	
	var _webtaskTools2 = _interopRequireDefault(_webtaskTools);
	
	var _index = __webpack_require__(/*! ./views/index.jade */ 5);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _admin = __webpack_require__(/*! ./routes/admin */ 8);
	
	var _admin2 = _interopRequireDefault(_admin);
	
	var _updateemail = __webpack_require__(/*! ./routes/updateemail */ 10);
	
	var _updateemail2 = _interopRequireDefault(_updateemail);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = (0, _express2.default)();
	
	app.use('/admin', _admin2.default);
	app.use('/updateemail', _updateemail2.default);
	app.get('/', function (req, res) {
	  res.redirect('/admin');
	});
	
	exports.default = app;

/***/ },
/* 3 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/*!********************************!*\
  !*** external "webtask-tools" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = require("webtask-tools");

/***/ },
/* 5 */
/*!**************************!*\
  !*** ./views/index.jade ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(/*! ./~/jade/lib/runtime.js */ 6);
	
	module.exports = function template(locals) {
	var jade_debug = [ new jade.DebugItem( 1, "E:\\auth0\\sample\\views\\index.jade" ) ];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (baseUrl, description) {
	jade_debug.unshift(new jade.DebugItem( 0, "E:\\auth0\\sample\\views\\layout.jade" ));
	jade_debug.unshift(new jade.DebugItem( 1, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<!DOCTYPE html>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 2, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<html>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<head>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, "E:\\auth0\\sample\\views\\layout.jade" ));
	jade_debug.unshift(new jade.DebugItem( 4, "E:\\auth0\\sample\\views\\index.jade" ));
	buf.push("<title>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 4, jade_debug[0].filename ));
	buf.push("Self-Service Email Update Extension");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</title>");
	jade_debug.shift();
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 6, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<meta charset=\"UTF-8\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 7, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 8, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 9, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<meta name=\"description\"" + (jade.attr("content", '' + (description) + '', true, true)) + ">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 10, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 11, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<link rel=\"shortcut icon\" href=\"https://cdn.auth0.com/styleguide/2.0.1/lib/logos/img/favicon.png\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 12, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<link rel=\"apple-touch-icon\" href=\"apple-touch-icon.png\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 14, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.auth0.com/manage/v0.3.973/css/index.min.css\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 15, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.auth0.com/styleguide/latest/index.css\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 17, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-2.1.4.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 18, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://fb.me/react-0.14.0.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 19, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://fb.me/react-dom-0.14.0.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 20, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 21, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://cdn.auth0.com/js/jwt-decode-1.4.0.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 22, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://cdn.auth0.com/js/navbar-1.0.1.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 23, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://cdn.auth0.com/auth0/auth0-2.1.0.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 6, "E:\\auth0\\sample\\views\\layout.jade" ));
	jade_debug.unshift(new jade.DebugItem( 7, "E:\\auth0\\sample\\views\\index.jade" ));
	buf.push("<script type=\"text/javascript\">");
	jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
	buf.push("if (!sessionStorage.getItem(\"token\")) {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
	buf.push("  window.location.href = '" + (jade.escape((jade_interp = baseUrl) == null ? '' : jade_interp)) + "/login';");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
	buf.push("}");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
	buf.push("");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</head>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 27, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<body class=\"a0-extension\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 28, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<header class=\"dashboard-header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 29, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<nav role=\"navigation\" class=\"navbar navbar-default\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 30, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<div class=\"container\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 31, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<div class=\"navbar-header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 32, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<h1 class=\"navbar-brand\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 33, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<a href=\"http://manage.auth0.com/\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 34, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<span>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("Auth0");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h1>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 35, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<div id=\"navbar-collapse\" class=\"collapse navbar-collapse\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 36, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<script type=\"text/babel\">");
	jade_debug.unshift(new jade.DebugItem( 36, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 36, jade_debug[0].filename ));
	buf.push("ReactDOM.render(");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 36, jade_debug[0].filename ));
	buf.push("  <Navbar baseUrl=\"" + (jade.escape((jade_interp = baseUrl) == null ? '' : jade_interp)) + "\"/>,");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 36, jade_debug[0].filename ));
	buf.push("  document.getElementById('navbar-collapse')");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 36, jade_debug[0].filename ));
	buf.push(");");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</nav>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</header>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 37, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<div class=\"container\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 38, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 39, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<section class=\"content-page current\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 40, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<div class=\"col-xs-12\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 41, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 42, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<div class=\"col-xs-12 content-header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 43, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<ol class=\"breadcrumb\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 44, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<li>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 45, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<a href=\"http://manage.auth0.com/\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 45, jade_debug[0].filename ));
	buf.push("Auth0 Dashboard");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 46, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<li>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 47, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<a href=\"#\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 47, jade_debug[0].filename ));
	buf.push("Extensions");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</li>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</ol>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 49, "E:\\auth0\\sample\\views\\layout.jade" ));
	buf.push("<div id=\"application\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 8, "E:\\auth0\\sample\\views\\layout.jade" ));
	jade_debug.unshift(new jade.DebugItem( 9, "E:\\auth0\\sample\\views\\index.jade" ));
	buf.push("<script type=\"text/babel\">");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("var App = React.createClass({");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("  render: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("    return (");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("      <div className=\"content-wrapper\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("        <div className=\"content-header\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("          <h1>Self-Service Email Update</h1>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("          <div className=\"content-header\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("            <ul className=\"nav nav-tabs\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("              <li className=\"Active\">Settings</li>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("            </ul>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("          </div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("          <div className=\"widget-flat content\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("            <form id=\"connection-setup-form\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("              <div className=\"form-group\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("                <label className=\"col-xs-2 control-label\">Choose a Connection</label>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("                <div className=\"col-xs-5\"><select className=\"form-control\" /></div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("              </div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("            </form>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("          </div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("        </div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("      </div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("    );");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("  }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("});");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("ReactDOM.render(");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("  <App />,");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push("  document.getElementById('application')");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 9, jade_debug[0].filename ));
	buf.push(");");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</section>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</body>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</html>");
	jade_debug.shift();
	jade_debug.shift();}.call(this,"baseUrl" in locals_for_with?locals_for_with.baseUrl:typeof baseUrl!=="undefined"?baseUrl:undefined,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined));;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "extends ./layout.jade\n\nblock title\n  title Self-Service Email Update Extension\n\nblock headerscript\n  script(type='text/javascript').\n    if (!sessionStorage.getItem(\"token\")) {\n      window.location.href = '#{baseUrl}/login';\n    }\n\nblock content\n  script(type='text/babel').\n    var App = React.createClass({\n      render: function() {\n        return (\n          <div className=\"content-wrapper\">\n            <div className=\"content-header\">\n              <h1>Self-Service Email Update</h1>\n\n              <div className=\"content-header\">\n                <ul className=\"nav nav-tabs\">\n                  <li className=\"Active\">Settings</li>\n                </ul>\n              </div>\n              <div className=\"widget-flat content\">\n                <form id=\"connection-setup-form\">\n                  <div className=\"form-group\">\n                    <label className=\"col-xs-2 control-label\">Choose a Connection</label>\n                    <div className=\"col-xs-5\"><select className=\"form-control\" /></div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        );\n      }\n    });\n\n    ReactDOM.render(\n      <App />,\n      document.getElementById('application')\n    );\n");
	}
	}

/***/ },
/* 6 */
/*!*******************************!*\
  !*** ./~/jade/lib/runtime.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */
	
	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];
	
	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }
	
	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }
	
	  return a;
	};
	
	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function nulls(val) {
	  return val != null && val !== '';
	}
	
	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}
	
	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};
	
	
	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};
	
	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];
	
	  var keys = Object.keys(obj);
	
	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];
	
	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }
	
	  return buf.join('');
	};
	
	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */
	
	exports.escape = function escape(html){
	  var result = String(html)
	    .replace(/&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;');
	  if (result === '' + html) return html;
	  else return result;
	};
	
	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */
	
	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(/*! fs */ 7).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);
	
	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');
	
	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};
	
	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 7 */
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 8 */
/*!*************************!*\
  !*** ./routes/admin.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(/*! express */ 3);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _auth0Oauth2Express = __webpack_require__(/*! auth0-oauth2-express */ 9);
	
	var _auth0Oauth2Express2 = _interopRequireDefault(_auth0Oauth2Express);
	
	var _index = __webpack_require__(/*! ../views/index.jade */ 5);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var admin = _express2.default.Router();
	
	admin.use((0, _auth0Oauth2Express2.default)({
	  scopes: 'read:connections update:users',
	  clientName: 'Update Email Address Extension'
	}));
	
	admin.get('/', function (req, res) {
	  console.log('Admin');
	  res.header("Content-Type", 'text/html');
	  res.status(200).send((0, _index2.default)());
	});
	
	exports.default = admin;

/***/ },
/* 9 */
/*!***************************************!*\
  !*** external "auth0-oauth2-express" ***!
  \***************************************/
/***/ function(module, exports) {

	module.exports = require("auth0-oauth2-express");

/***/ },
/* 10 */
/*!*******************************!*\
  !*** ./routes/updateemail.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _express = __webpack_require__(/*! express */ 3);
	
	var _express2 = _interopRequireDefault(_express);
	
	var _auth = __webpack_require__(/*! auth0 */ 11);
	
	var _update = __webpack_require__(/*! ../views/update.jade */ 12);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _expressJwt = __webpack_require__(/*! express-jwt */ 13);
	
	var _expressJwt2 = _interopRequireDefault(_expressJwt);
	
	var _url = __webpack_require__(/*! url */ 14);
	
	var _url2 = _interopRequireDefault(_url);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var config = {
	  AUTH0_DOMAIN: 'crigot.auth0.com',
	  AUTH0_MANAGEMENT_TOKEN: '',
	  AUTH0_CLIENT_ID: '',
	  AUTH0_CLIENT_SECRET: '',
	  AUTH0_CONNECTION: 'Username-Password-Authentication'
	};
	var router = _express2.default.Router();
	var auth0client = new _auth.ManagementClient({
	  token: config.AUTH0_MANAGEMENT_TOKEN,
	  domain: config.AUTH0_DOMAIN
	});
	
	var authenticate = (0, _expressJwt2.default)({
	  secret: new Buffer(config.AUTH0_CLIENT_SECRET, 'base64'),
	  audience: config.AUTH0_CLIENT_ID
	});
	
	router.use('/api', authenticate);
	
	router.get('/', function (req, res) {
	  console.log(_url2.default.parse(req.originalUrl));
	  var pathname = _url2.default.parse(req.originalUrl).pathname.replace(req.path, '');
	  var baseUrl = _url2.default.format({
	    protocol: 'https',
	    host: req.get('host'),
	    pathname: pathname
	  });
	  res.header("Content-Type", 'text/html');
	  res.status(200).send((0, _update2.default)({ baseUrl: baseUrl, config: config }));
	});
	
	router.get('/api/checkmail', function (req, res) {
	  if (!req.query.m) {
	    return res.status(400).json({ "name": "BadRequestError", "code": "mail_required", "description": "You must provide a mail to validate", "statusCode": 400 });
	  }
	
	  auth0client.users.getAll({
	    per_page: 1,
	    include_fields: true,
	    search_engine: 'v2',
	    fields: 'email',
	    q: 'identities.connection:"' + config.AUTH0_CONNECTION + '" AND email:"' + req.query.m + '"'
	  }).then(function (data) {
	    res.status(200).json(data.filter(function (value) {
	      return value.email.toUpperCase() === req.query.m.toUpperCase();
	    })
	    //data.filter((value) => value.email.length===req.query.m.length) // better performance bu it may not be necessary
	    );
	  }).catch(function (err) {
	    res.status(500).json({ "name": "InternalError", "code": "management_api_error", "description": "The Managemente API returned an error", "statusCode": 500 });
	  });
	});
	
	exports.default = router;

/***/ },
/* 11 */
/*!************************!*\
  !*** external "auth0" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = require("auth0");

/***/ },
/* 12 */
/*!***************************!*\
  !*** ./views/update.jade ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(/*! ./~/jade/lib/runtime.js */ 6);
	
	module.exports = function template(locals) {
	var jade_debug = [ new jade.DebugItem( 1, "E:\\auth0\\sample\\views\\update.jade" ) ];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (baseUrl, config, description) {
	jade_debug.unshift(new jade.DebugItem( 0, "E:\\auth0\\sample\\views\\update.jade" ));
	jade_debug.unshift(new jade.DebugItem( 1, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<!DOCTYPE html><html>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 2, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<head>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<meta charset=\"UTF-8\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 4, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 5, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 6, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<meta name=\"description\"" + (jade.attr("content", '' + (description) + '', true, true)) + ">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 7, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 8, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<link rel=\"shortcut icon\" href=\"https://cdn.auth0.com/styleguide/2.0.1/lib/logos/img/favicon.png\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 9, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<link rel=\"apple-touch-icon\" href=\"apple-touch-icon.png\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 11, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdn.auth0.com/styleguide/latest/index.css\">");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 13, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://code.jquery.com/jquery-2.1.4.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 14, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://fb.me/react-0.14.0.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 15, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://fb.me/react-dom-0.14.0.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 16, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 17, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://cdn.auth0.com/js/jwt-decode-1.4.0.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 18, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://cdn.auth0.com/js/navbar-1.0.1.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 19, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://cdn.auth0.com/auth0/auth0-2.1.0.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 20, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<script type=\"text/javascript\" src=\"https://cdn.auth0.com/js/lock-9.0.min.js\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</head>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 22, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<body>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 23, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<header class=\"dashboard-header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 24, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<nav role=\"navigation\" class=\"navbar navbar-default\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 25, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<div class=\"container\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 26, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<div class=\"navbar-header\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 27, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<i aria-hidden=\"true\" style=\"font-size:40px\" class=\"icon-budicon-781 icon navbar-brand\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</i>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 28, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<span style=\"font-size:30px\" class=\"navbar-link\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 28, jade_debug[0].filename ));
	buf.push("E-Mail Update");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</span>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</nav>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</header>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 30, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<div class=\"container root-container\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 31, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<div class=\"row\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 32, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<div id=\"content\" class=\"wrapper col-xs-10\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</div>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 34, "E:\\auth0\\sample\\views\\update.jade" ));
	buf.push("<script type=\"text/babel\">");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("var Home = React.createClass({");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  showLock: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    this.props.lock.show();");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  },");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  componentDidMount:function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    this.showLock();");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  },");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  render: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    return (");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      <div className=\"col-xs-6 col-xs-offset-3\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        <p>To change your E-mail address you must authenticate.</p>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        <a onClick={this.showLock} className=\"btn btn-primary btn-lg btn-login btn-block \">Sign In</a>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      </div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    );");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("});");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("var LoggedIn = React.createClass({");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  callApi: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  },");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  getInitialState: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    return {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      profile: null");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  },");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  componentDidMount: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    this.props.lock.getProfile(this.props.idToken, function (err, profile) {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      if (err) {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        console.log(\"Error loading the Profile\", err);");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        alert(\"Error loading the Profile\");");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      this.setState({profile: profile});");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    }.bind(this));");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  },");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  render: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    if (this.state.profile) {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      return (");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        <div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("          <h2>Welcome {this.state.profile.name || this.state.profile.nickname}</h2>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("          <form className=\"form-horizontal\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("              <div className=\"form-group\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("                <label className=\"col-xs-3 control-label\">Current E-Mail</label>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("                <div className=\"col-xs-6\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("                  <input type=\"text\" required readOnly className=\"form-control\" value={this.state.profile.email} />");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("                </div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("              </div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("              <div className=\"form-group\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("                <label className=\"col-xs-3 control-label\">New E-Mail</label>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("                <div className=\"col-xs-6\">");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("                  <input type=\"text\" className=\"form-control\" value={this.state.profile.email} />");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("                </div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("              </div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("          </form>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("          <button onClick={this.callApi} className=\"btn btn-lg btn-primary center-block\">Update E-mail</button>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        </div>);");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    } else {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      return (");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("          <div className=\"alert alert-danger\">There was an error retrieving your information. Please, try again later or contact your administrator.</div>");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        );");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("});");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("var App = React.createClass({");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    componentWillMount: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      this.setupAjax();");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      this.createLock();");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      this.setState({idToken: this.getIdToken()})");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    },");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    createLock: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      this.lock = new Auth0Lock(this.props.clientId, this.props.domain);");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    },");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    setupAjax: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      $.ajaxSetup({");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        'beforeSend': function(xhr) {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("          if (localStorage.getItem('userToken')) {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("            xhr.setRequestHeader('Authorization',");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("                  'Bearer ' + localStorage.getItem('userToken'));");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("          }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      });");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    },");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    getIdToken: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      var idToken;");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      var authHash = this.lock.parseHash(window.location.hash);");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      if (!idToken && authHash) {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        if (authHash.id_token) {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("          idToken = authHash.id_token");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("          localStorage.setItem('userToken', authHash.id_token);");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        if (authHash.error) {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("          console.log(\"Error signing in\", authHash);");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      return idToken;");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    },");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    render: function() {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      if (this.state.idToken) {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        return (<LoggedIn lock={this.lock} idToken={this.state.idToken} />);");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      } else {");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("        return (<Home lock={this.lock} />);");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("      }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("    }");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  });");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("const AUTH0_DOMAIN='" + (jade.escape((jade_interp = config.AUTH0_DOMAIN) == null ? '' : jade_interp)) + "';");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("const AUTH0_CLIENT_ID='" + (jade.escape((jade_interp = config.AUTH0_CLIENT_ID) == null ? '' : jade_interp)) + "';");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("const apiUrl = '" + (jade.escape((jade_interp = baseUrl) == null ? '' : jade_interp)) + "/api';");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("ReactDOM.render(");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  <App clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN} />,");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push("  document.getElementById('content')");
	jade_debug.shift();
	buf.push("\n");
	jade_debug.unshift(new jade.DebugItem( 34, jade_debug[0].filename ));
	buf.push(");");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</script>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</body>");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</html>");
	jade_debug.shift();
	jade_debug.shift();}.call(this,"baseUrl" in locals_for_with?locals_for_with.baseUrl:typeof baseUrl!=="undefined"?baseUrl:undefined,"config" in locals_for_with?locals_for_with.config:typeof config!=="undefined"?config:undefined,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined));;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "html\r\n  head\r\n    meta(charset='UTF-8')\r\n    meta(http-equiv='X-UA-Compatible', content='IE=Edge')\r\n    meta(name='viewport', content='width=device-width, initial-scale=1.0')\r\n    meta(name='description', content='#{description}')\r\n    meta(name='viewport', content='width=device-width, initial-scale=1')\r\n    link(rel='shortcut icon', href='https://cdn.auth0.com/styleguide/2.0.1/lib/logos/img/favicon.png')\r\n    link(rel='apple-touch-icon', href='apple-touch-icon.png')\r\n\r\n    link(rel='stylesheet', type='text/css', href=\"https://cdn.auth0.com/styleguide/latest/index.css\")\r\n\r\n    script(type='text/javascript', src='https://code.jquery.com/jquery-2.1.4.min.js')\r\n    script(type='text/javascript', src='https://fb.me/react-0.14.0.min.js')\r\n    script(type='text/javascript', src='https://fb.me/react-dom-0.14.0.js')\r\n    script(type='text/javascript', src='https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js')\r\n    script(type='text/javascript', src='https://cdn.auth0.com/js/jwt-decode-1.4.0.min.js')\r\n    script(type='text/javascript', src='https://cdn.auth0.com/js/navbar-1.0.1.min.js')\r\n    script(type='text/javascript', src='https://cdn.auth0.com/auth0/auth0-2.1.0.min.js')\r\n    script(type='text/javascript', src='https://cdn.auth0.com/js/lock-9.0.min.js')\r\n\r\n  body\r\n    header.dashboard-header\r\n      nav.navbar.navbar-default(role='navigation')\r\n        .container\r\n          .navbar-header\r\n            i.icon-budicon-781.icon.navbar-brand(aria-hidden=\"true\",style=\"font-size:40px\")\r\n            span.navbar-link(style=\"font-size:30px\") E-Mail Update\r\n\r\n    .container.root-container\r\n      .row\r\n        #content.wrapper.col-xs-10\r\n\r\n    script(type='text/babel').\r\n      var Home = React.createClass({\r\n        showLock: function() {\r\n          this.props.lock.show();\r\n        },\r\n\r\n        componentDidMount:function() {\r\n          this.showLock();\r\n        },\r\n\r\n        render: function() {\r\n          return (\r\n            <div className=\"col-xs-6 col-xs-offset-3\">\r\n              <p>To change your E-mail address you must authenticate.</p>\r\n              <a onClick={this.showLock} className=\"btn btn-primary btn-lg btn-login btn-block \">Sign In</a>\r\n            </div>\r\n          );\r\n        }\r\n      });\r\n\r\n      var LoggedIn = React.createClass({\r\n        callApi: function() {\r\n\r\n        },\r\n\r\n        getInitialState: function() {\r\n          return {\r\n            profile: null\r\n          }\r\n        },\r\n\r\n        componentDidMount: function() {\r\n          this.props.lock.getProfile(this.props.idToken, function (err, profile) {\r\n            if (err) {\r\n              console.log(\"Error loading the Profile\", err);\r\n              alert(\"Error loading the Profile\");\r\n            }\r\n            this.setState({profile: profile});\r\n          }.bind(this));\r\n        },\r\n\r\n        render: function() {\r\n          if (this.state.profile) {\r\n            return (\r\n              <div>\r\n                <h2>Welcome {this.state.profile.name || this.state.profile.nickname}</h2>\r\n                <form className=\"form-horizontal\">\r\n                    <div className=\"form-group\">\r\n                      <label className=\"col-xs-3 control-label\">Current E-Mail</label>\r\n                      <div className=\"col-xs-6\">\r\n                        <input type=\"text\" required readOnly className=\"form-control\" value={this.state.profile.email} />\r\n                      </div>\r\n                    </div>\r\n                    <div className=\"form-group\">\r\n                      <label className=\"col-xs-3 control-label\">New E-Mail</label>\r\n                      <div className=\"col-xs-6\">\r\n                        <input type=\"text\" className=\"form-control\" value={this.state.profile.email} />\r\n                      </div>\r\n                    </div>\r\n                </form>\r\n                <button onClick={this.callApi} className=\"btn btn-lg btn-primary center-block\">Update E-mail</button>\r\n              </div>);\r\n          } else {\r\n            return (\r\n                <div className=\"alert alert-danger\">There was an error retrieving your information. Please, try again later or contact your administrator.</div>\r\n              );\r\n          }\r\n        }\r\n      });\r\n      var App = React.createClass({\r\n          componentWillMount: function() {\r\n            this.setupAjax();\r\n            this.createLock();\r\n            this.setState({idToken: this.getIdToken()})\r\n          },\r\n          createLock: function() {\r\n            this.lock = new Auth0Lock(this.props.clientId, this.props.domain);\r\n          },\r\n          setupAjax: function() {\r\n            $.ajaxSetup({\r\n              'beforeSend': function(xhr) {\r\n                if (localStorage.getItem('userToken')) {\r\n                  xhr.setRequestHeader('Authorization',\r\n                        'Bearer ' + localStorage.getItem('userToken'));\r\n                }\r\n              }\r\n            });\r\n          },\r\n          getIdToken: function() {\r\n            var idToken;\r\n            var authHash = this.lock.parseHash(window.location.hash);\r\n            if (!idToken && authHash) {\r\n              if (authHash.id_token) {\r\n                idToken = authHash.id_token\r\n                localStorage.setItem('userToken', authHash.id_token);\r\n              }\r\n              if (authHash.error) {\r\n                console.log(\"Error signing in\", authHash);\r\n              }\r\n            }\r\n            return idToken;\r\n          },\r\n          render: function() {\r\n            if (this.state.idToken) {\r\n              return (<LoggedIn lock={this.lock} idToken={this.state.idToken} />);\r\n            } else {\r\n              return (<Home lock={this.lock} />);\r\n            }\r\n          }\r\n        });\r\n      const AUTH0_DOMAIN='#{config.AUTH0_DOMAIN}';\r\n      const AUTH0_CLIENT_ID='#{config.AUTH0_CLIENT_ID}';\r\n      const apiUrl = '#{baseUrl}/api';\r\n      ReactDOM.render(\r\n        <App clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN} />,\r\n        document.getElementById('content')\r\n      );\r\n");
	}
	}

/***/ },
/* 13 */
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = require("express-jwt");

/***/ },
/* 14 */
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ function(module, exports) {

	module.exports = require("url");

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map