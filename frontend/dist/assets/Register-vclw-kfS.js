import{h as k,r as t,i as C,u as F,k as P,j as e,F as U,l as A,a as G,s as L,f as u}from"./index-CKenc1QC.js";import{a as R}from"./userApiSlice-BZu3orzx.js";import{F as B}from"./index-CbwRba4o.js";import{d as x}from"./index-CoHHr8Ot.js";const _=()=>{const{userInfo:r}=k(s=>s.auth),[p,m]=t.useState(""),[f,h]=t.useState(""),[o,g]=t.useState(""),[c,w]=t.useState(!1),i=C(),j=F(),[b,{isLoading:a}]=R(),{search:N}=P(),n=new URLSearchParams(N).get("redirect")||"/",v=t.useCallback(x(s=>m(s),300),[]),y=t.useCallback(x(s=>h(s),300),[]),S=async()=>{window.open("https://dbsa2.onrender.com/auth/google/callback","_self")},E=async s=>{var d;s.preventDefault();try{const l=await b({email:p,password:o,username:f}).unwrap();l.error||(j(L({...l})),u.success("User registered successfully"))}catch(l){u.error(((d=l==null?void 0:l.data)==null?void 0:d.error)||l.error||"An error occurred")}};return t.useEffect(()=>{r&&i(n)},[r,n,i]),e.jsx("div",{className:"w-full min-h-screen p-4 flex flex-col justify-center items-center",children:e.jsxs("div",{className:"w-[30%] md:w-[50%] sm:w-[80%] vsm:w-[95%] flex flex-col mt-5",children:[e.jsx("div",{className:"text-[21px] font-[400]",children:"Get Started!"}),e.jsxs("div",{className:"w-full gap-6 flex flex-col mt-6",children:[e.jsxs("div",{className:"flex w-full flex-col gap-2",children:[e.jsx("label",{htmlFor:"username",className:"text-[14px]",children:"Name"}),e.jsx("div",{className:"w-full bg-[#c1c1c133] rounded-lg",children:e.jsx("input",{id:"username",type:"text",onChange:s=>y(s.target.value),placeholder:"Enter your Name",className:"bg-transparent w-full px-3 h-[48px] py-2 focus:outline-none",disabled:a})})]}),e.jsxs("div",{className:"flex w-full flex-col gap-2",children:[e.jsx("label",{htmlFor:"email",className:"text-[14px]",children:"Email"}),e.jsx("div",{className:"w-full bg-[#c1c1c133] rounded-lg",children:e.jsx("input",{type:"email",onChange:s=>v(s.target.value),placeholder:"Enter your Email",className:"bg-transparent w-full px-3 h-[48px] py-2 focus:outline-none",disabled:a})})]}),e.jsxs("div",{className:"flex w-full flex-col gap-2",children:[e.jsx("label",{htmlFor:"password",className:"text-[14px]",children:"Password"}),e.jsxs("div",{className:"w-full flex bg-[#c1c1c133] rounded-lg",children:[e.jsx("input",{type:c?"text":"password",placeholder:"Enter Password",value:o,onChange:s=>g(s.target.value),className:"bg-transparent w-full px-3 py-2 focus:outline-none",disabled:a}),e.jsx("button",{onClick:()=>w(!c),className:"w-[48px] h-[48px]",disabled:a,children:c?e.jsx(U,{}):e.jsx(A,{})})]})]}),e.jsxs("div",{className:"flex w-full flex-col mt-12 gap-8",children:[e.jsx("button",{onClick:E,className:`w-full h-[48px] rounded-lg tracking-wider text-[17px] font-[500] bg-[#525CEB] text-white ${a&&"cursor-wait opacity-50"}`,disabled:a,children:a?"Signing up...":"Sign up"}),e.jsxs("button",{onClick:S,className:"w-full h-[48px] flex justify-center items-center gap-2 rounded-lg tracking-wider text-[13px] font-[400] bg-[#000000] text-white",disabled:a,children:[e.jsx(B,{className:"text-[22px]"})," Or sign up with Google"]})]}),e.jsx("div",{className:"w-full flex justify-center items-center",children:e.jsxs("p",{children:["Already have an account?"," ",e.jsx(G,{to:n?`/login?redirect=${n}`:"/login",className:"text-[#007AFF]",children:"Sign in now"})]})})]})]})})};export{_ as default};
