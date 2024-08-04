import{r as n,j as e,L as I,a0 as d,a1 as L,f as c}from"./index-CKenc1QC.js";import{f as S}from"./index-YgxFp4F-.js";import{I as H}from"./index-BkIFEx77.js";import{b as O,e as P,f as D}from"./userApiSlice-BZu3orzx.js";import{M as F}from"./Message-CAUkS3hO.js";const G=()=>{const[r,f]=n.useState(1),{data:t,isLoading:C,refetch:h,error:o}=O({page:r}),[E]=P(),[U]=D(),[j,y]=n.useState(""),[N,b]=n.useState(""),[u,g]=n.useState(""),[w,v]=n.useState(!1),m=async l=>{var s;try{await U({_id:l,username:j,email:N,isAdmin:w}).unwrap(),g(""),c.success("user update successfully")}catch(a){c.error(((s=a==null?void 0:a.data)==null?void 0:s.error)||a.error)}},k=async l=>{var s;if(window.confirm("Are you sure ?"))try{await E(l).unwrap(),c.success("user deleted successfully")}catch(a){c.error(((s=a==null?void 0:a.data)==null?void 0:s.error)||a.error)}},B=(l,s,a,x)=>{g(l),b(s),y(a),v(x)},A=()=>{(t==null?void 0:t.numOfUsers)/10+1>r?f(r+1):c.error("no more items")},M=()=>{console.log(r),r>1?f(r-1):c.error("first page")};return n.useEffect(()=>{h()},[h,t==null?void 0:t.users]),e.jsx("div",{className:"flex justify-center",children:C?e.jsx(I,{}):o?e.jsx(F,{variant:"error",children:o.data.error||o.error}):e.jsxs("div",{className:"w-full flex flex-col overflow-x-auto justify-center items-start p-4 sm:p-0",children:[e.jsxs("table",{className:"mt-8 font2 w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"mb-[5rem] text-[14px] font-[700] ",children:[e.jsx("th",{className:"uppercase  px-3 py-2",children:"Username"}),e.jsx("th",{className:"uppercase  px-3 py-2",children:"Email"}),e.jsx("th",{className:"uppercase  px-3 py-2",children:"Admin"}),e.jsx("th",{className:"uppercase  px-3 py-2"}),e.jsx("th",{className:"uppercase px-3 py-2"})]})}),e.jsx("tbody",{className:"text-[16px] font-[400] font2",children:t==null?void 0:t.users.map(l=>{const{_id:s,username:a,email:x,isAdmin:p}=l;return e.jsxs("tr",{children:[e.jsx("td",{"data-cell":"Username",className:"px-3 py-2",children:u!==s?e.jsx("div",{className:"min-w-[125px] text-[#525CEB] capitalize",children:a}):e.jsxs("div",{className:"flex justify-between bg-gray-500 rounded",children:[e.jsx("input",{type:"text",className:"bg-transparent w-full  text-white text-center px-2 py-2 focus:outline-none ",placeholder:"Username",value:j,onChange:i=>{y(i.target.value)}}),e.jsx("button",{className:"bg-[#525CEB] text-white px-3 py-2 rounded-r",onClick:()=>{m(s)},children:e.jsx(d,{})})]})}),e.jsx("td",{"data-cell":"Email",className:"px-3 py-2",children:u!==s?e.jsx("div",{children:x}):e.jsxs("div",{className:"flex justify-between bg-gray-500 rounded",children:[e.jsx("input",{type:"text",placeholder:"Username",className:"bg-transparent w-full  text-white text-center px-2 py-2 focus:outline-none ",value:N,onChange:i=>{b(i.target.value)}}),e.jsx("button",{className:"bg-[#525CEB] text-white px-3 py-2 rounded-r",onClick:()=>{m(s)},children:e.jsx(d,{})})]})}),e.jsx("td",{"data-cell":"IsAdmin",className:"text-center px-3 py-2",children:u!==s?p?e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{className:"text-green-400 text-xl text-center",children:e.jsx(d,{})})}):e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{className:"text-red-400 text-xl",children:e.jsx(H,{})})}):e.jsxs("div",{className:"flex justify-between bg-gray-500 rounded",children:[e.jsx("input",{type:"checkbox",className:"bg-transparent w-full  text-white text-center px-2 py-2 focus:outline-none ",defaultChecked:w,onChange:i=>{v(i.target.checked)}}),e.jsx("button",{className:"bg-[#525CEB] text-white px-3 py-2 rounded-r",onClick:()=>{m(s)},children:e.jsx(d,{})})]})}),e.jsx("td",{className:"text-center px-3 py-2 space-x-6",children:e.jsxs("div",{className:"flex w-full justify-between sm:justify-center",children:[!p&&e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{className:"text-red-400 text-2xl",onClick:()=>{k(s)},children:e.jsx(S,{})})}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx("button",{className:"text-[#525CEB] text-xl",onClick:()=>{B(s,x,a,p)},children:e.jsx(L,{})})})]})})]},s)})})]}),e.jsxs("div",{className:"w-full flex justify-between items-center gap-4 mt-6 p-8 flex-wrap",children:[e.jsxs("div",{className:"uppercase text-gray-400 font2 font-[500] ",children:["total ",t==null?void 0:t.numOfUsers," Products in"," ",Math.ceil((t==null?void 0:t.numOfUsers)/10)," pages"," "]}),e.jsxs("div",{className:"gap-3 px-2 flex justify-end",children:[e.jsx("button",{onClick:M,className:"rounded-md bg-[#525CEB] text-white p-2",children:"Prev"}),e.jsx("button",{className:"w-[40px] text-[white] p-2 h-[40px] rounded-md bg-[#525CEB]",children:r}),e.jsx("button",{onClick:A,className:"rounded-md bg-[#525CEB] text-white p-2",children:"Next"})]})]})]})})};export{G as default};
