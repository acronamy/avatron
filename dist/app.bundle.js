/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engines_appearance_avatar_svg__ = __webpack_require__(1);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export avatar */
function avatar(size){
    return `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="${size}px" height="${size}px" viewBox="0 0 199.999 200.001" enable-background="new 0 0 199.999 200.001"
	 xml:space="preserve">

<path id="face" d="M195.565,195.566c5.912,5.912-197.043,5.912-191.132,0c-5.911,5.912-5.911-197.044,0-191.133
	c-5.911-5.911,197.044-5.911,191.132,0C201.478-1.478,201.478,201.479,195.565,195.566z"/>
	<g id='eyes'>
		<path id="eye-r" fill="#389ED6" d="M97.333,94.52c0,2.843-2.305,5.147-5.147,5.147H54.48c-2.843,0-5.147-2.305-5.147-5.147V56.814
			c0-2.843,2.305-5.147,5.147-5.147h37.705c2.843,0,5.147,2.305,5.147,5.147V94.52z"/>
		<path id="eye-l" fill="#389ED6" d="M151.333,94.52c0,2.843-2.305,5.147-5.147,5.147H108.48c-2.843,0-5.147-2.305-5.147-5.147V56.814
			c0-2.843,2.305-5.147,5.147-5.147h37.705c2.843,0,5.147,2.305,5.147,5.147V94.52z"/>
	</g>
</svg>
`
}

/***/ })
/******/ ]);