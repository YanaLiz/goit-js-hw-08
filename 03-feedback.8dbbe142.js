function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function g(e,t,n){var r,i,o,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function S(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=o}function O(){var e=m();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?v(n,o-(e-c)):n}(e))}function T(e){return f=void 0,g&&r?y(e):(r=i=void 0,a)}function h(){var e=m(),n=j(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},h.flush=function(){return void 0===f?a:T(m())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};let y=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form textarea");y.addEventListener("submit",e(t)(T,500)),S.addEventListener("input",e(t)(O,500)),y.addEventListener("input",(e=>{j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j)),console.log(j)}));let j={};function O(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}function T(e){e.preventDefault(),e.currentTarget.reset(),j[e.target.name]=e.target.value,localStorage.removeItem("feedback-form-state")}!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(value=t.email||"",S.value=t.message||"")}(),y.addEventListener("input",e(t)(O,500)),y.addEventListener("submit",T);
//# sourceMappingURL=03-feedback.8dbbe142.js.map
