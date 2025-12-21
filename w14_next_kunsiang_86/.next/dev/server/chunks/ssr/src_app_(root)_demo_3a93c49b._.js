module.exports = [
"[project]/src/app/(root)/demo/_assets/Wrapper/Blog2_49.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div.withConfig({
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
}),
"[project]/src/app/(root)/demo/_assets/data/blogData.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"title":"Seven Reasons Why Coffee Is Awesome","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-1.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-1.jpg"},{"id":2,"title":"Travel To Paris","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-2.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-2.jpg"},{"id":3,"title":"Coffee Brings Friendship","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-3.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-3.jpg"},{"id":4,"title":"Coffee Make You Feel Good","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-4.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-4.jpg"},{"id":5,"title":"Coffee Make You Calm","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"lifestyle","img":"/images/photo-5.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-5.jpg"},{"id":6,"title":"101 Tower In Taipei","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-6.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-6.jpg"},{"id":7,"title":"Sun Rise From The Mountain","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-7.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-7.jpg"},{"id":8,"title":"Serene Lake With Trees","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-8.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-8.jpg"},{"id":9,"title":"Rocks Of Queen Head In Yehliu Taiwan","descrip":"Lorem ipsum dolor sit amet consectetur adipisicing elit.","category":"travel","img":"/images/photo-9.jpg","remote_url":"https://erogcveccbzsyhbgputf.supabase.co/storage/v1/object/public/demo-xx/card-xx/photo-9.jpg"}]);}),
"[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_blogContext_49.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogContextProvider_49",
    ()=>BlogContextProvider_49,
    "useBlogContext_49",
    ()=>useBlogContext_49
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$data$2f$blogData$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/_assets/data/blogData.json (json)");
'use client';
;
;
;
const BlogContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
const BlogContextProvider_49 = ({ children })=>{
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('huhao');
    const [id, setId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(213417149);
    const [blogs_49, setBlogs_49] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$data$2f$blogData$2e$json__$28$json$29$__["default"]);
    const [alert, setAlert] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        msg: '',
        type: ''
    });
    const showAlert = (show = false, msg = '', type = '')=>{
        setAlert({
            show,
            msg,
            type
        });
    };
    const removeItem = (id)=>{
        showAlert(true, 'blog removed', 'danger');
        setBlogs_49(blogs_49.filter((blog)=>blog.id !== id));
    };
    const clearAllBlogs = ()=>{
        showAlert(true, 'clear all blogs', 'danger');
        setBlogs_49([]);
    };
    const loadAllBlogs = ()=>{
        showAlert(true, 'load all blogs', 'success');
        setBlogs_49([]);
        setBlogs_49(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$data$2f$blogData$2e$json__$28$json$29$__["default"]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogContext.Provider, {
        value: {
            name,
            id,
            blogs_49,
            alert,
            showAlert,
            removeItem,
            clearAllBlogs,
            loadAllBlogs
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_blogContext_49.jsx",
        lineNumber: 37,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const useBlogContext_49 = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BlogContext);
};
}),
"[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_blogContext_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_blogContext_49.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
const Blog2_49 = ({ id, img, category, title, descrip })=>{
    const { removeItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_blogContext_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBlogContext_49"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "blog",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: img,
                alt: "Coffee photo",
                className: "img blog-img"
            }, void 0, false, {
                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "blog-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex",
                        children: [
                            category,
                            category === 'lifestyle' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMugSaucer"], {
                                className: "ml-1",
                                color: "blue",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGlobe"], {
                                className: "ml-1",
                                color: "blue",
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: descrip
                    }, void 0, false, {
                        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "#",
                                children: "read more"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-red-700 bg-red-100 capitalize px-2 py-1 hover:bg-red-300 rounded",
                                onClick: ()=>removeItem(id),
                                children: "delete"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, id, true, {
        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Blog2_49;
}),
"[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/BlogList2_49.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$Wrapper$2f$Blog2_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/_assets/Wrapper/Blog2_49.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_components$2f$Blog2_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/Blog2_49.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_blogContext_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_blogContext_49.jsx [app-ssr] (ecmascript)");
;
;
;
;
const BlogList2_49 = ()=>{
    const { blogs_49 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_blogContext_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBlogContext_49"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$Wrapper$2f$Blog2_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "blogs-center",
            children: blogs_49?.map((item)=>{
                const { id, title, descrip, category, img } = item;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_components$2f$Blog2_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    id: id,
                    title: title,
                    descrip: descrip,
                    category: category,
                    img: img
                }, id, false, {
                    fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/BlogList2_49.jsx",
                    lineNumber: 14,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/BlogList2_49.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/BlogList2_49.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BlogList2_49;
}),
"[project]/src/app/(root)/demo/_components/Alert_49.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Alert_49 = ({ alert, showAlert })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timeout = setTimeout(()=>{
            showAlert();
        }, 3000);
        return ()=>clearTimeout(timeout);
    });
    if (alert.type === 'success') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "grid items-center text-center capitalize text-green-700 bg-green-200",
            children: alert.msg
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/_components/Alert_49.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    } else if (alert.type === 'danger') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "grid items-center text-center capitalize text-red-700 bg-red-200",
            children: alert.msg
        }, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/_components/Alert_49.jsx",
            lineNumber: 19,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
};
const __TURBOPACK__default__export__ = Alert_49;
}),
"[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_components$2f$BlogList2_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_components/BlogList2_49.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$Wrapper$2f$Blog2_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/_assets/Wrapper/Blog2_49.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_components$2f$Alert_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/_components/Alert_49.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_blogContext_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(root)/demo/blog_49/localjson2_context_49/_blogContext_49.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const BlogLocalJsonPage2_49 = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_blogContext_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BlogContextProvider_49"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Content_49, {}, void 0, false, {
            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const Content_49 = ()=>{
    const { name, id, blogs_49, alert, showAlert, removeItem, clearAllBlogs, loadAllBlogs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_blogContext_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBlogContext_49"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_assets$2f$Wrapper$2f$Blog2_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            alert.show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$_components$2f$Alert_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                alert: alert,
                showAlert: showAlert
            }, void 0, false, {
                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
                lineNumber: 33,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "blogs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-title",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "blogs context from local json 2 -- ",
                                name,
                                ", ",
                                id,
                                ' '
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$root$292f$demo$2f$blog_49$2f$localjson2_context_49$2f$_components$2f$BlogList2_49$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-8 mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded",
                                onClick: clearAllBlogs,
                                children: "clear all blogs"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded",
                                onClick: loadAllBlogs,
                                children: "load all blogs"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(root)/demo/blog_49/localjson2_context_49/page.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = BlogLocalJsonPage2_49;
}),
];

//# sourceMappingURL=src_app_%28root%29_demo_3a93c49b._.js.map