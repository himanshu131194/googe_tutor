module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar _default = {\n  env: \"development\" || false,\n  port: process.env.PORT || 4000,\n  API_URL: \"http://localhost:3000\",\n  ACCESS_TOKEN: \"0z6v8b4uua\"\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Desktop/google_tutor-master/config/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ \"xlsx\");\n/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var jsontoxml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jsontoxml */ \"jsontoxml\");\n/* harmony import */ var jsontoxml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsontoxml__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var xml_formatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! xml-formatter */ \"xml-formatter\");\n/* harmony import */ var xml_formatter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xml_formatter__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! uuid/v4 */ \"uuid/v4\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({\n  extended: false\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json());\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(CURRENT_WORKING_DIR, 'public'))); //comment out before building for production\n\n //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_13__[\"default\"].compile(app);\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.get('/list-wrksheets', function (req, res) {\n  res.send(JSON.parse(fs__WEBPACK_IMPORTED_MODULE_6___default.a.readFileSync('public/xmls/worksheets.json')));\n});\napp.get('/test-xlsx', function (req, res) {\n  var workbook = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.readFile('public/xmls/zzzz.xlsx');\n  var sheet_name_list = workbook.SheetNames;\n  var xlsxJSON = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {\n    defVal: \"\"\n  });\n  var variableChecker = 0;\n  var questionObj = {};\n  var arrayOfTemplateIdsCols = [];\n  questionObj['paramsArr'] = [];\n  questionObj['prob_tmp_name'] = 'zzzzzz';\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = xlsxJSON[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var arrEle = _step.value;\n\n      if (arrEle.col1 == 'Tutor ID') {\n        questionObj['work_tmp_name'] = arrEle.col2;\n        variableChecker = 1;\n      } else if (arrEle.col1 == 'Conditions') {\n        variableChecker = 0;\n      }\n\n      if (arrEle.col1 == 'QUESTION') {\n        questionObj['ques_txt'] += arrEle.col2;\n      }\n\n      if (arrEle.col1 == 'QuesType') {\n        questionObj['ques_type'] = arrEle.col2;\n      }\n\n      if (arrEle.col1 == 'Answer stem') {\n        questionObj['ans_txt'] += arrEle.col2;\n      }\n\n      if (variableChecker == 1 && arrEle.col1 != 'Tutor ID') {\n        questionObj['paramsArr'].push({\n          key: arrEle.col1,\n          value: arrEle.col2,\n          type: arrEle.col3\n        });\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return != null) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  var data = [tutelageTempalte(questionObj), problemTemplate(questionObj), tutelageRefTempalte(), worksheetTempalte(questionObj), worksheetRefTempalte(questionObj)];\n  var xml = jsontoxml__WEBPACK_IMPORTED_MODULE_7___default()(data);\n  res.send({\n    test: xml\n  }); // sheet_name_list.forEach((y)=>{\n  //       var worksheet = workbook.Sheets[y];\n  //       var headers = {};\n  //       var data = [];\n  //       for(let z in worksheet){\n  //         if(z[0] === '!') continue;\n  //         var tt = 0;\n  //         for (var i = 0; i < z.length; i++){\n  //          if (!isNaN(z[i])){\n  //              tt = i;\n  //              break;\n  //          }\n  //     };\n  //     var col = z.substring(0,tt);\n  //           var row = parseInt(z.substring(tt));\n  //           var value = worksheet[z].v;\n  //          // console.log(value)\n  //           if(value && value=='Template ID' && arrayOfTemplateIdsCols.indexOf(col)<0){\n  //            arrayOfTemplateIdsCols.push(col);\n  //            arrayOfTemplateIds[col] = value;\n  //           }\n  //         //console.log(z)\n  //       }\n  //       // console.log(arrayOfTemplateIds)\n  //       // console.log(arrayOfTemplateIdsCols)\n  // })\n  // const result = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);\n  // console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {defVal:\"\"}))\n});\napp.get('*', function (req, res) {\n  res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])());\n});\n\nfunction tutelageTempalte(references) {\n  var params = [];\n\n  if (references.paramsArr.length > 0) {\n    var _iteratorNormalCompletion2 = true;\n    var _didIteratorError2 = false;\n    var _iteratorError2 = undefined;\n\n    try {\n      for (var _iterator2 = references.paramsArr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n        var x = _step2.value;\n        params.push({\n          name: 'param',\n          attrs: {\n            name: x.key,\n            type: x.type\n          }\n        });\n      }\n    } catch (err) {\n      _didIteratorError2 = true;\n      _iteratorError2 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {\n          _iterator2.return();\n        }\n      } finally {\n        if (_didIteratorError2) {\n          throw _iteratorError2;\n        }\n      }\n    }\n  }\n\n  return {\n    name: 'tutelage_tmpl',\n    attrs: {\n      'name': references.work_tmp_name\n    },\n    children: [{\n      name: 'params',\n      children: params\n    }]\n  };\n}\n\nfunction worksheetTempalte(references) {\n  var prob_refs = [];\n  var probRefs = \"<problem_ref name=\\\"\".concat(references.prob_tmp_name, \"\\\">\");\n\n  if (references.paramsArr.length > 0) {\n    var _iteratorNormalCompletion3 = true;\n    var _didIteratorError3 = false;\n    var _iteratorError3 = undefined;\n\n    try {\n      for (var _iterator3 = references.paramsArr[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n        var x = _step3.value;\n        // prob_refs.push({\n        //   name: 'bind',\n        //   attrs: {\n        //    name: x.key,\n        //    val: x.value\n        //   }\n        // })\n        if (x.type == 'int') probRefs += \"<bind name=\\\"\".concat(x.key, \"\\\" val=\\\"\").concat(x.value, \"\\\"/>\");else probRefs += \"<bind name=\\\"\".concat(x.key, \"\\\" type=\\\"\").concat(x.type, \"\\\"><img src=\\\"\").concat(x.value, \"\\\" width=\\\"20px\\\"/></bind>\");\n      }\n    } catch (err) {\n      _didIteratorError3 = true;\n      _iteratorError3 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {\n          _iterator3.return();\n        }\n      } finally {\n        if (_didIteratorError3) {\n          throw _iteratorError3;\n        }\n      }\n    }\n  }\n\n  return probRefs += \"</problem_ref>\"; // return {\n  //  name : 'worksheet_tmpl',\n  //  attrs: {\n  //  \t  'name': references.work_tmp_name\n  //  },\n  //  children:[\n  //               {name:'problem_ref', \n  //               attrs: {\n  //                    'name': references.prob_tmp_name\n  //               },\n  //               children : prob_refs}\n  //         ]\n  // }\n}\n\nfunction problemRefTemplate(references) {\n  var prob_refs = [];\n\n  if (references.paramsArr.length > 0) {\n    var _iteratorNormalCompletion4 = true;\n    var _didIteratorError4 = false;\n    var _iteratorError4 = undefined;\n\n    try {\n      for (var _iterator4 = references.paramsArr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n        var x = _step4.value;\n        prob_refs.push({\n          name: 'bind',\n          attrs: {\n            name: x.key,\n            val: x.value\n          }\n        });\n      }\n    } catch (err) {\n      _didIteratorError4 = true;\n      _iteratorError4 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {\n          _iterator4.return();\n        }\n      } finally {\n        if (_didIteratorError4) {\n          throw _iteratorError4;\n        }\n      }\n    }\n  }\n\n  return {\n    name: 'problem_ref',\n    attrs: {\n      'name': references.prob_tmp_name\n    },\n    children: prob_refs\n  };\n}\n\nfunction solutionTemplate(references) {\n  if (references['boxing'].length > 0) {\n    return checkBoxing(references);\n  }\n\n  if (references.ques_type === \"normal\") {\n    return normalSolutionTemplate();\n  } else if (references.ques_type === \"mcq\") {\n    return multipleChoiseSolutionTemplate(references);\n  } else if (references.ques_type === \"fib\") {\n    return fibSolutionTemplate(references);\n  } else if (references.ques_type === \"box\") {\n    return boxSolutionTemplate(references);\n  } else if (references.ques_type === \"aws\") {\n    return awsSolutionTemplate(references);\n  }\n}\n\nfunction problemTemplate(references) {\n  var params = [];\n  var multiQuesText = '';\n\n  if (references.paramsArr.length > 0) {\n    var _iteratorNormalCompletion5 = true;\n    var _didIteratorError5 = false;\n    var _iteratorError5 = undefined;\n\n    try {\n      for (var _iterator5 = references.paramsArr[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {\n        var x = _step5.value;\n        params.push({\n          name: 'param',\n          attrs: {\n            name: x.key,\n            type: x.type\n          }\n        });\n      }\n    } catch (err) {\n      _didIteratorError5 = true;\n      _iteratorError5 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {\n          _iterator5.return();\n        }\n      } finally {\n        if (_didIteratorError5) {\n          throw _iteratorError5;\n        }\n      }\n    }\n  }\n\n  var text = \"\".concat(references.ques_txt); //    if(references.ques_type===\"fib\"){\n  //       let ques_txt = (references.ques_txt).replace('___', '<fib type=\"int\" name=\"AA\"/>');\n  //     text = `<p>${ques_txt}</p><group>`;\n  //    }\n  //    if(references.ques_type===\"mcq\"){\n  //    let options = (references.ans_txt).split(\"\\n\");\n  // let optionsWrapper = '';\n  // let c = 0, sol='';\n  // for(let x=0; x<options.length; x++){\n  // let k = options[x].split('##');\n  // let opt = k[1]==1? \"AA\" : \"c\"+c\n  // optionsWrapper += '<choice name=\"'+opt+'\">'+k[0]+'</choice>';\n  // ++c;\n  // }\n  // // if(references.ques_img!==''){\n  // //        let imgData = (references.ques_img).split(\"##\");\n  // //        let src = (imgData[0]).trim(),\n  // //            width = (imgData[1]).trim(),\n  // //            height = (imgData[2]).trim(),\n  // //            alt = (imgData[3]).trim();\n  // //            imgData = `<img src=${src} width=${width} height=${height} alt=${alt}/>`;\n  // //            text = `<group><p>${references.ques_txt}</p><p>${imgData}</p>${optionsWrapper}`;\n  // //       }else\n  // //    \ttext = `<group><p>${references.ques_txt}</p>${optionsWrapper}`;\n  //     }\n  // if(references.ques_img!=='' && references.ques_type!==\"mcq\"){\n  //    let imgData = (references.ques_img).split(\"##\");\n  //       console.log(imgData)\n  //    let src = (imgData[0]).replace(\"\\n\", \"\").trim(),\n  //        width = (imgData[1]).replace(\"\\n\", \"\").trim(),\n  //        height = (imgData[2]).replace(\"\\n\", \"\").trim();\n  //       imgData = `<img src=${src} width=${width} height=${height} />`;\n  //       text += imgData;\n  // }\n\n  var paramsList = '';\n\n  if (references.paramsArr.length > 0) {\n    paramsList += \"<params>\";\n    var _iteratorNormalCompletion6 = true;\n    var _didIteratorError6 = false;\n    var _iteratorError6 = undefined;\n\n    try {\n      for (var _iterator6 = references.paramsArr[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {\n        var _x = _step6.value;\n        paramsList += \"<param name=\\\"\".concat(_x.key, \"\\\" type=\\\"\").concat(_x.type, \"\\\"/>\"); // params.push({\n        //   name: 'param',\n        //   attrs: {\n        //    name: x.key,\n        //    type: x.type\n        //   }\n        // })\n      }\n    } catch (err) {\n      _didIteratorError6 = true;\n      _iteratorError6 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion6 && _iterator6.return != null) {\n          _iterator6.return();\n        }\n      } finally {\n        if (_didIteratorError6) {\n          throw _iteratorError6;\n        }\n      }\n    }\n\n    if (references.conditions.length > 0) {\n      paramsList += genrateConstrains(references);\n    }\n\n    paramsList += \"</params>\";\n  }\n\n  return \"<problem_tmpl name=\\\"\".concat(references.prob_tmp_name, \"\\\" width=\\\"400\\\">\").concat(paramsList).concat(text).concat(solutionTemplate(references), \"</problem_tmpl>\"); // return {\n  //             name : `problem_tmpl`,\n  //             attrs: {\n  //                    'name': references.prob_tmp_name,\n  //                     width: '400'\n  //                },\n  //             text: text,\n  //             children:[\n  //                   {\n  //                   name:'params',children : params\n  //                   },\n  //                   {\n  //                   name:'solutions',\n  //                   text: solutionTemplate(references)\n  //                   }\n  //             ]\n  //       }\n}\n\nfunction checkBoxing(references) {\n  var A = references['boxing'][0],\n      B = references['boxing'][1],\n      randonInt = Math.floor(Math.random() * 100);\n  return \"<group><boxing name=\\\"BOX_\".concat(randonInt, \"\\\" count=\\\"A*B\\\" limit=\\\"Math.max(A-1,3)\\\">$P$</boxing><solutions><solution><cond><boxing_ref name=\\\"BOX_\").concat(randonInt, \"\\\" field=\\\"group\\\"/> == $A$</cond><cond><boxing_ref name=\\\"BOX_\").concat(randonInt, \"\\\" field=\\\"size\\\"/> == $B$</cond></solution></solutions></group>\");\n}\n\nfunction multipleChoiseSolutionTemplate(references) {\n  // let options = (references.ans_txt).split(\"\\n\");\n  // let optionsWrapper = '';\n  // let c = 0, sol='';\n  // for(let x=0; x<options.length; x++){\n  // let k = options[x].split('##');\n  // let opt = k[1]==1? \"AA\" : \"c\"+c\n  // optionsWrapper += '<cond><choice_ref name=\"'+opt+'\"/>== '+k[1]+'</cond>';\n  // ++c;\n  // }\n  var count = references.mcq_choises.length;\n  var mcqChioseCount = 1;\n  var choises = '';\n  var _iteratorNormalCompletion7 = true;\n  var _didIteratorError7 = false;\n  var _iteratorError7 = undefined;\n\n  try {\n    for (var _iterator7 = references.mcq_choises[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {\n      var x = _step7.value;\n      choises += \"<choice name=\\\"C\".concat(mcqChioseCount, \"\\\">\").concat(x, \"</choice>\");\n      ++mcqChioseCount;\n    }\n  } catch (err) {\n    _didIteratorError7 = true;\n    _iteratorError7 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion7 && _iterator7.return != null) {\n        _iterator7.return();\n      }\n    } finally {\n      if (_didIteratorError7) {\n        throw _iteratorError7;\n      }\n    }\n  }\n\n  var choiseAnswer = references.mcq_answer;\n\n  if (references.mcq_answer && references.mcq_answer.match('Choice')) {\n    choiseAnswer = references.mcq_answer.split(' ')[1];\n  }\n\n  var optionsWrapper = \"<repeat val=\\\"\".concat(count, \"\\\" index=\\\"i\\\"><cond><choice_ref name=\\\"C$i+1$\\\"/>==$(i)==(\").concat(parseInt(choiseAnswer) - 1, \")$</cond></repeat>\");\n  return \"<group>\".concat(choises, \"<solutions><solution>\").concat(optionsWrapper, \"</solution></solutions></group>\");\n}\n\nfunction fibSolutionTemplate(references) {\n  var count = 1;\n  var ans_txt = references.ans_txt;\n  var _iteratorNormalCompletion8 = true;\n  var _didIteratorError8 = false;\n  var _iteratorError8 = undefined;\n\n  try {\n    for (var _iterator8 = references.fib_conditions[0][Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {\n      var x = _step8.value;\n      ans_txt = ans_txt.replace('<FIB_' + count + '>', x);\n      ++count;\n    } //CHECK ARRAY \n\n  } catch (err) {\n    _didIteratorError8 = true;\n    _iteratorError8 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion8 && _iterator8.return != null) {\n        _iterator8.return();\n      }\n    } finally {\n      if (_didIteratorError8) {\n        throw _iteratorError8;\n      }\n    }\n  }\n\n  if (references['array'].length > 0) {\n    return arraySolutionTempalte(references);\n  }\n\n  return \"<group>\".concat(ans_txt, \"<solutions><solution>\").concat(references.fib_conditions[1], \"</solution></solutions></group>\");\n}\n\nfunction arraySolutionTempalte(references) {\n  var randonInt = Math.floor(Math.random() * 100),\n      array = \"<array name=\\\"ARY\".concat(randonInt, \"\\\" row=\\\"A\\\" column=\\\"B\\\" symbol=\\\"\").concat(references.symbol, \"\\\"/>\"),\n      solution = references.solution;\n  var fibSolution = \"<solution><cond>\".concat(solution, \" == $A*B$</cond><cond><array_ref name=\\\"ARY\").concat(randonInt, \"\\\" field=\\\"row\\\"/>== $A$</cond><cond><array_ref name=\\\"ARY\").concat(randonInt, \"\\\" field=\\\"column\\\"/>== $B$</cond></solution>\");\n  fibSolution += \"<solution><cond>\".concat(solution, \" == $A*B$</cond><cond><array_ref name=\\\"ARY\").concat(randonInt, \"\\\" field=\\\"row\\\"/>== $B$</cond><cond><array_ref name=\\\"ARY\").concat(randonInt, \"\\\" field=\\\"column\\\"/>== $A$</cond></solution>\");\n  return \"<group>\".concat(references.ans_txt).concat(array, \"<solutions>\").concat(fibSolution, \"</solutions></group>\");\n}\n\nfunction boxSolutionTemplate(references) {\n  var colGrid = \"<grid columns=\\\"50% 50%\\\" gap=\\\"2px 20px\\\">\";\n  var fibCounter = 1;\n\n  for (var x = 0; x < references.slotLArray.length; x++) {\n    var a = references.slotLArray[x];\n    var b = references.slotRArray[x];\n\n    if (a.match('<FIB_')) {\n      a = a.replace('<FIB_' + fibCounter + '>', \"<fib type=\\\"int\\\" name=\\\"fib\".concat(fibCounter, \"\\\"/>\"));\n      ++fibCounter;\n    }\n\n    if (b.match('<FIB_')) {\n      b = b.replace('<FIB_' + fibCounter + '>', \"<fib type=\\\"int\\\" name=\\\"fib\".concat(fibCounter, \"\\\"/>\"));\n      ++fibCounter;\n      ;\n    }\n\n    colGrid += \"<cell><slot name=\\\"slot1_\".concat(x + 1, \"\\\">\").concat(a, \"</slot></cell><cell><slot name=\\\"slot2_\").concat(x + 1, \"\\\">\").concat(b, \"</slot></cell>\");\n  }\n\n  colGrid += \"</grid>\";\n  var solutionsRefers = \"<solution>\";\n\n  for (var y = 0; y < references.slotLArraySolution.length; y++) {\n    var _a = references.slotLArraySolution[y][references.slotLArraySolution[y].length - 2];\n    solutionsRefers += \"<cond><slot_ref name=\\\"slot1_\".concat(y + 1, \"\\\"/>=={\\\"slot2_\").concat(parseInt(_a) + 1, \"\\\"}</cond>\");\n  }\n\n  solutionsRefers += \"</solution>\";\n  return \"<group>\".concat(colGrid, \"<solutions>\").concat(solutionsRefers, \"<solution>\").concat(references.fib_conditions[1], \"</solution></solutions></group>\");\n}\n\nfunction awsSolutionTemplate(references) {\n  var randonInt = Math.floor(Math.random() * 100);\n  references.array_row = references['paramsArr'][0]['value'];\n  references.array_column = references['paramsArr'][1]['value'];\n  var colGrid = \"<boxing_array name=\\\"ba1\\\" count=\\\"\".concat(references.count, \"\\\" limit=\\\"\").concat(references.limit, \"\\\">$P$</boxing_array>\");\n  var totalElements = parseInt(references.array_row) * parseInt(references.array_column);\n  var solutionsRefers = \"<solution><boxing_array_ref name=\\u201Dba1\\u201D />.row==\".concat(references.array_row);\n  solutionsRefers += \"&& <boxing_array_ref name=\\u201Dba1\\u201D />.column==\".concat(references.array_column);\n  solutionsRefers += \"<boxing_array_ref name=\\u201Dba1\\u201D />.row * <boxing_array_ref name=\\u201Dba1\\u201D />.column==\".concat(totalElements, \"</solution>\");\n  return \"<group>\".concat(colGrid, \"<solutions>\").concat(solutionsRefers, \"</solutions></group>\");\n}\n\nfunction normalSolutionTemplate() {\n  return \"<solution></solution>\";\n}\n\nfunction worksheetRefTempalte(references) {\n  return {\n    name: 'worksheet_ref',\n    attrs: {\n      'name': references.work_tmp_name\n    }\n  };\n}\n\nfunction tutelageRefTempalte(references) {\n  return \"<tutelage_ref name=\\\"T1\\\"><bind name=\\\"A\\\"  val=\\\"A\\\"/><bind name=\\\"B\\\"  val=\\\"B\\\"/><bind name=\\\"AA\\\" ><fib_ref name=\\\"fib1\\\"/></bind></tutelage_ref>\";\n}\n\napp.post('/', function (req, res) {\n  var wrksheetName = req.body.work_tmp_name.trim();\n  var newwrksheetName = req.body.new_work_tmp_name ? req.body.new_work_tmp_name.trim() : '';\n\n  if (newwrksheetName.length > 0) {\n    req.body.work_tmp_name = newwrksheetName;\n  }\n\n  var workSheets = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_6___default.a.readFileSync('public/xmls/worksheets.json'));\n\n  if (workSheets[wrksheetName]) {\n    var problemTemp = problemTemplate(req.body),\n        preWrkTemplate = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_6___default.a.readFileSync('public/xmls/' + wrksheetName + '.txt')); //ADD PROBLEM TO TEMPLATE \n\n    preWrkTemplate.unshift(problemTemp); //ADD PROBLEM REF TO TEMPLATE\n\n    for (var x = 0; x < preWrkTemplate.length; x++) {\n      if (preWrkTemplate[x]['name'] == 'worksheet_tmpl') {\n        preWrkTemplate[x]['children'].unshift(problemRefTemplate(req.body));\n      }\n    } //STORE NEW TEMPALTE \n\n\n    fs__WEBPACK_IMPORTED_MODULE_6___default.a.writeFileSync('public/xmls/' + wrksheetName + '.txt', JSON.stringify(preWrkTemplate));\n    var d = jsontoxml__WEBPACK_IMPORTED_MODULE_7___default()(preWrkTemplate);\n    res.send(xml_formatter__WEBPACK_IMPORTED_MODULE_8___default()(\"<xml>\".concat(d, \"</xml>\")));\n  } else {\n    var data = [tutelageTempalte(req.body), problemTemplate(req.body), tutelageRefTempalte(), worksheetTempalte(req.body), worksheetRefTempalte(req.body)];\n    var xml = jsontoxml__WEBPACK_IMPORTED_MODULE_7___default()(data);\n    workSheets[newwrksheetName] = newwrksheetName;\n    fs__WEBPACK_IMPORTED_MODULE_6___default.a.writeFileSync('public/xmls/worksheets.json', JSON.stringify(workSheets));\n    fs__WEBPACK_IMPORTED_MODULE_6___default.a.writeFileSync('public/xmls/' + newwrksheetName + '.txt', JSON.stringify(data));\n    res.send(xml_formatter__WEBPACK_IMPORTED_MODULE_8___default()(\"<xml>\".concat(xml, \"</xml>\")));\n  }\n});\n\nfunction genrateConstrains(references) {\n  var conditions = \"<constraints>\";\n  var _iteratorNormalCompletion9 = true;\n  var _didIteratorError9 = false;\n  var _iteratorError9 = undefined;\n\n  try {\n    for (var _iterator9 = references.conditions[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {\n      var x = _step9.value;\n      var encodedStr = x.replace(/[\\u00A0-\\u9999<>\\&]/gim, function (i) {\n        return '&#' + i.charCodeAt(0) + ';';\n      });\n      conditions += \"<cond>\".concat(encodedStr.toString(), \"</cond>\");\n    }\n  } catch (err) {\n    _didIteratorError9 = true;\n    _iteratorError9 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion9 && _iterator9.return != null) {\n        _iterator9.return();\n      }\n    } finally {\n      if (_didIteratorError9) {\n        throw _iteratorError9;\n      }\n    }\n  }\n\n  conditions += \"</constraints>\";\n  return conditions;\n}\n\nvar probRefsCollectionsStack = '';\n\nfunction uploadXLSX(workbook, inputfiletoread) {\n  //    var workbook = XLSX.readFile(`public/xmls/${inputfiletoread}`);\n  // var sheet_name_list = workbook.SheetNames;\n  var xlsxJSON = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.utils.sheet_to_json(workbook.Sheets[inputfiletoread], {\n    defVal: \"\"\n  });\n  var variableChecker = 0;\n  var questionObj = {};\n  var arrayOfTemplateIdsCols = [];\n  questionObj['paramsArr'] = [];\n  questionObj['prob_tmp_name'] = 'zzzzzz';\n  questionObj['ques_txt'] = '';\n  questionObj['ans_txt'] = '';\n  questionObj['fib_conditions'] = [];\n  questionObj['conditions'] = [];\n  questionObj['boxing'] = [];\n  questionObj['array'] = [];\n  var fibCondition = [];\n  var fibConditionRef = '';\n  questionObj['slotLArray'] = [];\n  questionObj['slotRArray'] = [];\n  questionObj['slotLArraySolution'] = []; // console.log(xlsxJSON)\n  //MCQ\n\n  var mcqChioseCount = 1;\n  questionObj['mcq_choises'] = [];\n  var _iteratorNormalCompletion10 = true;\n  var _didIteratorError10 = false;\n  var _iteratorError10 = undefined;\n\n  try {\n    for (var _iterator10 = xlsxJSON[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {\n      var arrEle = _step10.value;\n\n      if (arrEle.col1 == 'Tutor ID') {\n        questionObj['work_tmp_name'] = arrEle.col2;\n        variableChecker = 1;\n      } else if (arrEle.col1 == 'Conditions' || arrEle.col1 == 'Condition') {\n        variableChecker = 0;\n      }\n\n      if (arrEle.col1 == 'Problem ID') {\n        if (arrEle.col2 !== undefined) questionObj['prob_tmp_name'] = arrEle.col2;\n      }\n\n      if (arrEle.col1 == 'Conditions' || arrEle.col1 == 'Condition') {\n        if (arrEle.col2 !== undefined) questionObj['conditions'].push(arrEle.col2);\n      }\n\n      if (arrEle.col1 == 'Question') {\n        if (arrEle.col2 !== undefined) {\n          if (/(https?:\\/\\/.*\\.(?:png|jpg|svg))/.test(arrEle.col2)) {\n            questionObj['ques_txt'] += \"<p><img src=\\\"\".concat(arrEle.col2, \"\\\" width=\\\"100\\\" alt=\\\"\").concat(arrEle.col3, \"\\\"/></p>\");\n          } else questionObj['ques_txt'] += \"<p>\".concat(arrEle.col2, \"</p>\");\n        }\n      }\n\n      if (arrEle.col1 == 'QuesType') {\n        if (arrEle.col2 !== undefined) {\n          questionObj['ques_type'] = arrEle.col2;\n        }\n      }\n\n      if (arrEle.col1 == 'Answer stem') {\n        if (arrEle.col2 !== undefined) {\n          if (/(https?:\\/\\/.*\\.(?:png|jpg|svg))/.test(arrEle.col2)) {\n            questionObj['ans_txt'] += \"<p><img src=\\\"\".concat(arrEle.col2, \"\\\" width=\\\"100\\\" alt=\\\"\").concat(arrEle.col3, \"\\\"/></p>\");\n          } else questionObj['ans_txt'] += \"<p>\".concat(arrEle.col2, \"</p>\");\n        }\n      }\n\n      if (arrEle.col1 && arrEle.col1.match('Choice') && arrEle.col1 !== 'Choice Answer') {\n        if (arrEle.col2 !== undefined) {\n          questionObj['mcq_choises'].push(arrEle.col2);\n        }\n      }\n\n      if (arrEle.col1 == 'Choice Answer') {\n        if (arrEle.col2 !== '' || arrEle.col2 !== undefined) questionObj['mcq_answer'] = arrEle.col2;\n      }\n\n      if (arrEle.col1 == 'Boxing Group') {\n        questionObj['boxing'][0] = arrEle.col2;\n      }\n\n      ;\n\n      if (arrEle.col1 && /^Slot.*R$/i.test(arrEle.col1)) {\n        if (arrEle.col2 !== undefined) questionObj['slotRArray'].push(arrEle.col2);\n      }\n\n      if (arrEle.col1 && /^Slot.*L$/i.test(arrEle.col1)) {\n        if (arrEle.col2 !== undefined) questionObj['slotLArray'].push(arrEle.col2);\n      }\n\n      if (arrEle.col1 && /^Slot.*Answer$/i.test(arrEle.col1)) {\n        if (arrEle.col2 !== undefined) questionObj['slotLArraySolution'].push(arrEle.col2);\n      }\n\n      if (arrEle.col1 == 'Boxing Size') {\n        questionObj['boxing'][1] = arrEle.col2;\n      }\n\n      if (arrEle.col1 == 'Array Row') {\n        questionObj['array'][0] = arrEle.col2;\n      }\n\n      if (arrEle.col1 == 'Array Column') {\n        questionObj['array'][1] = arrEle.col2;\n      }\n\n      if (arrEle.col1 == 'Solution') {\n        questionObj['solution'] = arrEle.col2;\n      }\n\n      if (arrEle.col1 == 'Symbol') {\n        questionObj['symbol'] = arrEle.col2;\n      } //aws\n\n\n      if (arrEle.col1 && arrEle.col1 == 'Limit') {\n        if (arrEle.col2 !== undefined) {\n          questionObj['limit'] = arrEle.col2;\n        }\n      }\n\n      if (arrEle.col1 && arrEle.col1 == 'Count') {\n        if (arrEle.col2 !== undefined) {\n          questionObj['count'] = arrEle.col2;\n        }\n      }\n\n      if (arrEle.col1 && arrEle.col1 == 'Array Row') {\n        if (arrEle.col2 !== undefined) {\n          questionObj['array_row'] = arrEle.col2;\n        }\n      }\n\n      if (arrEle.col1 && arrEle.col1 == 'Array Column') {\n        if (arrEle.col2 !== undefined) {\n          questionObj['array_column'] = arrEle.col2;\n        }\n      }\n\n      if (arrEle.col1 && arrEle.col1.match('FIB_')) {\n        if (arrEle.col2 !== undefined) {\n          var count = arrEle.col1.split('_')[1];\n          fibConditionRef += \"<cond><fib_ref name=\\\"fib\".concat(count, \"\\\"/>==\").concat(arrEle.col2, \"</cond>\");\n          fibCondition.push(\"<fib type=\\\"int\\\" name=\\\"fib\".concat(count, \"\\\"/>\"));\n        }\n      }\n\n      if (variableChecker == 1 && arrEle.col1 != 'Tutor ID' && arrEle.col1 != 'Variable' && arrEle.col2 !== undefined) {\n        questionObj['paramsArr'].push({\n          key: arrEle.col1,\n          value: arrEle.col2,\n          type: arrEle.col3\n        });\n      }\n    }\n  } catch (err) {\n    _didIteratorError10 = true;\n    _iteratorError10 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion10 && _iterator10.return != null) {\n        _iterator10.return();\n      }\n    } finally {\n      if (_didIteratorError10) {\n        throw _iteratorError10;\n      }\n    }\n  }\n\n  questionObj['fib_conditions'].push(fibCondition);\n  questionObj['fib_conditions'].push(fibConditionRef);\n  var data = [// tutelageTempalte(questionObj),\n  problemTemplate(questionObj)];\n  var xml = jsontoxml__WEBPACK_IMPORTED_MODULE_7___default()(data);\n  probRefsCollectionsStack += worksheetTempalte(questionObj);\n  return xml;\n}\n\napp.post('/upload-xlsx', function (req, res) {\n  new formidable__WEBPACK_IMPORTED_MODULE_11___default.a.IncomingForm().parse(req).on('file', function (name, file) {\n    var tempPptFileName = uuid_v4__WEBPACK_IMPORTED_MODULE_12___default()();\n    console.log(tempPptFileName);\n    var xml = ''; // XLSX.writeFile(file.path+'.xlsx', 'public/xmls/'+tempPptFileName);\n    //let workbook = XLSX.readFile(`public/xmls/${file.name}`);\n\n    var workbook = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(\"\".concat(file.path));\n    var sheet_name_list = workbook.SheetNames;\n    probRefsCollectionsStack = '';\n    var _iteratorNormalCompletion11 = true;\n    var _didIteratorError11 = false;\n    var _iteratorError11 = undefined;\n\n    try {\n      for (var _iterator11 = sheet_name_list[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {\n        var x = _step11.value;\n        xml += uploadXLSX(workbook, x);\n      }\n    } catch (err) {\n      _didIteratorError11 = true;\n      _iteratorError11 = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion11 && _iterator11.return != null) {\n          _iterator11.return();\n        }\n      } finally {\n        if (_didIteratorError11) {\n          throw _iteratorError11;\n        }\n      }\n    }\n\n    var workSheetCommnTemplate = \"<worksheet_tmpl name=\\\"T1_1_WSM02\\\">\".concat(probRefsCollectionsStack, \"</worksheet_tmpl><worksheet_ref name=\\\"T1_1_WSM02\\\"/>\"); // const xml = uploadXLSX(workbook, sheet_name_list[0]);\n    //res.send(XMLFormatter(`<xml>${xml}${workSheetCommnTemplate}</xml>`))\n\n    res.send(\"\".concat(xml).concat(workSheetCommnTemplate));\n  }).on('field', function (name, field) {\n    console.log(field);\n    console.log('Got a field:', field);\n  }).on('error', function (err) {\n    next(err);\n  }).on('end', function () {\n    res.end();\n  });\n});\napp.listen(_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].port);\n});\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(tutelageTempalte, \"tutelageTempalte\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(worksheetTempalte, \"worksheetTempalte\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(problemRefTemplate, \"problemRefTemplate\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(solutionTemplate, \"solutionTemplate\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(problemTemplate, \"problemTemplate\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(checkBoxing, \"checkBoxing\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(multipleChoiseSolutionTemplate, \"multipleChoiseSolutionTemplate\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(fibSolutionTemplate, \"fibSolutionTemplate\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(arraySolutionTempalte, \"arraySolutionTempalte\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(boxSolutionTemplate, \"boxSolutionTemplate\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(awsSolutionTemplate, \"awsSolutionTemplate\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(normalSolutionTemplate, \"normalSolutionTemplate\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(worksheetRefTempalte, \"worksheetRefTempalte\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(tutelageRefTempalte, \"tutelageRefTempalte\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(genrateConstrains, \"genrateConstrains\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(probRefsCollectionsStack, \"probRefsCollectionsStack\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n  reactHotLoader.register(uploadXLSX, \"uploadXLSX\", \"/Users/himanshusavita/Desktop/google_tutor-master/server/server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default() {\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n            <title>google_tutor</title>\\n            <meta name=\\\"viewport\\\"  content=\\\"width=device-width initial-scale=1\\\"/>\\n            <link rel=\\\"stylesheet\\\" href=\\\"https://s3.amazonaws.com/assessts-book/css/impactwebfont.css\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto\\\" rel=\\\"stylesheet\\\">\\n            <link rel=\\\"stylesheet\\\" href=\\\"/css/web-icons.css\\\">\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\"></div>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n          <script type=\\\"text/javascript\\\" src=\\\"/js/vkbeauty.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/himanshusavita/Desktop/google_tutor-master/template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /.css$/,\n      use: [{\n        loader: 'style-loader'\n      }, {\n        loader: 'css-loader'\n      }]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/himanshusavita/Desktop/google_tutor-master/webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"/Users/himanshusavita/Desktop/google_tutor-master/webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! /Users/himanshusavita/Desktop/google_tutor-master/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "jsontoxml":
/*!****************************!*\
  !*** external "jsontoxml" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsontoxml\");\n\n//# sourceURL=webpack:///external_%22jsontoxml%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");\n\n//# sourceURL=webpack:///external_%22querystring%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");\n\n//# sourceURL=webpack:///external_%22uuid/v4%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "xlsx":
/*!***********************!*\
  !*** external "xlsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xlsx\");\n\n//# sourceURL=webpack:///external_%22xlsx%22?");

/***/ }),

/***/ "xml-formatter":
/*!********************************!*\
  !*** external "xml-formatter" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xml-formatter\");\n\n//# sourceURL=webpack:///external_%22xml-formatter%22?");

/***/ })

/******/ });