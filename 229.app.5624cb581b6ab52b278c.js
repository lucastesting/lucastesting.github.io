webpackJsonp([229],[
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
/* 22 */
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
    "title": "Last minute bag choices",
    "date": "2013-05-07 12:35",
    "oldBlogUrl": "/post/49851162795/last-minute-bag-choices",
    "tags": ["Pre Trip", "Packing", "Bags"],
    "travel_dates": "",
    "formattedDate": "May 7th 2013, 12:35:00 pm",
    "canonicalPath": "/2013/05/07/last-minute-bag-choices"
  };

  var intro = exports.intro = _react2.default.createElement(
    "div",
    { className: "postIntro" },
    _react2.default.createElement(
      "p",
      null,
      "So I bought the 40L bag I'd been eyeing off last week. After doing a few trial packs with it, I've decided that I cant fit everything I want in it well enough, so tomorrow I'm taking it back to see what my other options are."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I can just about fit everything in the 40L bag, but it's stuffed so tight that I have concerns about my laptop getting cracked if the bag were dropped, or something was dropped on it; and it doesnt give me any excess room whatsoever."
    )
  );

  var body = exports.body = _react2.default.createElement(
    "div",
    { className: "postBody" },
    _react2.default.createElement(
      "p",
      null,
      "So I bought the 40L bag I'd been eyeing off last week. After doing a few trial packs with it, I've decided that I cant fit everything I want in it well enough, so tomorrow I'm taking it back to see what my other options are."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I can just about fit everything in the 40L bag, but it's stuffed so tight that I have concerns about my laptop getting cracked if the bag were dropped, or something was dropped on it; and it doesnt give me any excess room whatsoever."
    ),
    _react2.default.createElement(
      "p",
      null,
      "If I pull out my laptop & camera bag, it feels like a better fit (still without a lot of room to spare, but I'm not scared stuff is going to get broken) so I think I'm giving up on keeping the possibility of doing carry-on only flights and resigning myself to having a separate daypack. With the laptop no longer in the 40L bag, it seems like a waste of space to have the separate front pocket & laptop pocket, hence why I'm looking at swapping the 40L bag too instead of just supplementing it with a proper day pack."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Options I'm considering now (looking mostly within the same brand) are:"
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Osprey Porter 46 + Some decent day pack"
    ),
    _react2.default.createElement(
      "p",
      null,
      "15% larger, all in a single compartment rather than spit in two. This one still claims to be within maximum carry-on size allowed on most airlines. Not sure about which day pack to pair this with."
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Osprey Farpoint 55"
    ),
    _react2.default.createElement(
      "p",
      null,
      "I've read this is basically the bag I've got, except with a 15L daypack that attaches on the back making up the extra 15L. I'd want to have a look and see that it's not wasting space with another laptop pocket in the main bag, since that'll be in the day pack."
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Osprey Waypoint 65"
    ),
    _react2.default.createElement(
      "p",
      null,
      "50L Pack + 15L daypack. I wonder if as long as I'm resigning myself to always having checked luggage, maybe I should just make the jump to a pack where I'll have quite a bit of space. Not so much so I can fill it up from the get go, but so I can maybe carry some useless stuff until I admit it's useless, and so I have some extra room to pick up junk along the way?"
    ),
    _react2.default.createElement(
      "p",
      null,
      "I dont really know what path I want to go down at the moment; I've been reading so many people who say \"Take less clothes, you'll never regret it\" but clothing wise it already feels like I'm going pretty light, and it's all the other stuff that's taking up lots of space. I'm definitely not willing to consider leaving the 11\" Macbook Air or the camera stuff. The kindle seems pretty necessary. The spiky massage ball for my hip is not negotiable. I'm already down to a single set of poi and 4 juggling balls, so short of giving up one of those hobbies that are quite likely also good conversation starters there's nothing there to leave."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I guess I have to admit that I'm not willing to make the sacrifices needed to travel with only one compact bag. Maybe this is one of those mistakes you have to make for yourself, or maybe that level of minimilist travel just isn't for me."
    )
  );
  var blogPages = [];

  exports.default = function () {
    return _react2.default.createElement(_BlogPost2.default, { metadata: metadata, body: body });
  };

/***/ }
]);