import{r as l,m as g,j as e,f as n}from"./index-CKenc1QC.js";import{a as h}from"./categorySlice-DY7tRM1L.js";const y=()=>{const[t,o]=l.useState(""),[c,d]=l.useState(""),[i,m]=l.useState(0),[p]=g(),[x]=h(),u=async a=>{const s=new FormData;s.append("image",a.target.files[0]);try{const r=await p(s).unwrap();o(r.image)}catch(r){return n.error(r.message)}},f=async a=>{a.preventDefault();const s=new FormData;s.append("name",c),s.append("startingRate",i),s.append("image",t);try{const r=await x(s).unwrap();return n.success("successfully created")}catch(r){return n.error(r.data.error||r.error)}};return e.jsxs("div",{className:"flex w-full flex-col justify-start items-center p-5 vsm:p-0 mt-6 gap-3",children:[e.jsx("div",{className:"flex w-full justify-center items-center",children:e.jsx("div",{className:"text-[26px] w-full flex justify-center text-center smd:w-[70%] sm:text-[22px] vsm:text-[18px] sm:w-[85%] uppercase tracking-wider mb-4 ",children:"Create new Category here"})}),e.jsxs("div",{className:"w-full min-h-screen smd:flex-col flex-wrap flex items-start justify-around smd:justify-start smd:items-center  p-7 md:px-4  smd:p-5 gap-10 md:gap-3",children:[e.jsxs("div",{className:"flex relative w-[320px] group h-[320px] justify-center items-center bg-[#EDEBE9] rounded-[20px]",children:[e.jsx("img",{src:t,alt:"",className:`w-[250px] h-[250px] object-contain ${t?"block":"hidden"} `}),e.jsx("div",{className:"absolute w-[320px] h-[320px] left-0 top-0",children:e.jsxs("label",{className:`w-full overflow-hidden h-full shadow-md shadow-slate-400 bg-[#EDEBE9] smd:bg-transparent flex-wrap text-black ${t?"hidden":"flex"} rounded-[20px] group-hover:flex justify-center items-center gap-2 flex-col px-10 py-8`,children:[t?t.name:"Upload Main Image",e.jsx("input",{type:"file",accept:"image/*",name:"image",onChange:u,className:`${t?"text-black":"hidden"} `})]})})]}),e.jsxs("div",{className:"flex flex-col w-[320px] md:w-[280px] smd:w-[320px] relative  left-0 items-start  gap-5 ",children:[e.jsxs("div",{className:"flex flex-col w-full gap-3 items-center justify-between",children:[e.jsxs("div",{className:"flex flex-col w-full gap-3",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",className:"focus:outline-none px-3 py-2 border-[2px] border-black rounded-lg",value:c,onChange:a=>{d(a.target.value)}})]}),e.jsxs("div",{className:"flex flex-col w-full gap-3",children:[e.jsx("label",{htmlFor:"rate",children:"Starting Price"}),e.jsx("input",{type:"number",className:"focus:outline-none px-3 py-2 border-[2px] border-black rounded-lg",value:i,onChange:a=>{m(a.target.value)}})]})]}),e.jsx("button",{onClick:f,className:"w-[160px] bg-[#525CEB] h-[60px] py-3 capitalize text-[18px] tracking-wider font-[350] rounded-lg text-white ",children:"Create"})]})]})]})};export{y as default};
