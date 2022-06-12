/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_toDoTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toDoTask.js */ \"./src/modules/toDoTask.js\");\n/* harmony import */ var _modules_interactiveList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/interactiveList.js */ \"./src/modules/interactiveList.js\");\n\n\n\nvar todoItemsList = document.querySelector('#list_navv');\nvar clearAllBtn = document.querySelector('#clearAllBTN');\nvar task = new _modules_toDoTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\ntask.addTask();\ntask.render();\ntodoItemsList.addEventListener('click', function (event) {\n  if (event.target.type === 'checkbox') {\n    (0,_modules_interactiveList_js__WEBPACK_IMPORTED_MODULE_2__.toggle)(event.target.parentElement.getAttribute('data-key'), task);\n    task.render();\n  }\n});\nclearAllBtn.addEventListener('click', function () {\n  (0,_modules_interactiveList_js__WEBPACK_IMPORTED_MODULE_2__.clearAll)(task);\n  task.render();\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/functionalities.js":
/*!****************************************!*\
  !*** ./src/modules/functionalities.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deletTask\": () => (/* binding */ deletTask),\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks),\n/* harmony export */   \"editTasks\": () => (/* binding */ editTasks),\n/* harmony export */   \"inputEvents\": () => (/* binding */ inputEvents),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask)\n/* harmony export */ });\nvar deletedTask = false;\n\nvar displayTasks = function displayTasks(tasks, container) {\n  container.innerHTML = '';\n  tasks.slice().reverse().forEach(function (task) {\n    var checked = task.completed ? 'checked' : null;\n    var taskElement = \"<li data-id=\\\"\".concat(task.index, \"\\\">\\n                    <div class=\\\"list__item\\\" id=\\\"list_data\\\" data-key=\\\"\").concat(task.index, \"\\\">\\n                        <input class=\\\"checkBox\\\" \").concat(checked, \" type=\\\"checkbox\\\" id=\").concat(task.index, \">\\n                        <input type=\\\"text\\\" id=\\\"\").concat(task.index, \"\\\" class=\\\"\").concat(checked, \"\\\" value=\\\"\").concat(task.description, \"\\\">\\n                        <button type=\\\"button\\\"  class=\\\"btn\\\" data-id=\\\"\").concat(task.index, \"\\\">\\n                            <i class=\\\"icon icon--dots\\\"></i>\\n                            <i class=\\\"icon icon--trash hidden\\\"></i>\\n                        </button>\\n                    </div>\\n                </li>\");\n    container.innerHTML += taskElement;\n  });\n}; // Remove Task Functionality\n\n\nvar removeTask = function removeTask(taskArray, addTask, id) {\n  var index = parseInt(id, 10);\n  taskArray.splice(index, 1);\n  taskArray.forEach(function (task, i) {\n    task.index = i;\n  });\n  addTask();\n};\n\nvar deletTask = function deletTask() {\n  var delIcons = document.querySelectorAll('.icon--trash');\n  delIcons.forEach(function (delIcon) {\n    delIcon.addEventListener('mousedown', function () {\n      deletedTask = true;\n    });\n  });\n}; // Edit Task Functionality\n\n\nvar editTasks = function editTasks(newDesc, taskArray, addTask, index) {\n  taskArray[index].description = newDesc;\n  addTask();\n}; // Click Task Event Handler\n\n\nvar inputEvents = function inputEvents(tasks, addTask, listContainer, render) {\n  var inputs = listContainer.querySelectorAll('input[type=\"text\"]');\n  var newDesc = '';\n  inputs.forEach(function (item) {\n    item.addEventListener('focusin', function () {\n      var li = item.parentElement;\n      var iconDots = li.querySelector('.icon--dots');\n      var iconTrash = li.querySelector('.icon--trash');\n      iconTrash.classList.remove('hidden');\n      iconDots.classList.add('hidden');\n      li.classList.add('active');\n      item.classList.add('active');\n      item.addEventListener('input', function () {\n        newDesc = item.value;\n      });\n    });\n    item.addEventListener('focusout', function () {\n      var li = item.parentElement.parentNode;\n      var div = li.querySelector('.list__item');\n      var iconDots = li.querySelector('.icon--dots');\n      var iconTrash = li.querySelector('.icon--trash');\n      iconTrash.classList.add('hidden');\n      iconDots.classList.remove('hidden');\n      div.classList.remove('active');\n      item.classList.remove('active');\n      var index = item.getAttribute('id');\n\n      if (!deletedTask) {\n        if (newDesc.trim()) {\n          editTasks(newDesc.trim(), tasks, addTask, index);\n          addTask();\n        }\n      } else {\n        removeTask(tasks, addTask, index);\n        addTask();\n        render();\n      }\n\n      newDesc = '';\n      deletedTask = false;\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/functionalities.js?");

