webpackJsonp([228],[
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
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
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
    "title": "It's go time!",
    "date": "2013-05-12 10:35",
    "oldBlogUrl": "/post/50246508142/its-go-time",
    "tags": ["Pre Trip"],
    "travel_dates": "",
    "formattedDate": "May 12th 2013, 10:35:00 am",
    "canonicalPath": "/2013/05/12/it-s-go-time"
  };

  var intro = exports.intro = _react2.default.createElement(
    "div",
    { className: "postIntro" },
    _react2.default.createElement(
      "p",
      null,
      "My bags are packed, almost all my things are sold/donated/given away. Tomorrow morning I get up early to head to the airport, say good bye to Melbourne and fly off to Vietnam to start my trip."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I'm feeling a mixture of excitement, sadness, terror and exhaustion. It's been a busy week sorting out the last of my things and catching up with people for the last time. The past 3 days I've been doing stuff pretty much non-stop; now I finally get to sit down and not feel like there's something else I need to be doing."
    ),
    _react2.default.createElement(
      "p",
      null,
      "It's going to be different not being able to regularly see and hang out with people I've known for more than a few days. I'm hoping that with practice I get better at small talk and meeting new people, so maybe that'll be less of an issue."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I guess there's not much more I can do right now, but strap in and wait for this wild ride to start..."
    )
  );

  var body = exports.body = _react2.default.createElement(
    "div",
    { className: "postBody" },
    _react2.default.createElement(
      "p",
      null,
      "My bags are packed, almost all my things are sold/donated/given away. Tomorrow morning I get up early to head to the airport, say good bye to Melbourne and fly off to Vietnam to start my trip."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I'm feeling a mixture of excitement, sadness, terror and exhaustion. It's been a busy week sorting out the last of my things and catching up with people for the last time. The past 3 days I've been doing stuff pretty much non-stop; now I finally get to sit down and not feel like there's something else I need to be doing."
    ),
    _react2.default.createElement(
      "p",
      null,
      "It's going to be different not being able to regularly see and hang out with people I've known for more than a few days. I'm hoping that with practice I get better at small talk and meeting new people, so maybe that'll be less of an issue."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I guess there's not much more I can do right now, but strap in and wait for this wild ride to start..."
    )
  );
  var blogPages = [];

  exports.default = function () {
    return _react2.default.createElement(_BlogPost2.default, { metadata: metadata, body: body });
  };

/***/ }
]);