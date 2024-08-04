import{r as j,h as A,j as e,f as C,o as E,Z as I,L as w,a as O,$ as B}from"./index-CKenc1QC.js";import{d as $,e as L,f as M,g as R,h as _}from"./orderSlice-Bi0Fbnjr.js";import{M as S}from"./Message-CAUkS3hO.js";const F=({id:u,isConfirmed:c,isDelivered:s,isShipped:p,isOutOfDelivery:f})=>{const[t,v]=j.useState(void 0),[a,g]=j.useState(void 0),[r,m]=j.useState(void 0),[l,d]=j.useState(void 0),[y]=$(),{userInfo:x}=A(i=>i.auth);console.log(t,a,r,l);const P=async()=>{var i;try{(await y({data:{isConfirmed:t,isShipped:a,isOutOfDelivery:r,isDelivered:l},id:u}).unwrap()).error||C.success("status updated successfully")}catch(o){C.error(((i=o==null?void 0:o.data)==null?void 0:i.error)||o.error)}},h=i=>{t||(g(!1),m(!1),d(!1),console.log("1")),a||(m(!1),d(!1),console.log("2")),m||(d(!1),console.log("3")),console.log("hi")};return j.useEffect(()=>{c&&v(c),p&&g(p),f&&m(f),s&&d(s)},[c,s,p,f]),e.jsxs("div",{className:"flex font2 flex-col mt-6 justify-center items-start space-x-4",children:[e.jsxs("div",{className:`flex ml-4 gap-2 justify-center items-center ${t?"text-green-500":"text-gray-300"}`,children:[e.jsx("span",{className:"",children:"Confirmed"}),e.jsx("div",{className:`text-lg text-center  ${t&&a?"flex":"hidden"}`,children:"✅"}),x.isAdmin&&e.jsx("input",{type:"checkBox",name:"setStep1",defaultChecked:t,onChange:i=>{v(i.target.checked),h()},className:"text-green-500"})]}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-[4rem] w-[0.8px] bg-green-500"}),e.jsxs("div",{className:`flex gap-2 justify-center items-center ${t&&a?"text-green-500":"text-gray-300"}`,children:[e.jsx("span",{children:"Shipped"}),e.jsx("div",{className:`mt-2 text-lg text-center ${t&&a?"flex":"hidden"}`,children:"✅"}),x.isAdmin&&t&&e.jsx("input",{type:"checkBox",defaultChecked:a,name:"setStep2",onChange:i=>{g(i.target.checked),h()},className:"text-green-500"})]})]}),e.jsxs(e.Fragment,{children:[t&&a&&r?e.jsx("div",{className:"h-[4rem] w-[0.8px] bg-green-500"}):e.jsx("div",{className:"h-[4rem] w-[0.8px] bg-gray-300"}),e.jsxs("div",{className:` flex gap-2 justify-center items-center ${t&&a&&r?"text-green-500":"text-gray-300"}`,children:[e.jsx("span",{className:"",children:"Out of Delivery"}),t&&a&&r?e.jsx("div",{className:"mt-2 text-lg text-center",children:"✅"}):"",x.isAdmin&&t&&a&&e.jsx("input",{type:"checkBox",name:"setStep3",defaultChecked:r,onChange:i=>{m(i.target.checked),h()},className:"text-green-500"})]})]}),e.jsxs(e.Fragment,{children:[t&&a&&r&&l?e.jsx("div",{className:"h-[4rem] w-[0.8px] bg-green-500"}):e.jsx("div",{className:"h-[4rem] w-[0.8px] bg-gray-300"}),e.jsxs("div",{className:` flex gap-2 justify-center items-center ${t&&a&&r&&l?"text-green-500":"text-gray-300"}`,children:[e.jsx("span",{className:"",children:"Delivered"}),t&&a&&r&&l?e.jsx("div",{className:"mt-2 text-lg text-center",children:"✅"}):"",x.isAdmin&&t&&a&&r&&e.jsx("input",{type:"checkBox",defaultChecked:l,name:"setStep4",onChange:i=>{d(i.target.checked),h()},className:"text-green-500"})]})]}),x.isAdmin&&e.jsx("button",{onClick:P,className:"w-[160px] bg-[#525CEB] font2 mt-4 py-3 capitalize text-[18px] tracking-wider font-[350] rounded-lg text-white ",children:"Update"})]})},Q=()=>{const{userInfo:u}=A(n=>n.auth),{id:c}=E(),{data:s,refetch:p,isLoading:f,error:t}=L(c),[v,{isLoading:a}]=M(),[g,{isLoading:r}]=R();console.log(s);const[{isPending:m},l]=I(),{data:d,isLoading:y,error:x}=_();j.useEffect(()=>{if(!x&&!y&&d.clientId){const n=async()=>{l({type:"resetOptions",value:{"client-id":d.clientId,currency:"USD"}}),l({type:"setLoadingStatus",value:"pending"})};s&&!s.isPaid&&(window.paypal||n())}},[x,y,s,d,l]);function P(n,N){return N.order.capture().then(async function(k){var D;try{await v({orderId:c,details:k}),p(),toast.success("Order is paid")}catch(b){toast.error(((D=b==null?void 0:b.data)==null?void 0:D.message)||b.message)}})}function h(n,N){return N.order.create({purchase_units:[{amount:{value:s.totalPrice}}]}).then(k=>k)}function i(n){toast.error(n.message)}const o=async()=>{await g(c),p()};return f?e.jsx(w,{}):t?e.jsx(S,{variant:"danger",children:t.data.message}):e.jsxs("div",{className:"flex justify-between sm:flex-col p-5",children:[e.jsxs("div",{className:"w-[50%] md:w-[55%] sm:w-full",children:[e.jsx("div",{className:"",children:s.orderItems.length===0?e.jsx(S,{children:"Order is empty"}):e.jsx("div",{className:"flex flex-col gap-4",children:s.orderItems.map((n,N)=>e.jsxs("div",{className:"w-full flex min-h-[150px] gap-10 vsm:gap-3 justify-between px-4 sm:px-2  ",children:[e.jsxs("div",{className:"flex gap-5 items-center vsm:flex-col vsm:justify-center ",children:[e.jsx("div",{className:"w-[150px] h-[150px] smd:w-[120px] smd:h-[120px] rounded-[14px] bg-[#EDEBE9] flex justify-center  items-center ",children:e.jsx("img",{src:n.mainImage,alt:"",className:"w-[133px] h-[133px] smd:w-[100px] smd:h-[100px] object-contain "})}),e.jsx("div",{className:"flex flex-col md:hidden justify-center items-start",children:e.jsx(O,{className:"text-[18px] font2 font-[500]",to:`/productDetails/${n._id}`,children:n.name})})]}),e.jsxs("div",{className:"flex gap-16 md:items-end items-center md:flex-col md:gap-4 md:justify-center ",children:[e.jsx("div",{className:"hidden  flex-col md:flex justify-center items-start",children:e.jsx(O,{className:"text-[18px] font2 font-[500] sm:text-end",to:`/productDetails/${n._id}`,children:n.name})}),e.jsxs("div",{className:"text-[#82828B] text-[18px] font2 font-[400]",children:["R ",n.price]}),e.jsx("div",{className:"flex gap-2 items-center",children:n.qty})]})]}))})}),e.jsxs("div",{className:"w-full flex flex-col",children:[e.jsx("h2",{className:"text-xl font-bold mb-4 px-4 sm:px-2  mt-[3rem]",children:"Shipping Status"}),e.jsx(F,{isConfirmed:s.isConfirmed,id:c,isShipped:s.isShipped,isDelivered:c.isDelivered,isOutOfDelivery:s.isOutOfDelivery})]})]}),e.jsxs("div",{className:"w-[40%] sm:w-full",children:[e.jsxs("div",{className:"mt-5 border-gray-300 pb-4 mb-4",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:"Shipping"}),e.jsxs("p",{className:"mb-4 mt-4",children:[e.jsx("strong",{className:"text-pink-500",children:"Order:"})," ",s._id]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{className:"text-pink-500",children:"Name:"})," ",s.user.username]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{className:"text-pink-500",children:"Email:"})," ",s.user.email]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{className:"text-pink-500",children:"Address:"})," ",s.shippingAddress.address,", ",s.shippingAddress.city," ",s.shippingAddress.postalCode,", ",s.shippingAddress.country]}),e.jsxs("p",{className:"mb-4",children:[e.jsx("strong",{className:"text-pink-500",children:"Method:"})," ",s.paymentMethod]}),s.isPaid?e.jsxs(S,{variant:"success",children:["Paid on ",s.paidAt]}):e.jsx(S,{variant:"danger",children:"Not paid"})]}),e.jsx("h2",{className:"text-xl font-bold mb-2 mt-[3rem]",children:"Order Summary"}),e.jsxs("div",{className:"flex font2 justify-between mb-2",children:[e.jsx("span",{children:"Items"}),e.jsxs("span",{children:["R ",s.itemsPrice]})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{children:"Shipping"}),e.jsxs("span",{children:["R ",s.shippingPrice]})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{children:"Tax"}),e.jsxs("span",{children:["R ",s.taxPrice]})]}),e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{children:"Total"}),e.jsxs("span",{children:["R ",s.totalPrice]})]}),!s.isPaid&&u._id===(s==null?void 0:s.user._id)&&e.jsxs("div",{children:[a&&e.jsx(w,{})," ",m?e.jsx(w,{}):e.jsx("div",{children:e.jsx("div",{children:e.jsx(B,{createOrder:h,onApprove:P,onError:i})})})]}),r&&e.jsx(w,{}),u&&u.isAdmin&&s.isPaid&&!s.isDelivered&&e.jsx("div",{children:e.jsx("button",{type:"button",className:"bg-pink-500 text-white w-full py-2",onClick:o,children:"Mark As Delivered"})})]})]})};export{Q as default};