/***/ }),

/***/ "./src/modules/inputTaskHandle.js":
/*!****************************************!*\
  !*** ./src/modules/inputTaskHandle.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// Getting Input Values and Store to Localstorage\nvar formAction = function formAction(addTask, taskArray, render) {\n  var form = document.querySelector('.add__task');\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n\n    var _form$elements = _slicedToArray(form.elements, 1),\n        desc = _form$elements[0];\n\n    if (desc.value.trim()) {\n      var taskArr = JSON.parse(localStorage.getItem('todos')) || [];\n      var taskData = {\n        description: desc.value.trim(),\n        completed: false,\n        index: taskArr.length\n      };\n      addTask(taskData);\n      desc.value = '';\n      render();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formAction);\n\n//# sourceURL=webpack://to-do-list/./src/modules/inputTaskHandle.js?");

/***/ }),

/***/ "./src/modules/interactiveList.js":
/*!****************************************!*\
  !*** ./src/modules/interactiveList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"toggle\": () => (/* binding */ toggle)\n/* harmony export */ });\n/* eslint eqeqeq: 0 */\n// Mark as Complete Functionality\nvar toggle = function toggle(index, task) {\n  task.tasksArray.forEach(function (item) {\n    if (item.index == index) {\n      item.completed = !item.completed;\n    }\n  });\n  task.addTask();\n}; // Clear All Completed Functionality\n\n\nvar clearAll = function clearAll(task) {\n  task.tasksArray.forEach(function (data) {\n    if (data.completed === true) {\n      task.tasksArray = task.tasksArray.filter(function (item) {\n        return item.index != data.index;\n      });\n    }\n  });\n  task.tasksArray.forEach(function (task1, i) {\n    task1.index = i;\n  });\n  task.addTask();\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/interactiveList.js?");

/***/ }),

