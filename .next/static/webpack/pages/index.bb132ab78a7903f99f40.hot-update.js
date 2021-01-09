webpackHotUpdate_N_E("pages/index",{

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
      children: pokemons.length && pokemons.map(function (pokemon) {
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

Page.getInitialProps = /*#__PURE__*/function () {
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
              pokemons_props: json.stargazers_count
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zX3Byb3BzIiwidXNlU3RhdGUiLCJwb2tlbW9ucyIsInNldFBva2Vtb25zIiwibGVuZ3RoIiwibWFwIiwicG9rZW1vbiIsImVudHJ5X251bWJlciIsInBva2Vtb25fc3BlY2llcyIsIm5hbWUiLCJQYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwic3RhcmdhemVyc19jb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFFQSxTQUFTQSxJQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLGNBQWlCLFFBQWpCQSxjQUFpQjs7QUFBQSxrQkFFSUMsc0RBQVEsQ0FBQ0QsY0FBRCxDQUZaO0FBQUEsTUFFckJFLFFBRnFCO0FBQUEsTUFFWEMsV0FGVztBQUk1QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUksc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxnQkFDS0QsUUFBUSxDQUFDRSxNQUFULElBQW1CRixRQUFRLENBQUNHLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQWE7QUFFMUMsNEJBQVE7QUFBQSxxQkFDSEEsT0FBTyxDQUFDQyxZQURMLFVBQ3VCRCxPQUFPLENBQUNFLGVBQVIsQ0FBd0JDLElBRC9DO0FBQUEsV0FBU0gsT0FBTyxDQUFDQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFSO0FBSUgsT0FObUI7QUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUEsa0JBREo7QUFlSDs7R0FuQ1FSLEk7O0tBQUFBLEk7O0FBc0NUVyxJQUFJLENBQUNDLGVBQUw7QUFBQSwrTEFBdUIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDREMsS0FBSyxDQUFDLHFDQUFELENBREo7O0FBQUE7QUFDYkMsZUFEYTtBQUFBO0FBQUEsbUJBRUFBLEdBQUcsQ0FBQ0MsSUFBSixFQUZBOztBQUFBO0FBRWJBLGdCQUZhO0FBQUEsNkNBR1o7QUFBRWYsNEJBQWMsRUFBRWUsSUFBSSxDQUFDQztBQUF2QixhQUhZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lakIsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmIxMzJhYjc4YTc5MDNmOTlmNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmZ1bmN0aW9uIEhvbWUoe3Bva2Vtb25zX3Byb3BzfSkge1xuXG4gICAgY29uc3QgW3Bva2Vtb25zLCBzZXRQb2tlbW9uc10gPSB1c2VTdGF0ZShwb2tlbW9uc19wcm9wcylcblxuICAgIC8qKlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2VkZXgvMlwiKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc09iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UG9rZW1vbnMocmVzT2JqZWN0LnBva2Vtb25fZW50cmllcylcbiAgICAgICAgICAgIH0pKVxuXG4gICAgfSwgW10pXG4gICAgICovXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPkxpc3RhZ2VtIGRlIHBva2Vtb25zPC9oMT5cbiAgICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtwb2tlbW9ucy5sZW5ndGggJiYgcG9rZW1vbnMubWFwKChwb2tlbW9uKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8bGkga2V5PXtwb2tlbW9uLmVudHJ5X251bWJlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9rZW1vbi5lbnRyeV9udW1iZXJ9IC0gIHtwb2tlbW9uLnBva2Vtb25fc3BlY2llcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPilcblxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5cblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2VkZXgvMicpXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICByZXR1cm4geyBwb2tlbW9uc19wcm9wczoganNvbi5zdGFyZ2F6ZXJzX2NvdW50IH1cbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=