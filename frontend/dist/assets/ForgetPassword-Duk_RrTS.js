import{r as l,i as m,j as e,f as t}from"./index-CKenc1QC.js";import{c as x}from"./userApiSlice-BZu3orzx.js";import{d as f}from"./index-CoHHr8Ot.js";const h=()=>{const[o,n]=l.useState(""),[c,{isLoading:a}]=x(),i=m(),d=l.useCallback(f(s=>n(s),300),[]),u=async()=>{var s;try{const r=await c({email:o}).unwrap();r.error?t.error(r.error):(t.success("Token has been sent to your email. Please check in spam also."),i("/"))}catch(r){t.error(((s=r.data)==null?void 0:s.error)||r.error||"An error occurred")}};return e.jsxs("div",{className:"w-full min-h-[400px] p-4 py-10 flex flex-col justify-center items-center",children:[e.jsx("div",{className:"text-[21px] text-center font-[400]",children:"Forgot Password?"}),e.jsxs("div",{className:"w-[30%] md:w-[50%] sm:w-[80%] vsm:w-[95%] flex gap-5 flex-col mt-5 items-center",children:[e.jsx("div",{className:"flex w-full flex-col gap-2 mt-6",children:e.jsx("div",{className:"w-full bg-[#c1c1c133] rounded-lg",children:e.jsx("input",{type:"email",defaultValue:o,onChange:s=>d(s.target.value),placeholder:"Enter your Email",className:"bg-transparent w-full px-3 h-[48px] py-2 focus:outline-none",disabled:a})})}),e.jsx("button",{onClick:u,className:`w-full h-[48px] rounded-lg tracking-wider text-[17px] font-[500] bg-[#525CEB] text-white ${a?"opacity-50 cursor-not-allowed":""}`,disabled:a,children:a?"Sending...":"Send Link"})]})]})};export{h as default};
