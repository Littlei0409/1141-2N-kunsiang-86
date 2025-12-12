module.exports=[77479,70329,a=>{"use strict";var b=a.i(75716);let c=b.default.div.withConfig({displayName:"Tutorials_28__Wrapper",componentId:"sc-2b207e17-0"})`
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
`;a.s(["default",0,c],77479),a.s(["data",0,[{id:1,name:"john"},{id:2,name:"peter"},{id:3,name:"susan"},{id:4,name:"anna"}]],70329)},77135,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(77479),e=a.i(70329);let f=({people:a,removePerson:c})=>(0,b.jsx)(b.Fragment,{children:a.map(a=>(0,b.jsx)(g,{...a,removePerson:c},a.id))}),g=({id:a,name:c,removePerson:d})=>(0,b.jsxs)("div",{className:"item",children:[(0,b.jsx)("h4",{children:c}),(0,b.jsx)("button",{className:"btn",onClick:()=>d(a),children:"remove"})]});a.s(["default",0,()=>{let[a,g]=(0,c.useState)(e.data);return console.log("data",e.data),(0,b.jsx)(d.default,{children:(0,b.jsxs)("div",{className:"container",children:[(0,b.jsx)("h3",{children:"prop drilling"}),(0,b.jsx)(f,{people:a,removePerson:a=>{g(b=>b.filter(b=>b.id!==a))}})]})})}])}];

//# sourceMappingURL=src_app_%28root%29_tutorials_2232560b._.js.map