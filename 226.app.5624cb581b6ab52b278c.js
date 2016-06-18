webpackJsonp([226],{

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

/***/ 33:
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
    "title": "Wake Up Call",
    "date": "2013-06-29 04:27",
    "oldBlogUrl": "/post/54155961141/wake-up-call",
    "tags": ["Introspection", "Inspiration"],
    "travel_dates": "",
    "formattedDate": "June 29th 2013, 4:27:00 am",
    "canonicalPath": "/2013/06/29/wake-up-call"
  };

  var intro = exports.intro = _react2.default.createElement(
    "div",
    { className: "postIntro" },
    _react2.default.createElement(
      "p",
      null,
      "On this day, one year ago today, I woke up a little bit late."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I rode to work in a bit of a hurry, and on my way got cut off by a car. Getting cut off by cars happens pretty much every day, but on this day I had new brakes that I was unfamiliar with, which were significantly more effective than my old ones. That combined with rushing to not be late, meant that braking hard got me up on just the front wheel and then sent me over the handle bars, landing hard enough on my knees that I got several fractures in my acetabulum (ie. my Hip socket/pelvis)."
    ),
    _react2.default.createElement(
      "p",
      null,
      "This moment, at five to nine in the morning on a Friday, changed my life in a number of unexpected ways. Being completely crippled and dependant on others got me seriously thinking about the things I'd like to do but had been putting off until \"the right time\", many of which are dependant on being able-bodied, and I wondered a lot about how well I would recover and how those things I'd like to do might now never happen."
    )
  );

  var body = exports.body = _react2.default.createElement(
    "div",
    { className: "postBody" },
    _react2.default.createElement(
      "p",
      null,
      "On this day, one year ago today, I woke up a little bit late."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I rode to work in a bit of a hurry, and on my way got cut off by a car. Getting cut off by cars happens pretty much every day, but on this day I had new brakes that I was unfamiliar with, which were significantly more effective than my old ones. That combined with rushing to not be late, meant that braking hard got me up on just the front wheel and then sent me over the handle bars, landing hard enough on my knees that I got several fractures in my acetabulum (ie. my Hip socket/pelvis)."
    ),
    _react2.default.createElement(
      "p",
      null,
      "This moment, at five to nine in the morning on a Friday, changed my life in a number of unexpected ways. Being completely crippled and dependant on others got me seriously thinking about the things I'd like to do but had been putting off until \"the right time\", many of which are dependant on being able-bodied, and I wondered a lot about how well I would recover and how those things I'd like to do might now never happen."
    ),
    _react2.default.createElement(
      "p",
      null,
      "My being such a burden put extra strain on my relationship with Kelly, and I believe at least in some part contributed to it's demise."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Right at the peak of things going to shit, Amanda and Miss Fish came around and cooked me dinner and tried to lift my spirits. In what was probably just an off-hand comment, trying to distract me Amanda said I should go to Africa with her and the small group that were planning on going in July 2013."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Having several times in the past put faith in Amanda organising awesome trips, which have always been amazing, I said I was interested without really thinking too much about the logistics of it."
    ),
    _react2.default.createElement(
      "p",
      null,
      "As the days went by and I read through the trip itinerary I decided it was exactly the sort of thing I needed at that time, something to look forward to, so I called up her travel agent and got signed up without even requesting annual leave from work first."
    ),
    _react2.default.createElement(
      "p",
      null,
      "When I started thinking about leave, I realised that the 5 week trip was already a week more leave than I get in a whole year, and with my usual habit of taking a day or two off around festivals and a few days to visit my parents most years it was more like 2 years worth of leave; or a whole lot of unpaid leave."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Furthermore, it seemed like if I was paying all that money to get to Africa, it would be silly not to go and see and other nearby stuff, like visiting the pyramids and diving in the red sea. Once my mind was in Egypt, it seemed the next logical step would be that I should go visit my brother in France. And from France it was only a small hop to England to visit Matty Poppins. Being in Europe, I'd always wanted to spend some more time in Spain and try and learn Spanish... and by this point I was already thinking in large numbers of months of time required."
    ),
    _react2.default.createElement(
      "p",
      null,
      "I thought for a long time if I should try and ask work for that much time off, or if I should scale back my plans, but both seemed to have major downsides. Either I'd miss out on doing some stuff I wanted to do, or I'd have a deadline to be back home by, meaning I wouldn't have the flexibility to chop and change my plans at the drop of a hat."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Eventually I decided that I should quit my job. That was an incredibly hard choice, because I actually really loved my job (although I'm sure I was hovering pretty close to burn-out), got along well with the people I worked with, and liked the company I worked for. In a world where it's common for people to hate what they have to do to get the money they need to live, it felt pretty irresponsible to leave such a comfortable position."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Having been on the road for over a little while now, I'm pretty certain it was the right choice. I'm  feeling tremendously privileged to be able put \"real life\" on the shelf for a while and treat life as the adventure it should be."
    ),
    _react2.default.createElement(
      "p",
      null,
      "Twelve months on from that day in June, my life hardly even resembles what it used to be. I'm pretty much completely recovered from the injury (only occasional minor tight muscle pain these days and even that is lessening) and taking full advantage of that every day. Instead of worrying about being late for work or if the thing I was working on is going to get finished on time, my concerns today are along the lines of \"What should I spend my last day in India doing?\" and \"I hope I get a window seat for my flight to South Africa.\" I've always thrived under pressure and I almost feel like last year was life's way of saying \"Hurry up and do awesome things, you can't wait forever.\""
    ),
    _react2.default.createElement(
      "p",
      null,
      "I don't believe that the adventure I've set out on will solve all (or even any) of the problems in my life, but it certainly hasn't made things worse yet. Maybe when I'm old I'll look back and wish I'd been sensible, and invested my savings more wisely, so I could die having a larger sum of money to leave to the children I'm not really planning on having.... but I seriously doubt it."
    )
  );
  var blogPages = [];

  exports.default = function () {
    return _react2.default.createElement(_BlogPost2.default, { metadata: metadata, body: body });
  };

/***/ }

});