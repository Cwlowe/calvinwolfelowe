"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxLogger = require("redux-logger");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _photography_reducer = _interopRequireDefault(require("./photography_reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import reducers
var reducer = (0, _redux.combineReducers)({
  state: _photography_reducer["default"]
});
var middleware = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk["default"], (0, _reduxLogger.createLogger)({
  collapsed: true
})));
var store = (0, _redux.createStore)(reducer, middleware);
var _default = store;
exports["default"] = _default;