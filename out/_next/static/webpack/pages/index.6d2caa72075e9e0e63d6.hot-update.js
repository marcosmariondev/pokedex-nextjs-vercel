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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var _jsxFileName = "/var/www/html/marion/pokedex/pages/index.js",
    _s = $RefreshSig$();

 // import { Container } from './styles';

function Home(_ref) {
  _s();

  var _this = this;

  var pokemons_props = _ref.pokemons_props;

  var _useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"].apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(pokemons_props)),
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

_s(Home, "wKcTrILbJTmS4Nf8GavOierw50k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zX3Byb3BzIiwidXNlU3RhdGUiLCJwb2tlbW9ucyIsInNldFBva2Vtb25zIiwibGVuZ3RoIiwibWFwIiwicG9rZW1vbiIsImVudHJ5X251bWJlciIsInBva2Vtb25fc3BlY2llcyIsIm5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlcyIsImpzb24iLCJwb2tlbW9uX2VudHJpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFFQSxTQUFTQSxJQUFULE9BQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBakJDLGNBQWlCLFFBQWpCQSxjQUFpQjs7QUFBQSxrQkFFSUMsOENBQVEsTUFBUixzR0FBWUQsY0FBWixFQUZKO0FBQUEsTUFFckJFLFFBRnFCO0FBQUEsTUFFWEMsV0FGVztBQUk1QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUksc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxnQkFDS0gsY0FBYyxDQUFDSSxNQUFmLElBQXlCSixjQUFjLENBQUNLLEdBQWYsQ0FBbUIsVUFBQ0MsT0FBRCxFQUFhO0FBRXRELDRCQUFRO0FBQUEscUJBQ0hBLE9BQU8sQ0FBQ0MsWUFETCxVQUN1QkQsT0FBTyxDQUFDRSxlQUFSLENBQXdCQyxJQUQvQztBQUFBLFdBQVNILE9BQU8sQ0FBQ0MsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUjtBQUlILE9BTnlCO0FBRDlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBLGtCQURKO0FBZUg7O0dBbkNRUixJOztLQUFBQSxJOztBQXNDVEEsSUFBSSxDQUFDVyxlQUFMO0FBQUEsK0xBQXVCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0RDLEtBQUssQ0FBQyxxQ0FBRCxDQURKOztBQUFBO0FBQ2JDLGVBRGE7QUFBQTtBQUFBLG1CQUVBQSxHQUFHLENBQUNDLElBQUosRUFGQTs7QUFBQTtBQUViQSxnQkFGYTtBQUFBLDZDQUdaO0FBQUVkLDRCQUFjLEVBQUVjLElBQUksQ0FBQ0M7QUFBdkIsYUFIWTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZWhCLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkMmNhYTcyMDc1ZTllMGU2M2Q2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuLy8gaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5mdW5jdGlvbiBIb21lKHtwb2tlbW9uc19wcm9wc30pIHtcblxuICAgIGNvbnN0IFtwb2tlbW9ucywgc2V0UG9rZW1vbnNdID0gdXNlU3RhdGUoLi4ucG9rZW1vbnNfcHJvcHMpXG5cbiAgICAvKipcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlZGV4LzJcIilcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNPYmplY3QgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBva2Vtb25zKHJlc09iamVjdC5wb2tlbW9uX2VudHJpZXMpXG4gICAgICAgICAgICB9KSlcblxuICAgIH0sIFtdKVxuICAgICAqL1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5MaXN0YWdlbSBkZSBwb2tlbW9uczwvaDE+XG4gICAgICAgICAgICA8aHI+PC9ocj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7cG9rZW1vbnNfcHJvcHMubGVuZ3RoICYmIHBva2Vtb25zX3Byb3BzLm1hcCgocG9rZW1vbikgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGxpIGtleT17cG9rZW1vbi5lbnRyeV9udW1iZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Bva2Vtb24uZW50cnlfbnVtYmVyfSAtICB7cG9rZW1vbi5wb2tlbW9uX3NwZWNpZXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT4pXG5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlZGV4LzInKVxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgcmV0dXJuIHsgcG9rZW1vbnNfcHJvcHM6IGpzb24ucG9rZW1vbl9lbnRyaWVzIH1cbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=