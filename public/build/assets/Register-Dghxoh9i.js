import{C as p,c,o as w,w as i,a as o,b as l,u as s,m as g,d as _,P as b,e as u,n as V}from"./app-kCp1_kvw.js";import{_ as v}from"./GuestLayout-DKHmL9eB.js";import{_ as r}from"./InputError-DYtzHW52.js";import{_ as m,a as n}from"./TextInput-BAUAmzP6.js";import{P as y}from"./PrimaryButton-otRBbylK.js";/* empty css            */import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={class:"mt-4"},k={class:"mt-4"},P={class:"mt-4"},q={class:"mt-4 flex items-center justify-end"},A={__name:"Register",setup(B){const e=p({name:"",email:"",password:"",password_confirmation:"",contact_number:""}),d=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(f,a)=>(w(),c(v,null,{default:i(()=>[o(s(g),{title:"Register"}),a[7]||(a[7]=l("div",{class:"flex flex-col items-center p-4 font-bold text-lg text-gray-700 mb-4"}," Register to start your Booking! ",-1)),l("form",{onSubmit:_(d,["prevent"])},[l("div",null,[o(m,{for:"name",value:"Name"}),o(n,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=t=>s(e).name=t),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(r,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),l("div",null,[o(m,{for:"contact_number",value:"Contact Number"}),o(n,{id:"contact_number",type:"number",class:"mt-1 block w-full",modelValue:s(e).contact_number,"onUpdate:modelValue":a[1]||(a[1]=t=>s(e).contact_number=t),required:"",autofocus:"",autocomplete:"contact_number"},null,8,["modelValue"]),o(r,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),l("div",x,[o(m,{for:"email",value:"Email"}),o(n,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[2]||(a[2]=t=>s(e).email=t),required:"",autocomplete:"username"},null,8,["modelValue"]),o(r,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),l("div",k,[o(m,{for:"password",value:"Password"}),o(n,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[3]||(a[3]=t=>s(e).password=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(r,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),l("div",P,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(n,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[4]||(a[4]=t=>s(e).password_confirmation=t),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(r,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),l("div",q,[o(s(b),{href:f.route("login"),class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},{default:i(()=>a[5]||(a[5]=[u(" Already registered? ")])),_:1},8,["href"]),o(y,{class:V(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:i(()=>a[6]||(a[6]=[u(" Register ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{A as default};
