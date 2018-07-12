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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/dist/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _writer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _writer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_writer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToDoStatuses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _ToDoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/*
1.	Create function-constructor which creates objects
 ToDoStatuses
{
new: ‘NEW’,
 	inProgress: ‘IN_PROGRESS’,
 	done: ‘DONE’
}
and define the one like read only and not configurable.


2. Create Function constructor (class) for ToDoItem with fields:
id,
creationDate,
finishDate,
status,
caption,
description
and define all fields like writable. but object isn’t extended,
property id has to be not iterable
Also put into prototype some methods like
setStatus(status, data)
getDescription()
getCaption()
fields id, and creation date have to be define during creating new object
*/






const statuses = new _ToDoStatuses__WEBPACK_IMPORTED_MODULE_1__["ToDoStatuses"]();

const todoExapmle = {
    finishDate: '14.06.2018 12:30:00',
    caption: 'new todo',
    description: 'new todo description'
}
const newToDoItem = new _ToDoItem__WEBPACK_IMPORTED_MODULE_2__["ToDoItem"](todoExapmle);
newToDoItem.setStatus('done');


_writer__WEBPACK_IMPORTED_MODULE_0___default()(statuses);
_writer__WEBPACK_IMPORTED_MODULE_0___default()(newToDoItem);
_writer__WEBPACK_IMPORTED_MODULE_0___default()(newToDoItem.getDescription());
_writer__WEBPACK_IMPORTED_MODULE_0___default()(newToDoItem.getCaption());


