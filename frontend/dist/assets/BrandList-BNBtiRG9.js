import{r as d,m as y,j as e,L as v,f as i}from"./index-CKenc1QC.js";import{M as N}from"./Message-CAUkS3hO.js";import{b as B,u as E}from"./brandSlice-DawnlVkX.js";const I=()=>{const[o,p]=d.useState(""),[s,m]=d.useState(""),[x,u]=d.useState(""),[f]=y(),[g,{isLoading:h}]=B(),{data:r,isLoading:w,error:c}=E();console.log(r);const l=r&&r.allBrand.find(a=>a._id===o);d.useEffect(()=>{m(l==null?void 0:l.image),u(l==null?void 0:l.name)},[o]);const j=async a=>{const n=new FormData;n.append("image",a.target.files[0]);try{const t=await f(n).unwrap();m(t.image)}catch(t){console.log(t)}},b=async a=>{a.preventDefault();const n=new FormData;n.append("name",x),n.append("image",s);try{const t=await g({data:n,brandId:o}).unwrap();console.log(t),t.error?i.error(t.error):(i.success("successfully updated"),p(""))}catch(t){i.error(t.data.error||t.error),console.log(t)}};return w?e.jsx(v,{}):c?e.jsx(N,{variant:"error",children:c.data.error||c.error}):e.jsxs("div",{className:"w-full font2 min-h-screen p-6",children:[e.jsx("h1",{className:"text-gray-600  text-[22px] font-[400] my-4",children:"Brands"}),e.jsx("div",{className:"w-full mb-4 flex flex-wrap gap-5 ",children:r==null?void 0:r.allBrand.map(a=>e.jsx("button",{onClick:()=>{p(a._id)},className:`border-[#525CEB] font2 uppercase border-[2px] hover:bg-[#525CEB] hover:text-white text-[#525CEB] px-3 py-2 rounded-lg\r
              tracking-widest`,children:a.name},a._id))}),e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"text-gray-600  text-[22px] font-[400] my-6",children:"Update Brand"}),o?e.jsxs("div",{className:"w-full min-h-screen flex-wrap flex sm:flex-col sm:items-center items-start justify-start smd:justify-start  p-7 md:px-4  smd:p-5 vsm:p-0 gap-6 md:gap-3",children:[e.jsxs("div",{className:"flex relative w-[280px] group h-[180px] justify-center items-center bg-[#EDEBE9] rounded-[20px]",children:[e.jsx("img",{src:s,alt:"",className:`w-[220px] h-[137px] object-contain ${s?"block":"hidden"} `}),e.jsx("div",{className:"absolute w-[280px] h-[180px] left-0 top-0",children:e.jsxs("label",{className:`w-full overflow-hidden h-full shadow-md shadow-slate-400 bg-[#EDEBE9] smd:bg-transparent flex-wrap text-black ${s?"hidden":"flex"} rounded-[20px] group-hover:flex justify-center items-center gap-2 flex-col px-10 py-8`,children:[s?s.name:"Upload Main Image",e.jsx("input",{type:"file",accept:"image/*",name:"image",onChange:j,className:`${s?"text-black":"hidden"} `})]})})]}),e.jsxs("div",{className:"flex flex-col w-[280px] md:w-[280px] smd:w-[280px] relative  left-0 items-start  gap-5 ",children:[e.jsx("div",{className:"flex flex-col w-full gap-3 items-center justify-between",children:e.jsxs("div",{className:"flex flex-col w-full gap-3",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",className:" w-full focus:outline-none px-3 py-2 border-[2px] border-black rounded-lg",value:x,onChange:a=>{u(a.target.value)}})]})}),e.jsx("button",{onClick:b,className:`w-[160px] bg-[#525CEB] ${h&&"cursor-wait"} h-[50px] py-1 capitalize text-[18px] font2 tracking-wider font-[350] rounded-lg text-white `,children:"Update"})]})]}):e.jsxs("h1",{className:"text-gray-600 font2 font-[400] uppercase",children:[" ","please click on brand to update"]})]})]})};export{I as default};
