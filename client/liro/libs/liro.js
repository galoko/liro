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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../network/dist/index.js":
/*!********************************!*\
  !*** ../network/dist/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,\"a\",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p=\"\",o(o.s=0)}([function(e,t,o){\"use strict\";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,\"__esModule\",{value:!0}),t.LiroProtocols=void 0;const r=n(o(1));class i{}t.LiroProtocols=i,i.SomeProtocol=r.default},function(e,t,o){\"use strict\";var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function c(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,c)}u((n=n.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,\"__esModule\",{value:!0});const i=o(2),s=r(o(3));t.default=class{constructor(e,t){this.httpServerUrl=e,this.websocketServerUrl=t,this.boardWebSocketConnection=null}registerNewUser(e){return n(this,void 0,void 0,(function*(){const t=yield fetch(this.httpServerUrl+\"/register\",{method:\"POST\",body:JSON.stringify(e)});return yield t.json()}))}getUserInfo(e){return n(this,void 0,void 0,(function*(){const t=yield fetch(`${this.httpServerUrl}/user/${e}`);return yield t.json()}))}getOrCreateFirstBoard(){return n(this,void 0,void 0,(function*(){const e=yield fetch(this.httpServerUrl+\"/board/first\");return yield e.json()}))}sendPacket(e,t){var o;null===(o=this.boardWebSocketConnection)||void 0===o||o.send(JSON.stringify(t))}enterBoard(e,t,o){const n=()=>{const o=new s.default(`${this.websocketServerUrl}/board/${e}`);this.boardWebSocketConnection=o,o.on(\"open\",()=>{this.sendPacket(o,new i.RequestChangesAndSubscribeToNewChanges(t))}),o.on(\"message\",e=>{this.boardWebSocketConnection}),o.on(\"close\",()=>{setTimeout(()=>{this.boardWebSocketConnection===o&&n()},2e3)})};n()}exitBoard(){null!==this.boardWebSocketConnection&&(this.boardWebSocketConnection.close(),this.boardWebSocketConnection=null)}}},function(e,t,o){\"use strict\";var n;Object.defineProperty(t,\"__esModule\",{value:!0}),t.RequestChangesAndSubscribeToNewChanges=t.PacketHeader=t.PacketId=void 0,function(e){e[e.REQUEST_CHANGES_AND_SUBSCRIBE_TO_NEW_CHANGES=1]=\"REQUEST_CHANGES_AND_SUBSCRIBE_TO_NEW_CHANGES\"}(n=t.PacketId||(t.PacketId={}));class r{constructor(){this.packetId=0}}t.PacketHeader=r;t.RequestChangesAndSubscribeToNewChanges=class extends r{constructor(e){super(),this.packetId=n.REQUEST_CHANGES_AND_SUBSCRIBE_TO_NEW_CHANGES,this.lastChangeId=e}}},function(e,t,o){\"use strict\";e.exports=function(){throw new Error(\"ws does not work in the browser. Browser clients must use the native WebSocket object\")}}])}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbmV0d29yay9kaXN0L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL25ldHdvcmsvZGlzdC9pbmRleC5qcz9kZjI2Il0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuTGlyb05ldHdvcms9dCgpOmUuTGlyb05ldHdvcms9dCgpfSh3aW5kb3csKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG8obil7aWYodFtuXSlyZXR1cm4gdFtuXS5leHBvcnRzO3ZhciByPXRbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLG8pLHIubD0hMCxyLmV4cG9ydHN9cmV0dXJuIG8ubT1lLG8uYz10LG8uZD1mdW5jdGlvbihlLHQsbil7by5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0Om59KX0sby5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG8udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9byhlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG8ucihuKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIHIgaW4gZSlvLmQobixyLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwscikpO3JldHVybiBufSxvLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG8uZCh0LFwiYVwiLHQpLHR9LG8ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sby5wPVwiXCIsbyhvLnM9MCl9KFtmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5MaXJvUHJvdG9jb2xzPXZvaWQgMDtjb25zdCByPW4obygxKSk7Y2xhc3MgaXt9dC5MaXJvUHJvdG9jb2xzPWksaS5Tb21lUHJvdG9jb2w9ci5kZWZhdWx0fSxmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49dGhpcyYmdGhpcy5fX2F3YWl0ZXJ8fGZ1bmN0aW9uKGUsdCxvLG4pe3JldHVybiBuZXcob3x8KG89UHJvbWlzZSkpKChmdW5jdGlvbihyLGkpe2Z1bmN0aW9uIHMoZSl7dHJ5e3Uobi5uZXh0KGUpKX1jYXRjaChlKXtpKGUpfX1mdW5jdGlvbiBjKGUpe3RyeXt1KG4udGhyb3coZSkpfWNhdGNoKGUpe2koZSl9fWZ1bmN0aW9uIHUoZSl7dmFyIHQ7ZS5kb25lP3IoZS52YWx1ZSk6KHQ9ZS52YWx1ZSx0IGluc3RhbmNlb2Ygbz90Om5ldyBvKChmdW5jdGlvbihlKXtlKHQpfSkpKS50aGVuKHMsYyl9dSgobj1uLmFwcGx5KGUsdHx8W10pKS5uZXh0KCkpfSkpfSxyPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IGk9bygyKSxzPXIobygzKSk7dC5kZWZhdWx0PWNsYXNze2NvbnN0cnVjdG9yKGUsdCl7dGhpcy5odHRwU2VydmVyVXJsPWUsdGhpcy53ZWJzb2NrZXRTZXJ2ZXJVcmw9dCx0aGlzLmJvYXJkV2ViU29ja2V0Q29ubmVjdGlvbj1udWxsfXJlZ2lzdGVyTmV3VXNlcihlKXtyZXR1cm4gbih0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2NvbnN0IHQ9eWllbGQgZmV0Y2godGhpcy5odHRwU2VydmVyVXJsK1wiL3JlZ2lzdGVyXCIse21ldGhvZDpcIlBPU1RcIixib2R5OkpTT04uc3RyaW5naWZ5KGUpfSk7cmV0dXJuIHlpZWxkIHQuanNvbigpfSkpfWdldFVzZXJJbmZvKGUpe3JldHVybiBuKHRoaXMsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24qKCl7Y29uc3QgdD15aWVsZCBmZXRjaChgJHt0aGlzLmh0dHBTZXJ2ZXJVcmx9L3VzZXIvJHtlfWApO3JldHVybiB5aWVsZCB0Lmpzb24oKX0pKX1nZXRPckNyZWF0ZUZpcnN0Qm9hcmQoKXtyZXR1cm4gbih0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKigpe2NvbnN0IGU9eWllbGQgZmV0Y2godGhpcy5odHRwU2VydmVyVXJsK1wiL2JvYXJkL2ZpcnN0XCIpO3JldHVybiB5aWVsZCBlLmpzb24oKX0pKX1zZW5kUGFja2V0KGUsdCl7dmFyIG87bnVsbD09PShvPXRoaXMuYm9hcmRXZWJTb2NrZXRDb25uZWN0aW9uKXx8dm9pZCAwPT09b3x8by5zZW5kKEpTT04uc3RyaW5naWZ5KHQpKX1lbnRlckJvYXJkKGUsdCxvKXtjb25zdCBuPSgpPT57Y29uc3Qgbz1uZXcgcy5kZWZhdWx0KGAke3RoaXMud2Vic29ja2V0U2VydmVyVXJsfS9ib2FyZC8ke2V9YCk7dGhpcy5ib2FyZFdlYlNvY2tldENvbm5lY3Rpb249byxvLm9uKFwib3BlblwiLCgpPT57dGhpcy5zZW5kUGFja2V0KG8sbmV3IGkuUmVxdWVzdENoYW5nZXNBbmRTdWJzY3JpYmVUb05ld0NoYW5nZXModCkpfSksby5vbihcIm1lc3NhZ2VcIixlPT57dGhpcy5ib2FyZFdlYlNvY2tldENvbm5lY3Rpb259KSxvLm9uKFwiY2xvc2VcIiwoKT0+e3NldFRpbWVvdXQoKCk9Pnt0aGlzLmJvYXJkV2ViU29ja2V0Q29ubmVjdGlvbj09PW8mJm4oKX0sMmUzKX0pfTtuKCl9ZXhpdEJvYXJkKCl7bnVsbCE9PXRoaXMuYm9hcmRXZWJTb2NrZXRDb25uZWN0aW9uJiYodGhpcy5ib2FyZFdlYlNvY2tldENvbm5lY3Rpb24uY2xvc2UoKSx0aGlzLmJvYXJkV2ViU29ja2V0Q29ubmVjdGlvbj1udWxsKX19fSxmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG47T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5SZXF1ZXN0Q2hhbmdlc0FuZFN1YnNjcmliZVRvTmV3Q2hhbmdlcz10LlBhY2tldEhlYWRlcj10LlBhY2tldElkPXZvaWQgMCxmdW5jdGlvbihlKXtlW2UuUkVRVUVTVF9DSEFOR0VTX0FORF9TVUJTQ1JJQkVfVE9fTkVXX0NIQU5HRVM9MV09XCJSRVFVRVNUX0NIQU5HRVNfQU5EX1NVQlNDUklCRV9UT19ORVdfQ0hBTkdFU1wifShuPXQuUGFja2V0SWR8fCh0LlBhY2tldElkPXt9KSk7Y2xhc3Mgcntjb25zdHJ1Y3Rvcigpe3RoaXMucGFja2V0SWQ9MH19dC5QYWNrZXRIZWFkZXI9cjt0LlJlcXVlc3RDaGFuZ2VzQW5kU3Vic2NyaWJlVG9OZXdDaGFuZ2VzPWNsYXNzIGV4dGVuZHMgcntjb25zdHJ1Y3RvcihlKXtzdXBlcigpLHRoaXMucGFja2V0SWQ9bi5SRVFVRVNUX0NIQU5HRVNfQU5EX1NVQlNDUklCRV9UT19ORVdfQ0hBTkdFUyx0aGlzLmxhc3RDaGFuZ2VJZD1lfX19LGZ1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt0aHJvdyBuZXcgRXJyb3IoXCJ3cyBkb2VzIG5vdCB3b3JrIGluIHRoZSBicm93c2VyLiBCcm93c2VyIGNsaWVudHMgbXVzdCB1c2UgdGhlIG5hdGl2ZSBXZWJTb2NrZXQgb2JqZWN0XCIpfX1dKX0pKTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../network/dist/index.js\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst liro_core_1 = __webpack_require__(/*! liro-core */ \"liro-core\");\r\nconst liro_network_1 = __webpack_require__(/*! liro-network */ \"../network/dist/index.js\");\r\nfunction getCurrentUser(protocol) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const TOKEN_SLOT = \"liro-token\";\r\n        let token = localStorage.getItem(TOKEN_SLOT);\r\n        if (token === null) {\r\n            token = yield protocol.registerNewUser({});\r\n            localStorage.setItem(TOKEN_SLOT, token);\r\n        }\r\n        const userInfo = yield protocol.getUserInfo(token);\r\n        return userInfo;\r\n    });\r\n}\r\nfunction main() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        // находим корневой элемент\r\n        const root = document.getElementById(\"root\");\r\n        if (root === null) {\r\n            throw new Error(\"Cannot find root element.\");\r\n        }\r\n        // вешаем на него выбранный рендер\r\n        const render = new liro_core_1.default.LiroCanvasRender(root);\r\n        const protocol = new liro_network_1.LiroProtocols.SomeProtocol(\"http://37.79.251.74:3111\", \"ws://37.79.251.74:3112\");\r\n        const userInfo = yield getCurrentUser(protocol);\r\n        let boardId = userInfo.currentBoardId;\r\n        if (boardId === null) {\r\n            boardId = yield protocol.getFirstBoardId();\r\n        }\r\n    });\r\n}\r\nmain();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGlyb0NvcmUgZnJvbSBcImxpcm8tY29yZVwiXHJcbmltcG9ydCB7IExpcm9Qcm90b2NvbHMsIExpcm9Qcm90b2NvbCwgVXNlckluZm8gfSBmcm9tIFwibGlyby1uZXR3b3JrXCJcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKHByb3RvY29sOiBMaXJvUHJvdG9jb2wpOiBQcm9taXNlPFVzZXJJbmZvPiB7XHJcbiAgICBjb25zdCBUT0tFTl9TTE9UID0gXCJsaXJvLXRva2VuXCJcclxuICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFRPS0VOX1NMT1QpXHJcbiAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcclxuICAgICAgICB0b2tlbiA9IGF3YWl0IHByb3RvY29sLnJlZ2lzdGVyTmV3VXNlcih7fSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShUT0tFTl9TTE9ULCB0b2tlbilcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHByb3RvY29sLmdldFVzZXJJbmZvKHRva2VuKVxyXG4gICAgcmV0dXJuIHVzZXJJbmZvXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1haW4oKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAvLyDQvdCw0YXQvtC00LjQvCDQutC+0YDQvdC10LLQvtC5INGN0LvQtdC80LXQvdGCXHJcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXHJcbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIHJvb3QgZWxlbWVudC5cIilcclxuICAgIH1cclxuXHJcbiAgICAvLyDQstC10YjQsNC10Lwg0L3QsCDQvdC10LPQviDQstGL0LHRgNCw0L3QvdGL0Lkg0YDQtdC90LTQtdGAXHJcbiAgICBjb25zdCByZW5kZXIgPSBuZXcgTGlyb0NvcmUuTGlyb0NhbnZhc1JlbmRlcihyb290KVxyXG4gICAgY29uc3QgcHJvdG9jb2wgPSBuZXcgTGlyb1Byb3RvY29scy5Tb21lUHJvdG9jb2woXHJcbiAgICAgICAgXCJodHRwOi8vMzcuNzkuMjUxLjc0OjMxMTFcIixcclxuICAgICAgICBcIndzOi8vMzcuNzkuMjUxLjc0OjMxMTJcIlxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIocHJvdG9jb2wpXHJcblxyXG4gICAgbGV0IGJvYXJkSWQgPSB1c2VySW5mby5jdXJyZW50Qm9hcmRJZFxyXG4gICAgaWYgKGJvYXJkSWQgPT09IG51bGwpIHtcclxuICAgICAgICBib2FyZElkID0gYXdhaXQgcHJvdG9jb2wuZ2V0Rmlyc3RCb2FyZElkKClcclxuICAgIH1cclxufVxyXG5cclxubWFpbigpXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "liro-core":
/*!***************************!*\
  !*** external "LiroCore" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = LiroCore;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlyby1jb3JlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTGlyb0NvcmVcIj8wNzQ4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gTGlyb0NvcmU7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///liro-core\n");

/***/ })

/******/ });