/***/ }),
/* 2 */
/***/ (function(module, exports) {

function write(value) {
	console.log(value);
};


module.exports = write;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoStatuses", function() { return ToDoStatuses; });
class ToDoStatuses {
    constructor() {
        this.statusList = {};

        Object.defineProperties(this.statusList, {
            new: {
                value: 'NEW',
                writable: false,
                configurable: false,
            },
            inProgress: {
                value: 'IN_PROGRESS',
                writable: false,
                configurable: false,
            },
            done: {
                value: 'DONE',
                writable: false,
                configurable: false,
            }
        });

    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoItem", function() { return ToDoItem; });
/* harmony import */ var _ToDoStatuses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);



class ToDoItem {

    constructor({finishDate, caption, description}) {

        const currentDate = new Date();
        let creationDate  = currentDate.getDay() + '.';
            creationDate += currentDate.getMonth() + '.';
            creationDate += currentDate.getFullYear() + ' ';
            creationDate += currentDate.getHours() + ':';
            creationDate += currentDate.getMinutes() + ':';
            creationDate += currentDate.getSeconds();

        this.statuses = new _ToDoStatuses__WEBPACK_IMPORTED_MODULE_0__["ToDoStatuses"]();

        this.item = {};
        this.item.id = Date.now();
        this.item.creationDate = creationDate;
        this.item.status = this.statuses.statusList.new;
        this.item.finishDate = finishDate;
        this.item.caption = caption;
        this.item.description = description;

        this.item = Object.preventExtensions(this.item);

    }

    setStatus (statuseId){
        this.item.status = this.statuses.statusList[statuseId];
    }

    getDescription (){
        return this.item.description;
    }

    getCaption (){
        return this.item.caption;
    }

}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3dyaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvVG9Eb1N0YXR1c2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9Ub0RvSXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNxQjtBQUNKOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkJxQjs7O0FBR3JCOztBQUVBLGlCQUFpQixpQ0FBaUM7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9qcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLypcclxuMS5cdENyZWF0ZSBmdW5jdGlvbi1jb25zdHJ1Y3RvciB3aGljaCBjcmVhdGVzIG9iamVjdHNcclxuIFRvRG9TdGF0dXNlc1xyXG57XHJcbm5ldzog4oCYTkVX4oCZLFxyXG4gXHRpblByb2dyZXNzOiDigJhJTl9QUk9HUkVTU+KAmSxcclxuIFx0ZG9uZTog4oCYRE9OReKAmVxyXG59XHJcbmFuZCBkZWZpbmUgdGhlIG9uZSBsaWtlIHJlYWQgb25seSBhbmQgbm90IGNvbmZpZ3VyYWJsZS5cclxuXHJcblxyXG4yLiBDcmVhdGUgRnVuY3Rpb24gY29uc3RydWN0b3IgKGNsYXNzKSBmb3IgVG9Eb0l0ZW0gd2l0aCBmaWVsZHM6XHJcbmlkLFxyXG5jcmVhdGlvbkRhdGUsXHJcbmZpbmlzaERhdGUsXHJcbnN0YXR1cyxcclxuY2FwdGlvbixcclxuZGVzY3JpcHRpb25cclxuYW5kIGRlZmluZSBhbGwgZmllbGRzIGxpa2Ugd3JpdGFibGUuIGJ1dCBvYmplY3QgaXNu4oCZdCBleHRlbmRlZCxcclxucHJvcGVydHkgaWQgaGFzIHRvIGJlIG5vdCBpdGVyYWJsZVxyXG5BbHNvIHB1dCBpbnRvIHByb3RvdHlwZSBzb21lIG1ldGhvZHMgbGlrZVxyXG5zZXRTdGF0dXMoc3RhdHVzLCBkYXRhKVxyXG5nZXREZXNjcmlwdGlvbigpXHJcbmdldENhcHRpb24oKVxyXG5maWVsZHMgaWQsIGFuZCBjcmVhdGlvbiBkYXRlIGhhdmUgdG8gYmUgZGVmaW5lIGR1cmluZyBjcmVhdGluZyBuZXcgb2JqZWN0XHJcbiovXHJcblxyXG5cclxuaW1wb3J0IHdyaXRlIGZyb20gJy4vd3JpdGVyJztcclxuaW1wb3J0IHtUb0RvU3RhdHVzZXN9IGZyb20gJy4vVG9Eb1N0YXR1c2VzJztcclxuaW1wb3J0IHtUb0RvSXRlbX0gZnJvbSAnLi9Ub0RvSXRlbSc7XHJcblxyXG5jb25zdCBzdGF0dXNlcyA9IG5ldyBUb0RvU3RhdHVzZXMoKTtcclxuXHJcbmNvbnN0IHRvZG9FeGFwbWxlID0ge1xyXG4gICAgZmluaXNoRGF0ZTogJzE0LjA2LjIwMTggMTI6MzA6MDAnLFxyXG4gICAgY2FwdGlvbjogJ25ldyB0b2RvJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnbmV3IHRvZG8gZGVzY3JpcHRpb24nXHJcbn1cclxuY29uc3QgbmV3VG9Eb0l0ZW0gPSBuZXcgVG9Eb0l0ZW0odG9kb0V4YXBtbGUpO1xyXG5uZXdUb0RvSXRlbS5zZXRTdGF0dXMoJ2RvbmUnKTtcclxuXHJcblxyXG53cml0ZShzdGF0dXNlcyk7XHJcbndyaXRlKG5ld1RvRG9JdGVtKTtcclxud3JpdGUobmV3VG9Eb0l0ZW0uZ2V0RGVzY3JpcHRpb24oKSk7XHJcbndyaXRlKG5ld1RvRG9JdGVtLmdldENhcHRpb24oKSk7XHJcbiIsImZ1bmN0aW9uIHdyaXRlKHZhbHVlKSB7XHJcblx0Y29uc29sZS5sb2codmFsdWUpO1xyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gd3JpdGU7XHJcbiIsImV4cG9ydCBjbGFzcyBUb0RvU3RhdHVzZXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNMaXN0ID0ge307XHJcblxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMuc3RhdHVzTGlzdCwge1xyXG4gICAgICAgICAgICBuZXc6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnTkVXJyxcclxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluUHJvZ3Jlc3M6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAnSU5fUFJPR1JFU1MnLFxyXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9uZToge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdET05FJyxcclxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtUb0RvU3RhdHVzZXN9IGZyb20gJy4vVG9Eb1N0YXR1c2VzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG9Eb0l0ZW0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHtmaW5pc2hEYXRlLCBjYXB0aW9uLCBkZXNjcmlwdGlvbn0pIHtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCBjcmVhdGlvbkRhdGUgID0gY3VycmVudERhdGUuZ2V0RGF5KCkgKyAnLic7XHJcbiAgICAgICAgICAgIGNyZWF0aW9uRGF0ZSArPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgJy4nO1xyXG4gICAgICAgICAgICBjcmVhdGlvbkRhdGUgKz0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSArICcgJztcclxuICAgICAgICAgICAgY3JlYXRpb25EYXRlICs9IGN1cnJlbnREYXRlLmdldEhvdXJzKCkgKyAnOic7XHJcbiAgICAgICAgICAgIGNyZWF0aW9uRGF0ZSArPSBjdXJyZW50RGF0ZS5nZXRNaW51dGVzKCkgKyAnOic7XHJcbiAgICAgICAgICAgIGNyZWF0aW9uRGF0ZSArPSBjdXJyZW50RGF0ZS5nZXRTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdHVzZXMgPSBuZXcgVG9Eb1N0YXR1c2VzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbSA9IHt9O1xyXG4gICAgICAgIHRoaXMuaXRlbS5pZCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5pdGVtLmNyZWF0aW9uRGF0ZSA9IGNyZWF0aW9uRGF0ZTtcclxuICAgICAgICB0aGlzLml0ZW0uc3RhdHVzID0gdGhpcy5zdGF0dXNlcy5zdGF0dXNMaXN0Lm5ldztcclxuICAgICAgICB0aGlzLml0ZW0uZmluaXNoRGF0ZSA9IGZpbmlzaERhdGU7XHJcbiAgICAgICAgdGhpcy5pdGVtLmNhcHRpb24gPSBjYXB0aW9uO1xyXG4gICAgICAgIHRoaXMuaXRlbS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW0gPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnModGhpcy5pdGVtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzIChzdGF0dXNlSWQpe1xyXG4gICAgICAgIHRoaXMuaXRlbS5zdGF0dXMgPSB0aGlzLnN0YXR1c2VzLnN0YXR1c0xpc3Rbc3RhdHVzZUlkXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXNjcmlwdGlvbiAoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtLmRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhcHRpb24gKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbS5jYXB0aW9uO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9