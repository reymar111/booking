import{C as p,c as f,o as w,w as i,a as o,b as r,u as s,m as _,d as g,P as b,e as u,n as V}from"./app-DpvEXxlt.js";import{_ as v}from"./GuestLayout-C__Uuht4.js";import{_ as t}from"./InputError-CiTRu2ot.js";import{_ as m,a as n}from"./TextInput-ZbLWO8Xu.js";import{P as y}from"./PrimaryButton-CHvQPRZ5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={class:"mt-4"},k={class:"mt-4"},P={class:"mt-4"},q={class:"mt-4 flex items-center justify-end"},z={__name:"Register",setup(C){const e=p({name:"",email:"",password:"",password_confirmation:"",contact_number:""}),d=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(c,a)=>(w(),f(v,null,{default:i(()=>[o(s(_),{title:"Register"}),r("form",{onSubmit:g(d,["prevent"])},[r("div",null,[o(m,{for:"name",value:"Name"}),o(n,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",null,[o(m,{for:"contact_number",value:"Contact Number"}),o(n,{id:"contact_number",type:"number",class:"mt-1 block w-full",modelValue:s(e).contact_number,"onUpdate:modelValue":a[1]||(a[1]=l=>s(e).contact_number=l),required:"",autofocus:"",autocomplete:"contact_number"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",x,[o(m,{for:"email",value:"Email"}),o(n,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[2]||(a[2]=l=>s(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",k,[o(m,{for:"password",value:"Password"}),o(n,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[3]||(a[3]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",P,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(n,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[4]||(a[4]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),r("div",q,[o(s(b),{href:c.route("login"),class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},{default:i(()=>a[5]||(a[5]=[u(" Already registered? ")])),_:1},8,["href"]),o(y,{class:V(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:i(()=>a[6]||(a[6]=[u(" Register ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{z as default};
