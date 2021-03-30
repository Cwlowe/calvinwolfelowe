"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_Storage_image = void 0;

var _firebase = _interopRequireDefault(require("./firebase.js"));

require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var get_Storage_image = function get_Storage_image() {
  var storage = _firebase["default"].storage();

  var storageRef = storage.ref('photography');
  var images = [];
  storageRef.listAll().then(function (res) {
    res.items.forEach(function (item) {
      storageRef.child(item.name).getDownloadURL().then(function (url) {
        images.push(url);
      });
    });
  })["catch"](function (err) {
    console.log(err);
  });
  return images;
};

exports.get_Storage_image = get_Storage_image;