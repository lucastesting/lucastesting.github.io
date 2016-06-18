webpackJsonp([227],{

/***/ 2:
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

/***/ 6:
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

/***/ 8:
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

/***/ 9:
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

/***/ 10:
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin

/***/ },

/***/ 11:
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin

/***/ },

/***/ 12:
/***/ function(module, exports) {

  // removed by extract-text-webpack-plugin

/***/ },

/***/ 28:
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
    "title": "Last Day in HCMC",
    "date": "2013-05-24 15:51",
    "oldBlogUrl": "/post/51229927949/last-day-in-hcmc",
    "tags": ["Vietnam", "HCMC"],
    "travel_dates": "",
    "formattedDate": "May 24th 2013, 3:51:00 pm",
    "canonicalPath": "/2013/05/24/last-day-in-hcmc"
  };

  var intro = exports.intro = _react2.default.createElement(
    "div",
    { className: "postIntro" },
    _react2.default.createElement(
      "p",
      null,
      "For my final morning in Saigon I got up and ventured out north in search of something different for breakfast than the noodles and mystery meat I'd been having. I stopped along the way a few times to sit in tiny plastic chairs with the locals and drink iced coffee while the traffic did it's crazy thing. I ended up buying a half kilo of mangostein for breakfast with which I made a huge mess before the owner of one of the coffee stand I was sitting at came over with a knife and helped me out. Ugly fruit, but so very tasty."
    )
  );

  var body = exports.body = _react2.default.createElement(
    "div",
    { className: "postBody" },
    _react2.default.createElement(
      "p",
      null,
      "For my final morning in Saigon I got up and ventured out north in search of something different for breakfast than the noodles and mystery meat I'd been having. I stopped along the way a few times to sit in tiny plastic chairs with the locals and drink iced coffee while the traffic did it's crazy thing. I ended up buying a half kilo of mangostein for breakfast with which I made a huge mess before the owner of one of the coffee stand I was sitting at came over with a knife and helped me out. Ugly fruit, but so very tasty."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I sat in the shade at the park for a bit and had another woman solicit me for a massage and \"boom boom\". Being a single guy in Asia gets all sorts of unwanted attention. Sex tourists have made it a lot less pleasant for the rest of us."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Later while sitting in the same spot I had a guy come and tell me my thongs needed cleaning. I told him no, please don't. I dont want you to clean my shoes but he was very insistent and got down with his brush near my feet. I pulled my foot away and accidentally kneed him in the head, after which I got up and quickly crossed the street and rushed away down the alley way my hostel is in."
    ),
    _react2.default.createElement(
      "p",
      null,
      "To recover from such an incident, I stumbled into one of the legit spa/massage places and decided that I'd get my nails done, since they were pretty gross from trying to get into the mangostein and I'd never had a manicure done before. It cost a whole $2.50, which I assume is cheap for a manicure and pedicure. The ladies working there were greatly amused when I asked for it. My nails are now nicely clipped and cuticles and stuff removed, but there are 2-3 spots where they clipped too closely that have bled a little. Not sure if I should be worried about that or not :S"
    ),
    _react2.default.createElement(
      "p",
      null,
      "After that it was time to grab my bags head to the airport."
    )
  );
  var blogPages = [];

  exports.default = function () {
    return _react2.default.createElement(_BlogPost2.default, { metadata: metadata, body: body });
  };

/***/ }

});