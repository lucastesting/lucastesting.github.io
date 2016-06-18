webpackJsonp([232],{

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = function () {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h1",
        null,
        "Travel Map"
      ),
      _react2.default.createElement(
        "div",
        {
          style: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px"
          }
        },
        _react2.default.createElement("iframe", {
          src: "https://www.google.com/maps/d/embed?mid=za2R0_zM9Xe8.kYmZGpEx9bGA",
          style: {
            height: "50vh",
            width: "95%",
            border: "none"
          }
        })
      )
    );
  };

/***/ }

});