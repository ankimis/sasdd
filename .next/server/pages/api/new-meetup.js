"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const username = encodeURIComponent(\"ankit_mishra\");\n    const password = encodeURIComponent(\"Ankit123\");\n    console.log(\"req\", req);\n    if (req.method === \"POST\") {\n        const data = req.body;\n        console.log(\"data\", data);\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.va03s.mongodb.net/meetups?retryWrites=true&w=majority`);\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetups\");\n        const result = await meetupsCollection.insertOne(data);\n        console.log(\"result\", result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup Inserted!\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFDeEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUVoRCxNQUFNQyxRQUFRLEdBQUdDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQztJQUNuRCxNQUFNQyxRQUFRLEdBQUdELGtCQUFrQixDQUFDLFVBQVUsQ0FBQztJQUMzQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFTixHQUFHLENBQUM7SUFDekIsSUFBSUEsR0FBRyxDQUFDTyxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU1DLElBQUksR0FBR1IsR0FBRyxDQUFDUyxJQUFJO1FBQ3JCSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVFLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU1FLE1BQU0sR0FBRyxNQUFNWix3REFBbUIsQ0FDdEMsQ0FBQyxjQUFjLEVBQUVJLFFBQVEsQ0FBQyxDQUFDLEVBQUVFLFFBQVEsQ0FBQywrREFBK0QsQ0FBQyxDQUN2RztRQUNELE1BQU1RLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7UUFFdEIsTUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNsRCxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDO1FBQ3RESCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVTLE1BQU0sQ0FBQyxDQUFDO1FBQzlCTCxNQUFNLENBQUNPLEtBQUssRUFBRSxDQUFDO1FBQ2ZoQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUMsa0JBQWtCO1NBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuY29uc3QgdXNlcm5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQoXCJhbmtpdF9taXNocmFcIik7XHJcbmNvbnN0IHBhc3N3b3JkID0gZW5jb2RlVVJJQ29tcG9uZW50KFwiQW5raXQxMjNcIik7XHJcbiAgICBjb25zb2xlLmxvZygncmVxJywgcmVxKVxyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgIGBtb25nb2RiK3NydjovLyR7dXNlcm5hbWV9OiR7cGFzc3dvcmR9QGNsdXN0ZXIwLnZhMDNzLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdCk7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOidNZWV0dXAgSW5zZXJ0ZWQhJ30pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlcm5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();