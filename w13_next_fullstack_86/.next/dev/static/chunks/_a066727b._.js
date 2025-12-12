(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(root)/demo/_assets/data/blogData.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"title":"Seven Reasons Why Coffee Is Awesome","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-1.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-1.jpg"},{"id":2,"title":"Travel To Paris","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-2.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-2.jpg"},{"id":3,"title":"Coffee Brings Friendship","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-3.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-3.jpg"},{"id":4,"title":"Coffee Make You Feel Good","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-4.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-4.jpg"},{"id":5,"title":"Coffee Make You Calm","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-5.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-5.jpg"},{"id":6,"title":"101 Tower In Taipei","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-6.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-6.jpg"},{"id":7,"title":"Sun Rise From The Mountain","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-7.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-7.jpg"},{"id":8,"title":"Serene Lake With Trees","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-8.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-8.jpg"},{"id":9,"title":"Rocks Of Queen Head In Yehliu Taiwan","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-9.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-9.jpg"}]);}),
"[project]/src/app/(root)/demo/_components/Blog2_28.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/fa6'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
;
const Blog2_28 = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "55db11bb3e5f81c1c7dd83d377b499117a49bb325a004b83b68869917f6da0f4") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "55db11bb3e5f81c1c7dd83d377b499117a49bb325a004b83b68869917f6da0f4";
    }
    const { id, img, category, title, descrip, removeItem } = t0;
    let t1;
    if ($[1] !== img) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: img,
            alt: "Coffee photo",
            className: "img blog-img"
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/_components/Blog2_28.jsx",
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
        t2 = category === "lifestyle" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaMugSaucer, {
            className: "ml-1",
            color: "blue",
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/_components/Blog2_28.jsx",
            lineNumber: 31,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaGlobe, {
            className: "ml-1",
            color: "blue",
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/_components/Blog2_28.jsx",
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
            fileName: "[project]/src/app/(root)/demo/_components/Blog2_28.jsx",
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
            fileName: "[project]/src/app/(root)/demo/_components/Blog2_28.jsx",
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
            fileName: "[project]/src/app/(root)/demo/_components/Blog2_28.jsx",
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
            fileName: "[project]/src/app/(root)/demo/_components/Blog2_28.jsx",
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
                    fileName: "[project]/src/app/(root)/demo/_components/Blog2_28.jsx",
                    lineNumber: 71,
                    columnNumber: 65
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(root)/demo/_components/Blog2_28.jsx",
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
            fileName: "[project]/src/app/(root)/demo/_components/Blog2_28.jsx",
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
            fileName: "[project]/src/app/(root)/demo/_components/Blog2_28.jsx",
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
_c = Blog2_28;
const __TURBOPACK__default__export__ = Blog2_28;
var _c;
__turbopack_context__.k.register(_c, "Blog2_28");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(root)/demo/_assets/wrapper/Blog2_28.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Blog2_28__Wrapper",
    componentId: "sc-c61f8bd7-0"
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
"[project]/src/app/(root)/demo/_components/Alert_28.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
'use client';
;
;
const Alert_28 = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "4d45e4730b30d4ea6d9e49cee94a2cb379236b96b470bb4d57cabbccbd920c22") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4d45e4730b30d4ea6d9e49cee94a2cb379236b96b470bb4d57cabbccbd920c22";
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
                fileName: "[project]/src/app/(root)/demo/_components/Alert_28.jsx",
                lineNumber: 34,
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
                    fileName: "[project]/src/app/(root)/demo/_components/Alert_28.jsx",
                    lineNumber: 45,
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
_s(Alert_28, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Alert_28;
const __TURBOPACK__default__export__ = Alert_28;
var _c;
__turbopack_context__.k.register(_c, "Alert_28");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(root)/demo/blog_28/localjson_28/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$data$2f$blogData$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/_assets/data/blogData.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_components$2f$Blog2_28$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/_components/Blog2_28.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$wrapper$2f$Blog2_28$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/_assets/wrapper/Blog2_28.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_components$2f$Alert_28$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/_components/Alert_28.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const BlogLocalJsonPage2_28 = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "e06e297780efa4979618de4f6321451b315c1011fcd61ec9e822e5396657a015") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e06e297780efa4979618de4f6321451b315c1011fcd61ec9e822e5396657a015";
    }
    const [name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("chuanfu");
    const [id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(213410128);
    const [blogs_28, setBlogs_28] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$data$2f$blogData$2e$json__$28$json$29$__["default"]);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            show: false,
            msg: "",
            type: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [alert, setAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (t2, t3, t4)=>{
            const show = t2 === undefined ? false : t2;
            const msg = t3 === undefined ? "" : t3;
            const type = t4 === undefined ? "" : t4;
            setAlert({
                show,
                msg,
                type
            });
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const showAlert = t1;
    let t2;
    if ($[3] !== blogs_28) {
        t2 = (id_0)=>{
            showAlert(true, "blog removed", "danger");
            setBlogs_28(blogs_28.filter((blog)=>blog.id !== id_0));
        };
        $[3] = blogs_28;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const removeItem = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ()=>{
            showAlert(true, "clear all blogs", "danger");
            setBlogs_28([]);
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const clearAllBlogs = t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            showAlert(true, "load all blogs", "success");
            setBlogs_28([]);
            setBlogs_28(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$data$2f$blogData$2e$json__$28$json$29$__["default"]);
        };
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const loadAllBlogs = t4;
    let t5;
    if ($[7] !== alert) {
        t5 = alert.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_components$2f$Alert_28$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            alert: alert,
            showAlert: showAlert
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_28/localjson_28/page.jsx",
            lineNumber: 86,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = alert;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== id || $[10] !== name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-title",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: [
                    "blogs from local json 2 -- ",
                    name,
                    ", ",
                    id,
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(root)/demo/blog_28/localjson_28/page.jsx",
                lineNumber: 94,
                columnNumber: 41
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_28/localjson_28/page.jsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = id;
        $[10] = name;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== blogs_28 || $[13] !== removeItem) {
        let t8;
        if ($[15] !== removeItem) {
            t8 = (item)=>{
                const { id: id_1, title, descrip, category, img } = item;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_components$2f$Blog2_28$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: id_1,
                    title: title,
                    descrip: descrip,
                    category: category,
                    img: img,
                    removeItem: removeItem
                }, id_1, false, {
                    fileName: "[project]/src/app/(root)/demo/blog_28/localjson_28/page.jsx",
                    lineNumber: 113,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            };
            $[15] = removeItem;
            $[16] = t8;
        } else {
            t8 = $[16];
        }
        t7 = blogs_28.map(t8);
        $[12] = blogs_28;
        $[13] = removeItem;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[17] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "blogs-center",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_28/localjson_28/page.jsx",
            lineNumber: 129,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center gap-8 mt-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded",
                    onClick: clearAllBlogs,
                    children: "clear all blogs"
                }, void 0, false, {
                    fileName: "[project]/src/app/(root)/demo/blog_28/localjson_28/page.jsx",
                    lineNumber: 137,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded",
                    onClick: loadAllBlogs,
                    children: "load all blogs"
                }, void 0, false, {
                    fileName: "[project]/src/app/(root)/demo/blog_28/localjson_28/page.jsx",
                    lineNumber: 137,
                    columnNumber: 233
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(root)/demo/blog_28/localjson_28/page.jsx",
            lineNumber: 137,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t6 || $[21] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "blogs",
            children: [
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(root)/demo/blog_28/localjson_28/page.jsx",
            lineNumber: 144,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t6;
        $[21] = t8;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== t10 || $[24] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$wrapper$2f$Blog2_28$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                t5,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(root)/demo/blog_28/localjson_28/page.jsx",
            lineNumber: 153,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t10;
        $[24] = t5;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    return t11;
};
_s(BlogLocalJsonPage2_28, "8FOq+tqFsU7y1RI8GV/ea3wwEyA=");
_c = BlogLocalJsonPage2_28;
const __TURBOPACK__default__export__ = BlogLocalJsonPage2_28;
var _c;
__turbopack_context__.k.register(_c, "BlogLocalJsonPage2_28");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_a066727b._.js.map