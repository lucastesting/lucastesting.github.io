webpackJsonp([230],[
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
/* 20 */
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
    "title": "The little things that make up a life",
    "date": "2013-04-08 12:21",
    "oldBlogUrl": "/post/47452066649/the-little-things-that-make-up-a-life",
    "tags": ["Pre Trip", "Packing", "Streamlining"],
    "travel_dates": "",
    "formattedDate": "April 8th 2013, 12:21:00 pm",
    "canonicalPath": "/2013/04/08/the-little-things-that-make-up-a-life"
  };

  var intro = exports.intro = _react2.default.createElement(
    "div",
    { className: "postIntro" },
    _react2.default.createElement(
      "p",
      null,
      "The hardest part so far of packing my life into a bag and heading off for an indefinite period has been trying to get rid of the huge amount of stuff I own. A lot of the big/valuable stuff has been easy to let go of, and find buyers for, but once you remove all that stuff from your life you're left with a massive amount of \"little things\"."
    )
  );

  var body = exports.body = _react2.default.createElement(
    "div",
    { className: "postBody" },
    _react2.default.createElement(
      "p",
      null,
      "The hardest part so far of packing my life into a bag and heading off for an indefinite period has been trying to get rid of the huge amount of stuff I own. A lot of the big/valuable stuff has been easy to let go of, and find buyers for, but once you remove all that stuff from your life you're left with a massive amount of \"little things\"."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Individually, almost all of it is probably worth less an $50 an item; a lot of it is probably not even worth $10 per piece. This makes it not worth trying to sell most of it. But the sheer amount of stuff matching that description means that it's actually hard to let go of. Some of it had a story behind it, some of it is just junk, but when you've got 200-300 odds and ends it ends up being a few thousand dollars worth of stuff that you need to get rid of (no point paying to store all that crap somewhere), but you pretty much cant sell."
    ),
    _react2.default.createElement(
      "p",
      null,
      "From the masses of clothing, to the miscellaneous electronic/computer cables/parts, medical supplies, doof survival gear, books, dvds... it all basically adds up to stuff I barely use and wouldn't miss if it was gone, but accepting that it's all going to waste is a little bit difficult, and seems to be something I'm prolonging a lot longer than I should or need to.  I'm expecting that a week or two before I leave I'm going to have to have everyone I know come over, go through all my stuff and take whatever they want, otherwise I'm going to end up with a small skip worth of stuff that needs to disappear so the next housemate can move in."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I've been finding it cathartic as each thing goes and my list of worldly possessions gets shorter, but the getting rid of all the small, unimportant stuff is definitely an out of proportion weight on my mind at the moment. I guess maybe it's me being a bit of a lazy hoarder, and letting it run unchecked for too long. When I last moved house I intended to get rid of a bunch of stuff because I was moving into a smaller room, but never got around to it. In the end I waited it out until I was living in a much larger room and still failed to get rid of much stuff until now."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I'm aiming to have little enough stuff I'm taking with me that I'll be able to fit into a 40L pack. I'm hoping I can get my life outside of that bag down to maybe 1 or 2 50cm",
      _react2.default.createElement(
        "sup",
        null,
        "3"
      ),
      " boxes that I need to find homes for, but at this point that seems like quite a challenge. Wish me Luck!"
    )
  );
  var blogPages = [];

  exports.default = function () {
    return _react2.default.createElement(_BlogPost2.default, { metadata: metadata, body: body });
  };

/***/ }
]);