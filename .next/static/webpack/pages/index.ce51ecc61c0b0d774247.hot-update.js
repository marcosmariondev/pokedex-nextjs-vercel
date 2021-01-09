webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var _jsxFileName = "/var/www/html/marion/pokedex/pages/index.js",
    _s = $RefreshSig$();

 // import { Container } from './styles';

function Home(_ref) {
  _s();

  var _this = this;

  var pokemons_props = _ref.pokemons_props;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(pokemons_props),
      pokemons = _useState[0],
      setPokemons = _useState[1];
  /**
  useEffect(() => {
       fetch("https://pokeapi.co/api/v2/pokedex/2")
          .then((res) => {
              if (res.ok) {
                  return res.json()
              }
          })
          .then((resObject => {
              setPokemons(resObject.pokemon_entries)
          }))
   }, [])
   */


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: "Listagem de pokemons"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      children: pokemons_props.length && pokemons_props.map(function (pokemon) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: [pokemon.entry_number, " -  ", pokemon.pokemon_species.name]
        }, pokemon.entry_number, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 29
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Home, "7368x6y+c+rKD8XpYzAsaYtJMqE=");

_c = Home;

Home.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var res, json;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://pokeapi.co/api/v2/pokedex/2');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;
            return _context.abrupt("return", {
              pokemons_props: json.pokemon_entries
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zX3Byb3BzIiwidXNlU3RhdGUiLCJwb2tlbW9ucyIsInNldFBva2Vtb25zIiwibGVuZ3RoIiwibWFwIiwicG9rZW1vbiIsImVudHJ5X251bWJlciIsInBva2Vtb25fc3BlY2llcyIsIm5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlcyIsImpzb24iLCJwb2tlbW9uX2VudHJpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBRUEsU0FBU0EsSUFBVCxPQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQWpCQyxjQUFpQixRQUFqQkEsY0FBaUI7O0FBQUEsa0JBRUlDLHNEQUFRLENBQUNELGNBQUQsQ0FGWjtBQUFBLE1BRXJCRSxRQUZxQjtBQUFBLE1BRVhDLFdBRlc7QUFJNUI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlJLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQUEsZ0JBQ0tILGNBQWMsQ0FBQ0ksTUFBZixJQUF5QkosY0FBYyxDQUFDSyxHQUFmLENBQW1CLFVBQUNDLE9BQUQsRUFBYTtBQUV0RCw0QkFBUTtBQUFBLHFCQUNIQSxPQUFPLENBQUNDLFlBREwsVUFDdUJELE9BQU8sQ0FBQ0UsZUFBUixDQUF3QkMsSUFEL0M7QUFBQSxXQUFTSCxPQUFPLENBQUNDLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVI7QUFJSCxPQU55QjtBQUQ5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQSxrQkFESjtBQWVIOztHQW5DUVIsSTs7S0FBQUEsSTs7QUFzQ1RBLElBQUksQ0FBQ1csZUFBTDtBQUFBLCtMQUF1QixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNEQyxLQUFLLENBQUMscUNBQUQsQ0FESjs7QUFBQTtBQUNiQyxlQURhO0FBQUE7QUFBQSxtQkFFQUEsR0FBRyxDQUFDQyxJQUFKLEVBRkE7O0FBQUE7QUFFYkEsZ0JBRmE7QUFBQSw2Q0FHWjtBQUFFZCw0QkFBYyxFQUFFYyxJQUFJLENBQUNDO0FBQXZCLGFBSFk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVoQixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZTUxZWNjNjFjMGIwZDc3NDI0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbi8vIGltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuZnVuY3Rpb24gSG9tZSh7cG9rZW1vbnNfcHJvcHN9KSB7XG5cbiAgICBjb25zdCBbcG9rZW1vbnMsIHNldFBva2Vtb25zXSA9IHVzZVN0YXRlKHBva2Vtb25zX3Byb3BzKVxuXG4gICAgLyoqXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yXCIpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzT2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQb2tlbW9ucyhyZXNPYmplY3QucG9rZW1vbl9lbnRyaWVzKVxuICAgICAgICAgICAgfSkpXG5cbiAgICB9LCBbXSlcbiAgICAgKi9cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+TGlzdGFnZW0gZGUgcG9rZW1vbnM8L2gxPlxuICAgICAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Bva2Vtb25zX3Byb3BzLmxlbmd0aCAmJiBwb2tlbW9uc19wcm9wcy5tYXAoKHBva2Vtb24pID0+IHtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxsaSBrZXk9e3Bva2Vtb24uZW50cnlfbnVtYmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLmVudHJ5X251bWJlcn0gLSAge3Bva2Vtb24ucG9rZW1vbl9zcGVjaWVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+KVxuXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yJylcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7IHBva2Vtb25zX3Byb3BzOiBqc29uLnBva2Vtb25fZW50cmllcyB9XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9