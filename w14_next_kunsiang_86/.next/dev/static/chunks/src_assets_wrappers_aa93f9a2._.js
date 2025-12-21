(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/assets/wrappers/midterm/Shop_49.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Shop_49__Wrapper",
    componentId: "sc-304c207d-0"
})`
  .midterm {
    width: 95%;
    margin: 1rem auto;
  }
  .header {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    .logo-container {
      height: 100%;
      width: 70px;
      padding: 25px;
    }

    .options {
      display: flex;
      height: 100%;
      width: 50%;
      justify-content: flex-end;
      align-items: center;

      .option {
        padding: 10px 15px;
        cursor: pointer;
      }

      .cart-icon {
        width: 45px;
        height: 45px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .shopping-icon {
          width: 24px;
          height: 24px;
        }
      }

      .cart-dropdown {
        position: absolute;
        width: 240px;
        height: 340px;
        display: none;
        background-color: white;
        border: 1px solid black;
        top: 90px;
        right: 40px;
        padding: 20px;
        z-index: 5;

        &.show {
          display: block;
        }

        .cart-items {
          height: 240px;
          display: flex;
          flex-direction: column;
          overflow: scroll;
        }

        .cart-item {
          width: 100%;
          display: flex;
          height: 80px;
          margin-bottom: 10px;

          img {
            width: 30%;
          }

          .item-details {
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            padding: 10px 20px;

            .name {
              font-size: 16px;
              margin-bottom: 10px;
            }

            .price {
              font-size: 18px;
            }
          }
        }

        .custom-button {
          width: 100%;
          height: 40px;
          background-color: #000;
          color: white;
          padding: 20px auto;
          margin: 20px auto;

          &:hover {
            background-color: lightgrey;
            color: black;
          }
        }
      }
    }
  }

  .section-title {
    h2 {
      text-align: center;
      text-transform: capitalize;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    h3 {
      text-align: center;
      text-transform: capitalize;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }

    h4 {
      text-align: center;
      text-transform: capitalize;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }

  // Homepage
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;

    .directory-menu {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .menu-item {
        width: 30%;
        height: 240px;
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        margin: 7px;
        overflow: hidden;

        &:hover {
          cursor: pointer;

          & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
          }

          & .content {
            opacity: 0.9;
          }
        }

        &.large {
          height: 320px;
        }

        &:first-child {
          margin-right: 7.5px;
        }

        &.last-child {
          margin-left: 7.5px;
        }

        .background-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        & img {
          object-fit: cover;
          width: 100%;
          height: 240px;
        }

        .content {
          height: 90px;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid black;
          background-color: white;
          opacity: 0.5;
          position: absolute;

          .title {
            font-weight: bold;
            font-size: 20px;
            color: #4a4a4a;
          }

          .subtitle {
            font-weight: lighter;
            font-size: 14px;
          }
        }
      }
    }
  }

  .collection-page {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 38px;
      margin: 15px auto;
    }

    .items {
      // display: flex;
      // justify-content: flex-start;
      // flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
  }

  .collection-item {
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 260px;
    align-items: center;
    position: relative;
    margin-bottom: 1rem;

    .image {
      width: 100%;
      height: 240px;
      background-size: cover;
      background-position: center center;
      margin-bottom: 5px;
    }

    .custom-button {
      width: 80%;
      position: absolute;
      top: 100px;
      display: none;
      opacity: 0.7;
      padding: 10px 10px;
      font-size: 20px;
      font-weight: bold;

      &:hover {
        background-color: #000;
        color: white;
      }
    }

    &:hover {
      .image {
        opacity: 0.8;
      }

      .custom-button {
        opacity: 0.85;
        display: block;
      }
    }
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .shop-page {
    width: 90%;
    margin: 2rem auto;
  }
  // Overview & Preview
  .collection-overview {
    display: flex;
    flex-direction: column;
  }

  .collection-preview {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .title {
      font-size: 20px;
      margin-bottom: 25px;
    }

    .preview {
      // display: flex;
      // justify-content: space-around;
      // flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
  }
`;
const __TURBOPACK__default__export__ = Wrapper;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/wrappers/Navbar_49.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Navbar_49__Wrapper",
    componentId: "sc-64aded56-0"
})`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .header {
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 3px solid #ededed;
    background-color: #ffffff;
    min-height: 68px;
    display: flex;
  }

  .hidden {
    display: none;
  }

  .slideInDown {
    -webkit-animation-name: slideInDown;
    animation-name: slideInDown;
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @-webkit-keyframes slideInDown {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slideInDown {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .slideInUp {
    -webkit-animation-name: slideInUp;
    animation-name: slideInUp;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes slideInUp {
    0% {
      -webkit-transform: translateY(15%);
      transform: translateY(15%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes slideInUp {
    0% {
      -webkit-transform: translateY(15%);
      transform: translateY(15%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .header .header-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
  }

  /* Mobile menu styles */
  .header .header-row .mobile-menu {
    position: absolute;
    background-color: #2376ad;
    top: 100%;
    left: 0;
    width: 100%;
    border-top: 3px solid #e9900a;
  }

  .header .header-row .mobile-menu {
    background-color: #fff;
    padding: 15px 20px;
    box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
  }

  .header .header-row .mobile-menu ul {
    list-style: none;
  }

  .header .header-row .mobile-menu ul li {
    margin-bottom: 10px;
  }

  .header .header-row .mobile-menu ul li:hover {
    background-color: rgba(222, 225, 226, 0.466);
  }

  /* Mega menu styles */
  .header .header-row .mobile-menu ul li.mega-menu {
    position: relative;
  }

  .header .header-row .mobile-menu ul li.mega-menu .mega-menu-wrapper {
    display: none;
  }

  .header .header-row .mobile-menu ul li a {
    text-decoration: none;
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: rgb(128, 131, 131);
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
  }

  .header .header-row .mobile-menu ul li.mega-menu:hover .mega-menu-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }

  .header
    .header-row
    .mobile-menu
    ul
    li.mega-menu
    .mega-menu-wrapper
    .mega-menu-col {
    margin-bottom: 20px;
  }

  .header
    .header-row
    .mobile-menu
    ul
    li.mega-menu
    .mega-menu-wrapper
    .mega-menu-col
    h5 {
    font-weight: 800;
    text-transform: uppercase;
  }

  .header
    .header-row
    .mobile-menu
    ul
    li.mega-menu
    .mega-menu-wrapper
    .mega-menu-col
    ul
    li
    a {
    font-weight: 400;
  }

  /* Simple drop down menu */
  .header .header-row .mobile-menu ul li.dropdown {
    position: relative;
  }

  .header .header-row .mobile-menu ul li.dropdown .sub-menu-wrapper {
    display: none;
  }

  .header .header-row .mobile-menu ul li.dropdown .sub-menu-wrapper ul li a {
    font-weight: 400;
    padding-left: 15px;
  }

  .header .header-row .mobile-menu ul li.dropdown:hover .sub-menu-wrapper {
    display: block;
  }

  /* Hide desktop menu on mobile up to 48em */
  @media (max-width: 48em) {
    .header .header-row .header-right .main-menu {
      display: none;
    }
  }

  /* Show menu on desktop 48em and above */
  @media (min-width: 48em) {
    .header {
      border-bottom: 3px solid #ededed;
      background-color: #ffffff;
    }

    .header .header-row {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      position: relative;
    }

    .header .mobile-toggler {
      display: none;
    }

    .header .header-row .header-right .main-menu {
      display: flex;
    }

    .header .header-row .header-right .main-menu li.menu-item {
      display: block;
    }

    .header .header-row .header-right .main-menu li.dropdown {
      position: relative;
    }

    .header .header-row .header-right .main-menu li.menu-item:not(:last-child) {
      margin: 0 20px 0 0;
    }

    .header .header-row .header-right .main-menu li.menu-item > a {
      font-size: 13px;
      font-weight: 600;
      line-height: 20px;
      color: #444444;
      padding: 40px 14px 40px 14px;
      display: inline-block;
      text-decoration: none;
      text-transform: uppercase;
    }

    .header .header-row .header-right .main-menu li.menu-item a.active {
      color: #e9900a;
    }

    .header .header-row .header-right .main-menu .sub-menu-wrapper {
      position: absolute;
      text-align: left;
      margin: 0;
      z-index: 111;
      min-width: 100%;
      line-height: 20px;
      display: none;
    }

    /* Show dropdown menu on hover */
    .header
      .header-row
      .header-right
      .main-menu
      > li.menu-item:hover
      .sub-menu-wrapper {
      display: block;
    }

    .header .header-row .header-right .main-menu .dropdown ul.sub-menu {
      background-color: #ffffff;
      border-top: 3px solid #e9900a;
      min-width: 200px;
      padding: 0px 0;
      box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
      text-transform: none;
    }

    .header
      .header-row
      .header-right
      .main-menu
      li.menu-item:hover
      .sub-menu-wrapper
      li.menu-item {
      padding: 0;
      margin-right: 0;
    }

    .header
      .header-row
      .header-right
      .main-menu
      li.menu-item:hover
      .sub-menu-wrapper
      li.menu-item
      > a {
      padding: 8px;
      display: block;
      text-transform: none;
      color: #6d6c6c;
      font-size: 14px;
      font-weight: 400;
    }

    .header
      .header-row
      .header-right
      .main-menu
      .sub-menu-wrapper
      ul
      li:not(:last-child) {
      border-bottom: 1px solid rgba(204, 204, 204, 0.432);
    }

    .header .header-row .header-right .main-menu .sub-menu-wrapper ul li:hover {
      background-color: #ededed;
    }

    /* Mega menu styles */
    .header .header-row .header-right .main-menu .mega-menu .mega-menu-wrapper {
      position: absolute;
      left: 0px;
      display: none;
      padding: 20px 25px;
      background-color: #ffffff;
      border-top: 3px solid #e9900a;
      width: 100%;
      box-shadow: 0 5px 8px rgb(0 0 0 / 15%);
    }

    /* Show mega menu on hover */
    .header
      .header-row
      .header-right
      .main-menu
      li.mega-menu:hover
      .mega-menu-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    .header
      .header-row
      .header-right
      .main-menu
      li.mega-menu:hover
      .mega-menu-wrapper
      .mega-menu-col
      h5 {
      text-transform: uppercase;
      margin-bottom: 15px;
      padding-left: 8px;
    }

    .header
      .header-row
      .header-right
      .main-menu
      li.mega-menu:hover
      .mega-menu-wrapper
      .mega-menu-col
      ul {
      list-style: none;
      margin-left: 0px;
      margin-right: 20px;
    }

    .header
      .header-row
      .header-right
      .main-menu
      li.mega-menu:hover
      .mega-menu-wrapper
      .mega-menu-col
      ul
      li
      a {
      text-decoration: none;
      padding: 8px;
      display: block;
      font-size: 14px;
      color: rgba(149, 151, 151, 1);
    }

    .header
      .header-row
      .header-right
      .main-menu
      li.mega-menu:hover
      .mega-menu-wrapper
      .mega-menu-col
      ul
      li:hover
      a {
      background-color: rgba(222, 225, 226, 0.466);
    }
  }

  .header .mobile-toggler {
    color: #ffffff;
    background-color: #0088cc;
    cursor: pointer;
    padding: 7px 13px;
    text-align: center;
    font-size: 13px;
    vertical-align: middle;
    margin: 8px 0 8px 1em;
    line-height: 20px;
  }

  .hero {
    background: rgb(5, 146, 200);
    background: linear-gradient(
      107deg,
      rgba(5, 146, 200, 1) 0%,
      rgba(15, 113, 117, 1) 100%
    );
    padding: 50px 20px;
    min-height: 80vh;
    color: #fff;
    display: flex;
    text-align: center;
    align-items: center;
    font-size: 40px;
  }

  @media (min-width: 48em) {
    .hero {
      font-size: 60px;
    }
  }

  /* Container styles */
  .container {
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 36em) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 36em) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 48em) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 62em) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 75em) {
    .container {
      max-width: 1140px;
    }
  }

  @media (min-width: 87.5em) {
    .container {
      max-width: 1380px;
    }
  }
`;
const __TURBOPACK__default__export__ = Wrapper;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_assets_wrappers_aa93f9a2._.js.map