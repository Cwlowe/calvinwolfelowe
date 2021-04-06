"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_Storage_image = exports.get_Storage_images = void 0;

var _firebase = _interopRequireDefault(require("./firebase.js"));

require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var get_Storage_images = function get_Storage_images() {
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

exports.get_Storage_images = get_Storage_images;

var get_Storage_image = function get_Storage_image(location) {
  var storage, imageRef, image;
  return regeneratorRuntime.async(function get_Storage_image$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          storage = _firebase["default"].storage();
          imageRef = storage.ref(location);
          image = {};
          imageRef.getDownloadURL().then(function (url) {
            image = {
              url: url
            };
          })["catch"](function (error) {
            switch (error.code) {
              case 'storage/object-not-found':
                image = {
                  url: undefined,
                  message: "Item not found",
                  error: error.code
                };
                break;

              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                image = {
                  url: undefined,
                  message: "No permission",
                  error: error.code
                };
                break;

              case 'storage/canceled':
                image = {
                  url: undefined,
                  message: "Not uploaded",
                  error: error.code
                };
                break;

              case 'storage/unknown':
                image = {
                  url: undefined,
                  message: "Unkown error",
                  error: error.code
                };
                break;

              default:
                image = {
                  url: undefined,
                  message: error.code
                };
                break;
            }
          });
          return _context.abrupt("return", new Promise(function (resolve) {
            setTimeout(function () {
              resolve(image);
            }, 1000);
          }));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.get_Storage_image = get_Storage_image;