"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Modal.tsx":
/*!******************************!*\
  !*** ./components/Modal.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Modal = (param)=>{\n    let { isOpen, onClose } = param;\n    _s();\n    const [productName, setProductName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [productValue, setProductValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [productImage, setProductImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white rounded-lg w-full max-w-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-black flex items-center flex-col flex-wrap mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold mb-4\",\n                                children: \"INNOVATION STORE\"\n                            }, void 0, false, {\n                                fileName: \"/home/redyf/projects/DesafioTecnicoDiamantesConsultoria/components/Modal.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-6\",\n                                children: \"Adicionar Produto\"\n                            }, void 0, false, {\n                                fileName: \"/home/redyf/projects/DesafioTecnicoDiamantesConsultoria/components/Modal.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/redyf/projects/DesafioTecnicoDiamantesConsultoria/components/Modal.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Name\",\n                                value: productName,\n                                onChange: (e)=>setProductName(e.target.value),\n                                className: \"w-full px-4 py-2 border border-gray-300 rounded mb-4\"\n                            }, void 0, false, {\n                                fileName: \"/home/redyf/projects/DesafioTecnicoDiamantesConsultoria/components/Modal.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                placeholder: \"Value\",\n                                value: productValue,\n                                onChange: (e)=>setProductValue(e.target.value),\n                                className: \"w-full px-4 py-2 border border-gray-300 rounded mb-4\"\n                            }, void 0, false, {\n                                fileName: \"/home/redyf/projects/DesafioTecnicoDiamantesConsultoria/components/Modal.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Image URL\",\n                                value: productImage,\n                                onChange: (e)=>setProductImage(e.target.value),\n                                className: \"w-full px-4 py-2 border border-gray-300 rounded mb-4\"\n                            }, void 0, false, {\n                                fileName: \"/home/redyf/projects/DesafioTecnicoDiamantesConsultoria/components/Modal.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/redyf/projects/DesafioTecnicoDiamantesConsultoria/components/Modal.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>console.log(\"Add Item\"),\n                        className: \"w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600\",\n                        children: \"Adicionar\"\n                    }, void 0, false, {\n                        fileName: \"/home/redyf/projects/DesafioTecnicoDiamantesConsultoria/components/Modal.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/redyf/projects/DesafioTecnicoDiamantesConsultoria/components/Modal.tsx\",\n                lineNumber: 12,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/redyf/projects/DesafioTecnicoDiamantesConsultoria/components/Modal.tsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Modal, \"ocfhMKRFfxKCx3yxMn+sRwJ52SQ=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlDO0FBRWpDLE1BQU1DLFFBQVE7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTs7SUFDaEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1EsY0FBY0MsZ0JBQWdCLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpELHFCQUNFO2tCQUNHRSx3QkFDQyw4REFBQ1E7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUF5Qjs7Ozs7OzBDQUN2Qyw4REFBQ0U7Z0NBQUVGLFdBQVU7MENBQU87Ozs7Ozs7Ozs7OztrQ0FHdEIsOERBQUNHOzswQ0FDQyw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU9kO2dDQUNQZSxVQUFVLENBQUNDLElBQU1mLGVBQWVlLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FDOUNQLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ0k7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU9aO2dDQUNQYSxVQUFVLENBQUNDLElBQU1iLGdCQUFnQmEsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUMvQ1AsV0FBVTs7Ozs7OzBDQUVaLDhEQUFDSTtnQ0FDQ0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBT1Y7Z0NBQ1BXLFVBQVUsQ0FBQ0MsSUFBTVgsZ0JBQWdCVyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQy9DUCxXQUFVOzs7Ozs7Ozs7Ozs7a0NBSWQsOERBQUNXO3dCQUNDQyxTQUFTLElBQU1DLFFBQVFDLEdBQUcsQ0FBQzt3QkFDM0JkLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBbERNVjtLQUFBQTtBQW9ETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vZGFsLnRzeD84MTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE1vZGFsID0gKHsgaXNPcGVuLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW3Byb2R1Y3ROYW1lLCBzZXRQcm9kdWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Byb2R1Y3RWYWx1ZSwgc2V0UHJvZHVjdFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvZHVjdEltYWdlLCBzZXRQcm9kdWN0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzT3BlbiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHctZnVsbCBtYXgtdy1tZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBmbGV4LXdyYXAgbWItNFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPklOTk9WQVRJT04gU1RPUkU8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02XCI+QWRpY2lvbmFyIFByb2R1dG88L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBtYi00XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RWYWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3RWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgbWItNFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkltYWdlIFVSTFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3RJbWFnZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3RJbWFnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgbWItNFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJBZGQgSXRlbVwiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNjAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRpY2lvbmFyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwicHJvZHVjdFZhbHVlIiwic2V0UHJvZHVjdFZhbHVlIiwicHJvZHVjdEltYWdlIiwic2V0UHJvZHVjdEltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Modal.tsx\n"));

/***/ })

});