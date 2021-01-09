webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var _jsxFileName = "/var/www/html/marion/pokedex/pages/index.js",
    _s = $RefreshSig$();

 // import { Container } from './styles';

function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      pokemons = _useState[0],
      setPokemons = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("https://pokeapi.co/api/v2/pokedex/2").then(function (res) {
      if (res.ok) {
        return res.json();
      }
    }).then(function (resObject) {
      setPokemons(resObject.pokemon_entries);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Listagem de pokemons"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: pokemons.length && pokemons.map(function (pokemon) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [pokemon.entry_number, " -  ", pokemon.pokemon_species.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Home, "HTV26hiVYObM9ZdttYFfm0Hoy8g=");

_c = Home;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9rZW1vbnMiLCJzZXRQb2tlbW9ucyIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsInJlc09iamVjdCIsInBva2Vtb25fZW50cmllcyIsImxlbmd0aCIsIm1hcCIsInBva2Vtb24iLCJlbnRyeV9udW1iZXIiLCJwb2tlbW9uX3NwZWNpZXMiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FGMUI7QUFBQSxNQUVQQyxRQUZPO0FBQUEsTUFFR0MsV0FGSDs7QUFJZEMseURBQVMsQ0FBQyxZQUFNO0FBRWRDLFNBQUssQ0FBQyxxQ0FBRCxDQUFMLENBQ0NDLElBREQsQ0FDTSxVQUFDQyxHQUFELEVBQVM7QUFDWCxVQUFHQSxHQUFHLENBQUNDLEVBQVAsRUFBVTtBQUNQLGVBQU9ELEdBQUcsQ0FBQ0UsSUFBSixFQUFQO0FBQ0Y7QUFDQSxLQUxMLEVBTUNILElBTkQsQ0FNTyxVQUFBSSxTQUFTLEVBQUk7QUFDaEJQLGlCQUFXLENBQUNPLFNBQVMsQ0FBQ0MsZUFBWCxDQUFYO0FBQ0gsS0FSRDtBQVVELEdBWlEsRUFZUCxFQVpPLENBQVQ7QUFjQSxzQkFDSTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLGdCQUNLVCxRQUFRLENBQUNVLE1BQVQsSUFBbUJWLFFBQVEsQ0FBQ1csR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBYTtBQUUxQztBQUFBO0FBQUEscUJBQ0lBLE9BQU8sQ0FBQ0MsWUFEWixVQUM4QkQsT0FBTyxDQUFDRSxlQUFSLENBQXdCQyxJQUR0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJSCxPQU5tQjtBQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQSxrQkFESjtBQWVEOztHQWpDUWpCLEk7O0tBQUFBLEk7QUFtQ01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhNjRjNWU1NWRmY2E1NTJmMTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cbi8vIGltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJztcblxuZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbcG9rZW1vbnMsIHNldFBva2Vtb25zXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yXCIpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZihyZXMub2spe1xuICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgLnRoZW4oKHJlc09iamVjdCA9PiB7XG4gICAgICAgIHNldFBva2Vtb25zKHJlc09iamVjdC5wb2tlbW9uX2VudHJpZXMpXG4gICAgfSkpXG5cbiAgfSxbXSlcblxuICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGgxPkxpc3RhZ2VtIGRlIHBva2Vtb25zPC9oMT5cbiAgICAgICAgPGhyPjwvaHI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtwb2tlbW9ucy5sZW5ndGggJiYgcG9rZW1vbnMubWFwKChwb2tlbW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgIHtwb2tlbW9uLmVudHJ5X251bWJlcn0gLSAge3Bva2Vtb24ucG9rZW1vbl9zcGVjaWVzLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgfSkgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9