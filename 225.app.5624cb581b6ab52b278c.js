webpackJsonp([225],{

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

/***/ 39:
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
    "title": "Travelling light... or not",
    "date": "2013-09-03 08:17",
    "oldBlogUrl": "/post/60162685055/travelling-light-or-not",
    "tags": ["Bags"],
    "travel_dates": "",
    "formattedDate": "September 3rd 2013, 8:17:00 am",
    "canonicalPath": "/2013/09/03/travelling-light-or-not"
  };

  var intro = exports.intro = _react2.default.createElement(
    "div",
    { className: "postIntro" },
    _react2.default.createElement(
      "p",
      null,
      "So I set out on this trip aiming to travel light, with just a 46 Litre backpack and a daypack, but after nearly 4 months on the road I put up the white flag."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Up until I hit Africa I managed ok, but almost always had an overflow bag clipped on to make packing a bit less of a pain day to day, but I could squeeze everything in when I needed to fly."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Doing Africa overland demanded that I buy a sleeping bag, and air mattress, which meant I could no longer squeeze just into the two bags. I tried strapping a now quite heavy overflow bag on the back of my pack, but it just mean that weight distribution was terrible and I wasn't carrying any less shit."
    )
  );

  var body = exports.body = _react2.default.createElement(
    "div",
    { className: "postBody" },
    _react2.default.createElement(
      "p",
      null,
      "So I set out on this trip aiming to travel light, with just a 46 Litre backpack and a daypack, but after nearly 4 months on the road I put up the white flag."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Up until I hit Africa I managed ok, but almost always had an overflow bag clipped on to make packing a bit less of a pain day to day, but I could squeeze everything in when I needed to fly."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Doing Africa overland demanded that I buy a sleeping bag, and air mattress, which meant I could no longer squeeze just into the two bags. I tried strapping a now quite heavy overflow bag on the back of my pack, but it just mean that weight distribution was terrible and I wasn't carrying any less shit."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I'd planned on chucking out the sleeping bag and roll-mat after Africa, but I couldn't bring myself to do it knowing that day to day packing would still be a pain in the ass without the overflow bag, and they will probably come in handy couch surfing, and so I decided it was time to buy a bigger bag."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I went on an epic search in Istanbul and found countless shitty quality hiking bags (top-loaders), and nearly gave up, before finding a Deuter distributer who had a 70+10L travel pack which can hold all my stuff without expanding it."
    ),
    _react2.default.createElement(
      "p",
      null,
      "The price I ended up paying is actually cheaper than it's listed on Amazon, which I was pretty happy with. I left my old bags with the hostel we were staying with, so hopefully the go on to help someone else out."
    ),
    _react2.default.createElement(
      "p",
      null,
      "What am I taking away from this? Travelling light is a great goal, but holidaying, and actually living out of a bag long term are two different things. If I was only going for a shorter, fixed period of time, with a predetermined list of destinations, I could probably be without a laptop, poi, juggling balls and a lot more easily fit into the smaller bag; but living on the road these aren't parts of my life I'm willing to give up for what could be quite a while."
    )
  );
  var blogPages = [];

  exports.default = function () {
    return _react2.default.createElement(_BlogPost2.default, { metadata: metadata, body: body });
  };

/***/ }

});