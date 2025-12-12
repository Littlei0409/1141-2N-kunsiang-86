(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(root)/tutorials/_assets/_wrapper/Tutorials_28.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Tutorials_28__Wrapper",
    componentId: "sc-2b207e17-0"
})`
  .container {
    background: #f8fafc;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: #0f172a;
    width: 95vw;
    height: 100vw;
    margin: 0 auto;
    max-width: 1120px;
    text-align: center;
    padding-top: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    margin-bottom: 0.75rem;
    font-weight: 400;
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 3.052rem;
  }

  h2 {
    font-size: 2.441rem;
  }

  h3 {
    font-size: 1.953rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  small,
  .text-small {
    font-size: 0.875rem;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }

  .img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  /* buttons */

  .btn {
    cursor: pointer;
    color: #fff;
    background: #645cff;
    border: transparent;
    border-radius: 0.25rem;
    letter-spacing: 1px;
    padding: 0.25rem 0.5rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transition: 0.3s ease-in-out all;
    text-transform: capitalize;
    display: inline-block;
  }
  .btn:hover {
    background: #3c3799;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .btn-hipster {
    color: #645cff;
    background: #c1beff;
  }
  .btn-hipster:hover {
    color: #c1beff;
    background: #3c3799;
  }
  .btn-block {
    width: 100%;
  }

  /* alerts */
  .alert {
    padding: 0.375rem 0.75rem;
    margin: 1rem 0;
    border-color: transparent;
    border-radius: 0.25rem;
  }

  .alert-danger {
    color: #842029;
    background: #f8d7da;
  }
  .alert-success {
    color: #0f5132;
    background: #d1e7dd;
  }
  /* form */

  .form {
    width: 90vw;
    max-width: 600px;
    background: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
  }
  .form-label {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
  }

  .form-row {
    margin-bottom: 1rem;
  }

  .form-textarea {
    height: 7rem;
  }
  ::placeholder {
    font-family: inherit;
    color: #94a3b8;
  }
  .form-alert {
    color: #842029;
    letter-spacing: 1px;
    text-transform: capitalize;
  }
  /* extra styles */
  .form .form-label {
    text-align: left;
  }
  .form .btn-block {
    margin-top: 0.5rem;
  }

  /* alert */

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 6rem;
    height: 6rem;
    border: 5px solid #e2e8f0;
    border-radius: 50%;
    border-top-color: #645cff;
    animation: spinner 0.6s linear infinite;
  }
  .loading {
    margin: 0 auto;
  }
  /* title */

  .title {
    text-align: center;
  }

  .title-underline {
    background: #645cff;
    width: 7rem;
    height: 0.25rem;
    margin: 0 auto;
    margin-top: -1rem;
  }

  .users {
    max-width: 90vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem auto;
  }
  .users li {
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    text-align: left;
  }
  .users img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1.5rem;
  }
  .users h5 {
    margin-bottom: 0;
  }
  .users a {
    color: #645cff;
    text-transform: capitalize;
  }

  .navbar {
    padding: 1rem;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
  }
  .navbar h5 {
    font-weight: bold;
    margin-bottom: 0;
  }
  .nav-container {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
  }
  .nav-links {
    display: flex;
    gap: 1rem;
  }
  .nav-links a {
    text-transform: capitalize;
    color: #645cff;
    cursor: pointer;
  }
  .user-container {
    display: flex;
    gap: 1rem;
  }
  .user-container p {
    margin-bottom: 0;
  }

  .user-container .btn {
    font-size: 0.75rem;
    letter-spacing: 1px;
    padding: 0.15rem 0.5rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    transition: 0.3s ease-in-out all;
    text-transform: capitalize;
    display: inline-block;
  }
`;
const __TURBOPACK__default__export__ = Wrapper;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(root)/tutorials/_assets/_data/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "data",
    ()=>data,
    "people",
    ()=>people
]);
const data = [
    {
        id: 1,
        name: 'john'
    },
    {
        id: 2,
        name: 'peter'
    },
    {
        id: 3,
        name: 'susan'
    },
    {
        id: 4,
        name: 'anna'
    }
];
const people = [
    {
        id: 1,
        name: 'bob',
        nickName: 'Stud Muffin'
    },
    {
        id: 2,
        name: 'peter'
    },
    {
        id: 3,
        name: 'oliver',
        images: [
            {
                small: {
                    url: 'https://res.cloudinary.com/diqqf3eq2/image/upload/ar_1:1,bo_5px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1595959121/person-1_aufeoq.jpg'
                }
            }
        ]
    },
    {
        id: 4,
        name: 'david'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(root)/tutorials/context/2_context_people_28/_context.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PeopleContextProvider_28",
    ()=>PeopleContextProvider_28,
    "usePeopleContext_28",
    ()=>usePeopleContext_28
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$tutorials$2f$_assets$2f$_data$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/tutorials/_assets/_data/data.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const PeopleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const PeopleContextProvider_28 = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "9a6ef6254b08d2dc41f5f250005d7a7f7e57b156a071aed583e701a4a5cbec48") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a6ef6254b08d2dc41f5f250005d7a7f7e57b156a071aed583e701a4a5cbec48";
    }
    const { children } = t0;
    const [people, setPeople] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$tutorials$2f$_assets$2f$_data$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["data"]);
    console.log("data", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$tutorials$2f$_assets$2f$_data$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["data"]);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (id)=>{
            setPeople((people_0)=>people_0.filter((person)=>person.id !== id));
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const removePerson = t1;
    let t2;
    if ($[2] !== people) {
        t2 = {
            people,
            removePerson
        };
        $[2] = people;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== children || $[5] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PeopleContext.Provider, {
            value: t2,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/tutorials/context/2_context_people_28/_context.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = children;
        $[5] = t2;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
};
_s(PeopleContextProvider_28, "1LkHEtj2RWqZMtew8JQSoeuNX/M=");
_c = PeopleContextProvider_28;
const usePeopleContext_28 = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "9a6ef6254b08d2dc41f5f250005d7a7f7e57b156a071aed583e701a4a5cbec48") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a6ef6254b08d2dc41f5f250005d7a7f7e57b156a071aed583e701a4a5cbec48";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PeopleContext);
};
_s1(usePeopleContext_28, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "PeopleContextProvider_28");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(root)/tutorials/context/2_context_people_28/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$tutorials$2f$_assets$2f$_wrapper$2f$Tutorials_28$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/tutorials/_assets/_wrapper/Tutorials_28.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$tutorials$2f$context$2f$2_context_people_28$2f$_context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/tutorials/context/2_context_people_28/_context.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// more components
// fix - context api, redux (for more complex cases)
const ContextPeople_28 = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "9ec00b572b9465a7ae1e9d679f2fec2e13f92a2f5293472a1285bf009c6f1912") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9ec00b572b9465a7ae1e9d679f2fec2e13f92a2f5293472a1285bf009c6f1912";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$tutorials$2f$context$2f$2_context_people_28$2f$_context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PeopleContextProvider_28"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$tutorials$2f$_assets$2f$_wrapper$2f$Tutorials_28$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "prop drilling"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(root)/tutorials/context/2_context_people_28/page.jsx",
                            lineNumber: 20,
                            columnNumber: 72
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(List, {}, void 0, false, {
                            fileName: "[project]/src/app/(root)/tutorials/context/2_context_people_28/page.jsx",
                            lineNumber: 20,
                            columnNumber: 94
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(root)/tutorials/context/2_context_people_28/page.jsx",
                    lineNumber: 20,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(root)/tutorials/context/2_context_people_28/page.jsx",
                lineNumber: 20,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/tutorials/context/2_context_people_28/page.jsx",
            lineNumber: 20,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ContextPeople_28;
const List = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "9ec00b572b9465a7ae1e9d679f2fec2e13f92a2f5293472a1285bf009c6f1912") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9ec00b572b9465a7ae1e9d679f2fec2e13f92a2f5293472a1285bf009c6f1912";
    }
    const { people } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$tutorials$2f$context$2f$2_context_people_28$2f$_context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePeopleContext_28"])();
    let t0;
    if ($[1] !== people) {
        t0 = people.map(_temp);
        $[1] = people;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] !== t0) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: t0
        }, void 0, false);
        $[3] = t0;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    return t1;
};
_s(List, "/jfj9p6GwR47d7d6WY9Hk3S4EXU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$tutorials$2f$context$2f$2_context_people_28$2f$_context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePeopleContext_28"]
    ];
});
_c1 = List;
const SinglePerson = (t0)=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "9ec00b572b9465a7ae1e9d679f2fec2e13f92a2f5293472a1285bf009c6f1912") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9ec00b572b9465a7ae1e9d679f2fec2e13f92a2f5293472a1285bf009c6f1912";
    }
    const { id, name } = t0;
    const { removePerson } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$tutorials$2f$context$2f$2_context_people_28$2f$_context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePeopleContext_28"])();
    let t1;
    if ($[1] !== name) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            children: name
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/tutorials/context/2_context_people_28/page.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = name;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== id || $[4] !== removePerson) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "btn",
            onClick: ()=>removePerson(id),
            children: "remove"
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/tutorials/context/2_context_people_28/page.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = id;
        $[4] = removePerson;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== t1 || $[7] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "item",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(root)/tutorials/context/2_context_people_28/page.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
        $[7] = t2;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
};
_s1(SinglePerson, "gyWzdClhfUFBL2FiP4Dp5oy6JYo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$tutorials$2f$context$2f$2_context_people_28$2f$_context$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePeopleContext_28"]
    ];
});
_c2 = SinglePerson;
const __TURBOPACK__default__export__ = ContextPeople_28;
function _temp(person) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SinglePerson, {
        ...person
    }, person.id, false, {
        fileName: "[project]/src/app/(root)/tutorials/context/2_context_people_28/page.jsx",
        lineNumber: 101,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ContextPeople_28");
__turbopack_context__.k.register(_c1, "List");
__turbopack_context__.k.register(_c2, "SinglePerson");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28root%29_tutorials_23b4228a._.js.map