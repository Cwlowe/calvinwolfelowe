"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = workoutReducer;
exports.fetchPhoto = exports.fetchPhotos = void 0;

var _google_storage = require("../../Api/google_storage");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_PHOTOS = 'SET_PHOTOS';
var GET_PHOTO = 'GET_PHOTO'; //Initial State

var initialState = {}; //Action Creators

var setPhotos = function setPhotos(photos) {
  return {
    type: SET_PHOTOS,
    photos: photos
  };
};

var getPhoto = function getPhoto(photoURL) {
  return {
    type: GET_PHOTO,
    photoURL: photoURL
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
              photos = (0, _google_storage.get_Storage_images)();
              dispatch(setPhotos(photos));
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
};

exports.fetchPhotos = fetchPhotos;

var fetchPhoto = function fetchPhoto(location) {
  return function _callee2(dispatch) {
    var imageurl;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _google_storage.get_Storage_image)(location));

          case 3:
            imageurl = _context2.sent;
            dispatch(getPhoto(imageurl));
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
}; //Reducer


exports.fetchPhoto = fetchPhoto;

function workoutReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_PHOTOS:
      return _objectSpread({}, state, {
        photos: action.photos
      });

    case GET_PHOTO:
      return _objectSpread({}, state, {
        photoURL: action.photoURL
      });

    default:
      return state;
  }
}