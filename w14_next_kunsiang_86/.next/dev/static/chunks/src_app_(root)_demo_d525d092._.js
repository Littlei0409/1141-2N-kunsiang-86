(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
;
const Blog2_49 = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "6097d2bf0d3b57f992ef71db3220ea68ec0ecf2dbcb369642d3fb638f7040f7b") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6097d2bf0d3b57f992ef71db3220ea68ec0ecf2dbcb369642d3fb638f7040f7b";
    }
    const { id, img, category, title, descrip, removeItem } = t0;
    let t1;
    if ($[1] !== img) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: img,
            alt: "Coffee photo",
            className: "img blog-img"
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
            lineNumber: 23,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = img;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== category) {
        t2 = category === "lifestyle" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMugSaucer"], {
            className: "ml-1",
            color: "blue",
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
            lineNumber: 31,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGlobe"], {
            className: "ml-1",
            color: "blue",
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
            lineNumber: 31,
            columnNumber: 95
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = category;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== category || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex",
            children: [
                category,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
            lineNumber: 39,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = category;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== title) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = title;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== descrip) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: descrip
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = descrip;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "#",
            children: "read more"
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== id || $[14] !== removeItem) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "text-red-700 bg-red-100 capitalize px-2 py-1 hover:bg-red-300 rounded",
                    onClick: ()=>removeItem(id),
                    children: "delete"
                }, void 0, false, {
                    fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
                    lineNumber: 71,
                    columnNumber: 65
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = id;
        $[14] = removeItem;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== t3 || $[17] !== t4 || $[18] !== t5 || $[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "blog-content",
            children: [
                t3,
                t4,
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t3;
        $[17] = t4;
        $[18] = t5;
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== id || $[22] !== t1 || $[23] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "blog",
            children: [
                t1,
                t8
            ]
        }, id, true, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = id;
        $[22] = t1;
        $[23] = t8;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    return t9;
};
_c = Blog2_49;
const __TURBOPACK__default__export__ = Blog2_49;
var _c;
__turbopack_context__.k.register(_c, "Blog2_49");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(root)/demo/_assets/Wrapper/Blog2_49.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Blog2_49__Wrapper",
    componentId: "sc-d0d5b9b3-0"
})`
  :root {
    /* w5 -- blogs css */
    --primary: #645cff;
    --primary-dark: #3c3799;
    --grey: #64748b;
    --grey-light: #f1f5f9;
    --grey-dark: #0f172a;
    --border-radius: 0.2rem;
  }

  .img {
    width: 100%;
    height: 15rem;
    display: block;
    object-fit: cover;
  }

  .blogs {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 10px;
    color: var(--grey-dark);
    background-color: var(--grey-light);
    padding: 3rem 1.5rem;
  }

  .section-title h2 {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 1.2rem;
    letter-spacing: 1px;
    font-size: 1.5rem;
  }

  .section-title h3 {
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    font-size: 1.2rem;
  }

  .blogs-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .blogs-center2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: 2rem;
  }

  .blog {
    background-color: white;
    padding: 0.75rem;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
    border-radius: var(--border-radius);
  }

  .blog-content {
    margin-top: 0.5rem;
  }

  .blog-content span {
    text-transform: uppercase;
    color: var(--primary);
    letter-spacing: 1.5px;
    font-size: 0.8rem;
  }

  .blog-content h3 {
    text-transform: capitalize;
    margin: 0.5rem 0;
    letter-spacing: 1px;
    font-size: 1rem;
  }

  .blog-content p {
    color: var(--grey);
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }

  .blog-content a {
    text-transform: capitalize;
    color: var(--primary-dark);
    letter-spacing: 1px;
    font-size: 0.8rem;
  }

  .blog-content .footer {
    display: flex;
    justify-content: space-between;
  }

  .blog-content .btns {
    display: flex;
    justify-content: space-around;
    gap: 5px;
  }

  .btn {
    cursor: pointer;
    color: var(--primary);
    background: #eee;
    border: transparent;
    border-radius: var(--borderRadius);
    padding: 0.15rem 0.3rem;
    box-shadow: var(--shadow-1);
    transition: var(--transition);
    display: inline-block;
  }
  .btn:hover {
    color: var(--primary-dark);
    background-color: #ccc;
    box-shadow: var(--shadow-3);
  }

  .blogs-footer-btns {
    margin: 3rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .btn-add {
    padding: 0.5rem 1.2rem;
    font-size: 1.2rem;
    color: purple;
    background-color: lightskyblue;
  }

  .clear-all {
    padding: 0.5rem 1.2rem;
    font-size: 1.2rem;
    color: red;
    background-color: pink;
    cursor: pointer;
  }
  .clear-all:hover {
    color: red;
    background: rgba(255, 0, 0, 0.3);
  }

  .load-all {
    padding: 0.5rem 1.2rem;
    font-size: 1.2rem;
    color: blue;
    background-color: lightblue;
    cursor: pointer;
  }

  .load-all:hover {
    color: blue;
    background: rgba(0, 0, 255, 0.3);
  }

  /*
  ================
   item container
  ================
  */

  .item-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    transition: all 0.3s linear;
    padding: 0.25rem 0.25rem 0 0;
    border-radius: all 0.3s linear;
    text-transform: capitalize;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .mt-8 {
    margin-top: 2rem;
  }

  .ml-1 {
    margin-left: 0.25rem;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .edit-btn,
  .delete-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    letter-spacing: 1px;
    cursor: pointer;
    font-size: 0.7rem;
    margin: 0 0.15rem;
    transition: all 0.3s linear;
    padding: 0.2rem 0.4rem;
  }
  .edit-btn {
    color: rgba(0, 0, 255, 0.5);
    background-color: rgba(0, 0, 255, 0.1);
  }
  .edit-btn:hover {
    color: blue;
    background-color: rgba(0, 0, 255, 0.3);
    font-weight: 500;
  }
  .delete-btn {
    color: rgba(255, 0, 0, 0.5);
    background: rgba(255, 0, 0, 0.1);
    border-color: rgba(255, 0, 0, 0.1);
    color: rgba(255, 0, 0, 0.7);
  }
  .delete-btn:hover {
    color: red;
    background: rgba(255, 0, 0, 0.2);
    font-weight: 600;
  }

  /*
  ================
   Alert
  ================
  */
  .alert {
    margin-bottom: 1rem;
    height: 1.25rem;
    display: grid;
    align-items: center;
    text-align: center;
    font-size: 0.7rem;
    border-radius: 0.25rem;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
  }
  .alert-danger {
    color: #721c24;
    background: #f8d7da;
  }
  .alert-success {
    color: #155724;
    background: #d4edda;
  }

  @media screen and (min-width: 550px) {
    .blogs-center {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 800px) {
    .blogs-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .blogs-center {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (min-width: 1200px) {
    .blogs-center {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media screen and (min-width: 1400px) {
    .blogs-center {
      grid-template-columns: repeat(6, 1fr);
    }
  }
`;
const __TURBOPACK__default__export__ = Wrapper;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(root)/demo/_components/Alert_49.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Alert_49 = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "88af3bbf4948b0e37500a1db41d52f678715c2e286fcb2ff1503f66496c3eead") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "88af3bbf4948b0e37500a1db41d52f678715c2e286fcb2ff1503f66496c3eead";
    }
    const { alert, showAlert } = t0;
    let t1;
    if ($[1] !== showAlert) {
        t1 = ()=>{
            const timeout = setTimeout(()=>{
                showAlert();
            }, 3000);
            return ()=>clearTimeout(timeout);
        };
        $[1] = showAlert;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1);
    if (alert.type === "success") {
        let t2;
        if ($[3] !== alert.msg) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "grid items-center text-center capitalize text-green-700 bg-green-200",
                children: alert.msg
            }, void 0, false, {
                fileName: "[project]/src/app/(root)/demo/_components/Alert_49.jsx",
                lineNumber: 32,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[3] = alert.msg;
            $[4] = t2;
        } else {
            t2 = $[4];
        }
        return t2;
    } else {
        if (alert.type === "danger") {
            let t2;
            if ($[5] !== alert.msg) {
                t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "grid items-center text-center capitalize text-red-700 bg-red-200",
                    children: alert.msg
                }, void 0, false, {
                    fileName: "[project]/src/app/(root)/demo/_components/Alert_49.jsx",
                    lineNumber: 43,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
                $[5] = alert.msg;
                $[6] = t2;
            } else {
                t2 = $[6];
            }
            return t2;
        }
    }
};
_s(Alert_49, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Alert_49;
const __TURBOPACK__default__export__ = Alert_49;
var _c;
__turbopack_context__.k.register(_c, "Alert_49");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(root)/demo/_assets/data/blogData.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"title":"Seven Reasons Why Coffee Is Awesome","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-1.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-1.jpg"},{"id":2,"title":"Travel To Paris","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-2.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-2.jpg"},{"id":3,"title":"Coffee Brings Friendship","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-3.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-3.jpg"},{"id":4,"title":"Coffee Make You Feel Good","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-4.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-4.jpg"},{"id":5,"title":"Coffee Make You Calm","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-5.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-5.jpg"},{"id":6,"title":"101 Tower In Taipei","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-6.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-6.jpg"},{"id":7,"title":"Sun Rise From The Mountain","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-7.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-7.jpg"},{"id":8,"title":"Serene Lake With Trees","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-8.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-8.jpg"},{"id":9,"title":"Rocks Of Queen Head In Yehliu Taiwan","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-9.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-9.jpg"}]);}),
"[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_blogContext_49.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogContextProvider_49",
    ()=>BlogContextProvider_49,
    "useBlogContext_49",
    ()=>useBlogContext_49
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$data$2f$blogData$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/_assets/data/blogData.json (json)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const BlogContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const BlogContextProvider_49 = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "761378c8794860ce9cfcc36d37dc0f8e23ce0c4e9e721e432f64750ecf790b57") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "761378c8794860ce9cfcc36d37dc0f8e23ce0c4e9e721e432f64750ecf790b57";
    }
    const { children } = t0;
    const [name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("huhao");
    const [id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(213417149);
    const [blogs_49, setBlogs_49] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$data$2f$blogData$2e$json__$28$json$29$__["default"]);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            show: false,
            msg: "",
            type: ""
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [alert, setAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (t3, t4, t5)=>{
            const show = t3 === undefined ? false : t3;
            const msg = t4 === undefined ? "" : t4;
            const type = t5 === undefined ? "" : t5;
            setAlert({
                show,
                msg,
                type
            });
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const showAlert = t2;
    let t3;
    if ($[3] !== blogs_49) {
        t3 = (id_0)=>{
            showAlert(true, "blog removed", "danger");
            setBlogs_49(blogs_49.filter((blog)=>blog.id !== id_0));
        };
        $[3] = blogs_49;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const removeItem = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            showAlert(true, "clear all blogs", "danger");
            setBlogs_49([]);
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const clearAllBlogs = t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ()=>{
            showAlert(true, "load all blogs", "success");
            setBlogs_49([]);
            setBlogs_49(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$data$2f$blogData$2e$json__$28$json$29$__["default"]);
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    const loadAllBlogs = t5;
    let t6;
    if ($[7] !== alert || $[8] !== blogs_49 || $[9] !== id || $[10] !== name || $[11] !== removeItem) {
        t6 = {
            name,
            id,
            blogs_49,
            alert,
            showAlert,
            removeItem,
            clearAllBlogs,
            loadAllBlogs
        };
        $[7] = alert;
        $[8] = blogs_49;
        $[9] = id;
        $[10] = name;
        $[11] = removeItem;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== children || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogContext.Provider, {
            value: t6,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_blogContext_49.jsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = children;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    return t7;
};
_s(BlogContextProvider_49, "YotR9C1xzLyUMrey3RDmlFx7YLU=");
_c = BlogContextProvider_49;
const useBlogContext_49 = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "761378c8794860ce9cfcc36d37dc0f8e23ce0c4e9e721e432f64750ecf790b57") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "761378c8794860ce9cfcc36d37dc0f8e23ce0c4e9e721e432f64750ecf790b57";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BlogContext);
};
_s1(useBlogContext_49, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "BlogContextProvider_49");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_components$2f$Blog2_49$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$Wrapper$2f$Blog2_49$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/_assets/Wrapper/Blog2_49.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_components$2f$Alert_49$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/_components/Alert_49.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_blogContext_49$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_blogContext_49.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const BlogLocalJsonPage2_49 = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6cc94dc0f99718509667ffd7c71a75ed1cd0d910d84e305c3a7a29b727b4839b") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6cc94dc0f99718509667ffd7c71a75ed1cd0d910d84e305c3a7a29b727b4839b";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_blogContext_49$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlogContextProvider_49"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Content_49, {}, void 0, false, {
                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
                lineNumber: 19,
                columnNumber: 34
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = BlogLocalJsonPage2_49;
const Content_49 = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "6cc94dc0f99718509667ffd7c71a75ed1cd0d910d84e305c3a7a29b727b4839b") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6cc94dc0f99718509667ffd7c71a75ed1cd0d910d84e305c3a7a29b727b4839b";
    }
    const { name, id, blogs_49, alert, showAlert, removeItem, clearAllBlogs, loadAllBlogs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_blogContext_49$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlogContext_49"])();
    let t0;
    if ($[1] !== alert || $[2] !== showAlert) {
        t0 = alert.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_components$2f$Alert_49$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            alert: alert,
            showAlert: showAlert
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
            lineNumber: 46,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = alert;
        $[2] = showAlert;
        $[3] = t0;
    } else {
        t0 = $[3];
    }
    let t1;
    if ($[4] !== id || $[5] !== name) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-title",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: [
                    "blogs context from local json 2 -- ",
                    name,
                    ", ",
                    id,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
                lineNumber: 55,
                columnNumber: 41
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = id;
        $[5] = name;
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== blogs_49 || $[8] !== removeItem) {
        let t3;
        if ($[10] !== removeItem) {
            t3 = (item)=>{
                const { id: id_0, title, descrip, category, img } = item;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_components$2f$Blog2_49$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: id_0,
                    title: title,
                    descrip: descrip,
                    category: category,
                    img: img,
                    removeItem: removeItem
                }, id_0, false, {
                    fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
                    lineNumber: 74,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            };
            $[10] = removeItem;
            $[11] = t3;
        } else {
            t3 = $[11];
        }
        t2 = blogs_49.map(t3);
        $[7] = blogs_49;
        $[8] = removeItem;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[12] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "blogs-center",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t2;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    let t4;
    if ($[14] !== clearAllBlogs) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded",
            onClick: clearAllBlogs,
            children: "clear all blogs"
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = clearAllBlogs;
        $[15] = t4;
    } else {
        t4 = $[15];
    }
    let t5;
    if ($[16] !== loadAllBlogs) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded",
            onClick: loadAllBlogs,
            children: "load all blogs"
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
            lineNumber: 106,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = loadAllBlogs;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] !== t4 || $[19] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center gap-8 mt-8",
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
            lineNumber: 114,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t4;
        $[19] = t5;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] !== t1 || $[22] !== t3 || $[23] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "blogs",
            children: [
                t1,
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
            lineNumber: 123,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t1;
        $[22] = t3;
        $[23] = t6;
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    let t8;
    if ($[25] !== t0 || $[26] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$Wrapper$2f$Blog2_49$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                t0,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
            lineNumber: 133,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t0;
        $[26] = t7;
        $[27] = t8;
    } else {
        t8 = $[27];
    }
    return t8;
};
_s(Content_49, "Ag5+VaGGxGipr9QBoH9L5ZEOs0M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_blogContext_49$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBlogContext_49"]
    ];
});
_c1 = Content_49;
const __TURBOPACK__default__export__ = BlogLocalJsonPage2_49;
var _c, _c1;
__turbopack_context__.k.register(_c, "BlogLocalJsonPage2_49");
__turbopack_context__.k.register(_c1, "Content_49");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28root%29_demo_d525d092._.js.map