(window.webpackJsonp=window.webpackJsonp||[]).push([[24,28],{234:function(t,n,e){"use strict";e.r(n);e(19),e(40),e(48);var l={components:{Navigation:function(){return Promise.resolve().then(e.bind(null,237))}},data:function(){return{isSticky:!1}},methods:{mobiletoggleClass:function(t,n){var e=document.querySelector("#offcanvas-menu");"addClass"===t?e.classList.add(n):e.classList.remove(n)}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var n=window.scrollY;t.isSticky=n>=200}))}},o=e(47),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"header-area header-default transparent sticky-header",class:{"is-sticky":t.isSticky}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 col-sm-4 col-lg-3"},[e("div",{staticClass:"header-logo-area"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo-main",attrs:{src:"/images/logo/white-logo.png",alt:"Logo"}}),t._v(" "),e("img",{staticClass:"logo-light",attrs:{src:"/images/logo/dark-logo.png",alt:"Logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-6 col-sm-8 col-lg-9"},[e("div",{staticClass:"header-align"},[e("div",{staticClass:"header-navigation-area navigation-style-two"},[e("Navigation")],1),t._v(" "),e("div",{staticClass:"header-action-area"},[e("button",{staticClass:"btn-menu d-xl-none",on:{click:function(n){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")]),t._v(" "),e("n-link",{staticClass:"btn-theme btn-style",attrs:{to:"/contact"}},[t._v("\n                            Contact\n                            "),e("i",{staticClass:"icon-style icofont-double-right"})])],1)])])])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Navigation:e(237).default,Header:e(234).default})},237:function(t,n,e){"use strict";e.r(n);var l=e(47),component=Object(l.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"main-menu nav justify-content-center"},[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"has-submenu"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/careers"}},[t._v("Careers")])],1)])}),[],!1,null,null,null);n.default=component.exports}}]);