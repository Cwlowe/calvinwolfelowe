"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = workoutReducer;
exports.fetchPhotos = void 0;

var _google_storage = require("../../Api/google_storage");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_PHOTOS = 'SET_PHOTOS'; //Initial State

var initialState = {}; //Action Creators

var setWorkouts = function setWorkouts(photos) {
  return {
    type: SET_PHOTOS,
    photos: photos
  };
};

var fetchPhotos = function fetchPhotos() {
  return function _callee(dispatch) {
    var photos;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              photos = (0, _google_storage.get_Storage_image)();
              dispatch(setWorkouts(photos));
            } catch (err) {
              console.log(err);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  };
}; //Reducer


exports.fetchPhotos = fetchPhotos;

function workoutReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_PHOTOS:
      return _objectSpread({}, state, {
        photos: action.photos
      });

    default:
      return state;
  }
}