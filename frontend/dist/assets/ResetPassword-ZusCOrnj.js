import{o as m,i as h,r as l,j as s,F as d,l as i,f as t}from"./index-CKenc1QC.js";import{d as g}from"./userApiSlice-BZu3orzx.js";const v=()=>{const{token:r}=m(),x=h();console.log(r);const[o,u]=l.useState(""),[a,n]=l.useState(!1),[c,w]=l.useState(""),[p]=g(),f=async()=>{if(o!==c)t.error("Password is not same");else try{console.log(r);const e=await p({data:{password:o},token:r}).unwrap();e.error?t.error(e.error):(t.success("Password changed successfully"),x("/login"))}catch(e){t.error(e.data.error||e.error)}};return s.jsxs("div",{className:"w-full min-h-[500px] relative left-0 p-4 top-0 py-10 flex flex-col justify-center items-center",children:[s.jsx("div",{className:"text-[21px] text-center font-[400]",children:"Reset Password "}),s.jsxs("div",{className:"w-[30%] md:w-[50%] sm:w-[80%] vsm:w-[95%] flex gap-6 flex-col mt-5 items-center",children:[s.jsxs("div",{className:"flex w-full gap-5 flex-col  ",children:[s.jsxs("div",{className:"w-full flex bg-[#c1c1c133]  rounded-lg",children:[s.jsx("input",{type:`${a?"text":"password"}`,placeholder:"Enter Password",value:o,onChange:e=>{u(e.target.value)},className:"bg-transparent  w-full px-3 py-2 focus:outline-none "}),s.jsx("button",{onClick:()=>{n(!a)},className:"w-[48px] h-[48px]",children:a?s.jsx(d,{}):s.jsx(i,{})})]}),s.jsxs("div",{className:"w-full flex bg-[#c1c1c133]  rounded-lg",children:[s.jsx("input",{type:`${a?"text":"password"}`,placeholder:"Confirm Password",value:c,onChange:e=>{w(e.target.value)},className:"bg-transparent  w-full px-3 py-2 focus:outline-none "}),s.jsx("button",{onClick:()=>{n(!a)},className:"w-[48px] h-[48px]",children:a?s.jsx(d,{}):s.jsx(i,{})})]})]}),s.jsx("button",{onClick:f,className:`w-full h-[48px] rounded-lg tracking-wider text-[17px] font-[500] bg-[#525CEB] text-white
          } `,children:"Sent Link"})]})]})};export{v as default};