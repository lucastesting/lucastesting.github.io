webpackJsonp([231],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _TagCloud = __webpack_require__(16);

  var _TagCloud2 = _interopRequireDefault(_TagCloud);

  var _DateTime = __webpack_require__(6);

  var _DateTime2 = _interopRequireDefault(_DateTime);

  var _DisqusComments = __webpack_require__(8);

  var _DisqusComments2 = _interopRequireDefault(_DisqusComments);

  __webpack_require__(10);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var BlogPost = function BlogPost(props) {
    var body = props.body;
    var _props$metadata = props.metadata;
    var title = _props$metadata.title;
    var formattedDate = _props$metadata.formattedDate;
    var tags = _props$metadata.tags;
    var canonicalPath = _props$metadata.canonicalPath;
    var oldBlogUrl = _props$metadata.oldBlogUrl;

    return _react2.default.createElement(
      "div",
      { className: "blogPost__content" },
      _react2.default.createElement(
        "h1",
        { className: "blogPost__title" },
        title
      ),
      _react2.default.createElement(_DateTime2.default, { date: formattedDate }),
      _react2.default.createElement(
        "div",
        { className: "blogPost__body" },
        body
      ),
      _react2.default.createElement(_TagCloud2.default, { className: "blogPost__tags", tags: tags }),
      _react2.default.createElement(_DisqusComments2.default, { disqusUrl: "http://www.lucasthenomad.com" + (oldBlogUrl || canonicalPath) })
    );
  };
  BlogPost.propTypes = {
    body: _react.PropTypes.node,
    metadata: _react.PropTypes.shape({
      title: _react.PropTypes.string,
      formattedDate: _react.PropTypes.string,
      tags: _react.PropTypes.arrayOf(_react.PropTypes.string)
    })
  };

  exports.default = BlogPost;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(11);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var DateTime = function DateTime(_ref) {
    var date = _ref.date;
    return _react2.default.createElement(
      "div",
      { className: "date" },
      _react2.default.createElement("i", { className: "fa fa-clock-o fa-lg fa-fw" }),
      " ",
      date
    );
  };
  DateTime.propTypes = {
    date: _react.PropTypes.string.isRequired
  };

  exports.default = DateTime;

/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _config = __webpack_require__(9);

  var _config2 = _interopRequireDefault(_config);

  __webpack_require__(12);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var DisqusComments = function DisqusComments(_ref) {
    var disqusUrl = _ref.disqusUrl;

    var disqusCode = {
      __html: "<script type=\"text/javascript\">\n         var disqus_shortname = '" + _config2.default.disqusShortName + "';\n         var disqus_url = '" + disqusUrl + "';\n         (function() {\n           var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;\n           dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';\n           (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);\n         })();\n       </script>\n      <noscript>Please enable JavaScript to view the <a href=\"http://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript>"
    };
    return _react2.default.createElement(
      "div",
      { className: "disqusComments" },
      _react2.default.createElement("div", { id: "disqus_thread" }),
      _react2.default.createElement("div", { dangerouslySetInnerHTML: disqusCode })
    );
  };
  DisqusComments.propTypes = {
    disqusUrl: _react.PropTypes.string.isRequired
  };

  exports.default = DisqusComments;

/***/ },
/* 9 */
/***/ function(module, exports) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    title: "Lucas The Nomad",
    description: "oh look, a description",
    googleAnalyticsId: "UA-XXXXX-X",
    disqusShortName: "lucasthenomad",
    perPage: 5
  };

/***/ },
/* 10 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin

/***/ },
/* 11 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin

/***/ },
/* 12 */
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.body = exports.intro = exports.metadata = undefined;

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _BlogPost = __webpack_require__(2);

  var _BlogPost2 = _interopRequireDefault(_BlogPost);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var metadata = exports.metadata = {
    "title": "Twenty years from now",
    "date": "2013-03-26 05:55",
    "oldBlogUrl": "/post/46320033660/twenty-years-from-now-you-will-be-more",
    "tags": ["Quote", "Inspiration"],
    "travel_dates": "",
    "formattedDate": "March 26th 2013, 5:55:00 am",
    "canonicalPath": "/2013/03/26/twenty-years-from-now"
  };

  var intro = exports.intro = _react2.default.createElement(
    "div",
    { className: "postIntro" },
    _react2.default.createElement(
      "div",
      { className: "quote" },
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."
    ),
    _react2.default.createElement(
      "div",
      { className: "quote-attribution" },
      "Mark Twain"
    )
  );

  var body = exports.body = _react2.default.createElement(
    "div",
    { className: "postBody" },
    _react2.default.createElement(
      "div",
      { className: "quote" },
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."
    ),
    _react2.default.createElement(
      "div",
      { className: "quote-attribution" },
      "Mark Twain"
    )
  );
  var blogPages = [];

  exports.default = function () {
    return _react2.default.createElement(_BlogPost2.default, { metadata: metadata, body: body });
  };

/***/ }
]);