/***/ "./src/modules/toDoTask.js":
/*!*********************************!*\
  !*** ./src/modules/toDoTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _inputTaskHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputTaskHandle.js */ \"./src/modules/inputTaskHandle.js\");\n/* harmony import */ var _functionalities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionalities.js */ \"./src/modules/functionalities.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // To Do Task Class\n\nvar Task = /*#__PURE__*/_createClass(function Task() {\n  var _this = this;\n\n  _classCallCheck(this, Task);\n\n  _defineProperty(this, \"render\", function () {\n    (0,_inputTaskHandle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.addTask, _this.tasksArray, _this.render);\n    (0,_functionalities_js__WEBPACK_IMPORTED_MODULE_1__.displayTasks)(_this.tasksArray, _this.listContainer);\n    (0,_functionalities_js__WEBPACK_IMPORTED_MODULE_1__.inputEvents)(_this.tasksArray, _this.addTask, _this.listContainer, _this.render);\n    (0,_functionalities_js__WEBPACK_IMPORTED_MODULE_1__.deletTask)(_this.tasksArray, _this.addTask);\n  });\n\n  _defineProperty(this, \"addTask\", function (task) {\n    if (task) {\n      _this.tasksArray.push(task);\n\n      localStorage.setItem('todos', JSON.stringify(_this.tasksArray));\n    } else {\n      localStorage.setItem('todos', JSON.stringify(_this.tasksArray));\n    }\n  });\n\n  this.tasksArray = JSON.parse(localStorage.getItem('todos')) || [];\n  this.listContainer = document.querySelector('.nav__items');\n} // Render the Task List\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://to-do-list/./src/modules/toDoTask.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/enter.png */ \"./src/assets/images/icons/enter.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/ico-three-dots.svg */ \"./src/assets/images/icons/ico-three-dots.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/icons/ico-trash.svg */ \"./src/assets/images/icons/ico-trash.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,;300;1,400;1,500;1,600;1,700;1,800&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Custom properties */\\r\\n\\r\\n:root {\\r\\n  /* font-families */\\r\\n  --ff-sans: 'Open Sans', sans-serif;\\r\\n}\\r\\n\\r\\n/* RESET */\\r\\n\\r\\n/* Box sizing rules */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Remove default link style */\\r\\na {\\r\\n  color: unset;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* Remove default margin */\\r\\nbody,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\np,\\r\\nfigure,\\r\\nblockquote,\\r\\ndl,\\r\\ndd {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\r\\nul,\\r\\nol {\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n/* Set core root defaults */\\r\\nhtml:focus-within {\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n/* Set core body defaults */\\r\\nbody {\\r\\n  min-height: 100vh;\\r\\n  text-rendering: optimizeSpeed;\\r\\n  line-height: 1.5;\\r\\n  font-family: var(--ff-sans);\\r\\n  background-color: #22272e;\\r\\n}\\r\\n\\r\\n/* A elements that don't have a class get default styles */\\r\\na:not([class]) {\\r\\n  text-decoration-skip-ink: auto;\\r\\n}\\r\\n\\r\\n/* Make images easier to work with */\\r\\nimg,\\r\\npicture {\\r\\n  max-width: 100%;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/* Inherit fonts for inputs and buttons */\\r\\ninput,\\r\\nbutton,\\r\\ntextarea,\\r\\nselect {\\r\\n  font: inherit;\\r\\n}\\r\\n\\r\\ntextarea:focus,\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n/* Remove default button styles */\\r\\nbutton,\\r\\ninput[type='submit'],\\r\\ninput[type='reset'] {\\r\\n  background: none;\\r\\n  color: inherit;\\r\\n  border: none;\\r\\n  padding: 0;\\r\\n  font: inherit;\\r\\n  cursor: pointer;\\r\\n  outline: inherit;\\r\\n}\\r\\n\\r\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\r\\n@media (prefers-reduced-motion: reduce) {\\r\\n  html:focus-within {\\r\\n    scroll-behavior: auto;\\r\\n  }\\r\\n\\r\\n  *,\\r\\n  *::before,\\r\\n  *::after {\\r\\n    animation-duration: 0.01ms !important;\\r\\n    animation-iteration-count: 1 !important;\\r\\n    transition-duration: 0.01ms !important;\\r\\n    scroll-behavior: auto !important;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Utility classes */\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.grid {\\r\\n  display: grid;\\r\\n}\\r\\n\\r\\n.column {\\r\\n  flex-direction: column !important;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: flex-start;\\r\\n  flex-wrap: wrap;\\r\\n  list-style: none;\\r\\n  font-family: var(--ff-sans);\\r\\n  font-style: normal;\\r\\n  font-weight: 500;\\r\\n  font-size: 1rem;\\r\\n  line-height: 1.25rem;\\r\\n  text-align: center;\\r\\n  color: var(--clr-text-secondary);\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  display: inline-flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  max-width: 24px;\\r\\n  max-height: 24px;\\r\\n}\\r\\n\\r\\n.icon--enter {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  min-width: 24px;\\r\\n}\\r\\n\\r\\n.icon--dots {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  min-width: 24px;\\r\\n}\\r\\n\\r\\n.icon--trash {\\r\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n  min-width: 24px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 40%;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  background: var(--clr-white);\\r\\n  box-shadow: 0 4px 12px #000;\\r\\n  margin: 0 auto;\\r\\n  margin-top: 4%;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  background: #fffeca;\\r\\n}\\r\\n\\r\\n.completed {\\r\\n  text-decoration: line-through;\\r\\n  color: rgb(148, 148, 148);\\r\\n}\\r\\n\\r\\n.container__header {\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  padding: 1.25rem;\\r\\n  border-bottom: 1px solid #444c56;\\r\\n  background-color: #2d333b;\\r\\n  border-top-right-radius: 5px;\\r\\n  border-top-left-radius: 5px;\\r\\n}\\r\\n\\r\\n.container__header h1 {\\r\\n  color: white;\\r\\n  font-size: 1.7rem;\\r\\n  font-weight: bold;\\r\\n  font-family: 'Circular-Loom', sans-serif;\\r\\n}\\r\\n\\r\\n.btn > svg {\\r\\n  width: 1.25rem;\\r\\n}\\r\\n\\r\\n.add__task {\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  padding: 1.25rem;\\r\\n  border-bottom: 1px solid #444c56;\\r\\n}\\r\\n\\r\\n.add__task > input {\\r\\n  width: 99%;\\r\\n  height: 100%;\\r\\n  border: none;\\r\\n  background: transparent;\\r\\n  font-style: italic;\\r\\n  font-size: 23px;\\r\\n  font-family: monospace, sans-serif;\\r\\n}\\r\\n\\r\\n.add__task > input::placeholder {\\r\\n  color: rgb(182, 181, 181);\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.list__item {\\r\\n  display: inline-flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  padding: 0 1.25rem;\\r\\n}\\r\\n\\r\\n.nav__items > li {\\r\\n  width: 100%;\\r\\n  border-bottom: 1px solid #444c56;\\r\\n}\\r\\n\\r\\n.list__item input[type='text'] {\\r\\n  width: 100%;\\r\\n  font-size: 23px;\\r\\n  font-weight: 400;\\r\\n  font-family: monospace, sans-serif;\\r\\n  text-align: start;\\r\\n  padding: 1.25rem;\\r\\n  border: none;\\r\\n  color: white;\\r\\n  background-color: #22272e;\\r\\n}\\r\\n\\r\\n.list__item input[type='text'].active {\\r\\n  background-color: #fffeca;\\r\\n  color: #22272e;\\r\\n}\\r\\n\\r\\n.clear {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.clear button {\\r\\n  width: 100%;\\r\\n  color: rgb(255 255 255);\\r\\n  padding: 1.25rem;\\r\\n  background-color: #36b73d;\\r\\n  border-bottom-right-radius: 5px;\\r\\n  border-bottom-left-radius: 5px;\\r\\n}\\r\\n\\r\\n.checked {\\r\\n  text-decoration: line-through;\\r\\n  text-decoration-color: #e7f2ffb9;\\r\\n  font-weight: 400;\\r\\n  font-style: italic !important;\\r\\n  color: #398df3 !important;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"] {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\ninput[type=\\\"text\\\"]:focus {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 995px) {\\r\\n  .container {\\r\\n    width: 93%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/images/icons/enter.png":
/*!*******************************************!*\
  !*** ./src/assets/images/icons/enter.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"578c842392ca2d4f5e1b.png\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/images/icons/enter.png?");

/***/ }),

/***/ "./src/assets/images/icons/ico-three-dots.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/icons/ico-three-dots.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c9e5ab4df1c5dc8aab08.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/images/icons/ico-three-dots.svg?");

/***/ }),

/***/ "./src/assets/images/icons/ico-trash.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/icons/ico-trash.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7747e0f66efb7f7a1be6.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/images/icons/ico-trash.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;