import{h as k,i,v as w,f as x,o as n,C as h,c as m,w as p,a as l,g as f,b as r,u as t,m as v,t as _,d as B,j as b,P as C,n as P,e as V}from"./app-DpvEXxlt.js";import{_ as z}from"./GuestLayout-C__Uuht4.js";import{_ as g}from"./InputError-CiTRu2ot.js";import{P as q}from"./PrimaryButton-CHvQPRZ5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const N=["value"],U={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(o,{emit:s}){const u=s,d=o,e=k({get(){return d.checked},set(a){u("update:checked",a)}});return(a,c)=>i((n(),x("input",{type:"checkbox",value:o.value,"onUpdate:modelValue":c[0]||(c[0]=y=>e.value=y),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,N)),[[w,e.value]])}},$={key:0,class:"mb-4 text-sm font-medium text-green-600"},L={class:"relative z-0"},M={class:"relative z-0 mt-10"},R={class:"mt-4 block"},S={class:"flex items-center"},j={class:"mt-4 flex items-center justify-end"},G={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(o){const s=h({email:"",password:"",remember:!1}),u=()=>{s.post(route("login"),{onFinish:()=>s.reset("password")})};return(d,e)=>(n(),m(z,null,{default:p(()=>[l(t(v),{title:"Log in"}),o.status?(n(),x("div",$,_(o.status),1)):f("",!0),r("form",{onSubmit:B(u,["prevent"])},[r("div",L,[i(r("input",{type:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=a=>t(s).email=a),required:"",autofocus:"",autocomplete:"username",class:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" "},null,512),[[b,t(s).email]]),e[3]||(e[3]=r("label",{for:"email",class:"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"},"Email Address",-1)),l(g,{class:"mt-2",message:t(s).errors.email},null,8,["message"])]),r("div",M,[i(r("input",{type:"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=a=>t(s).password=a),required:"",autofocus:"",autocomplete:"current-password",class:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" "},null,512),[[b,t(s).password]]),e[4]||(e[4]=r("label",{for:"password",class:"absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"},"Password",-1)),l(g,{class:"mt-2",message:t(s).errors.password},null,8,["message"])]),r("div",R,[r("label",S,[l(U,{name:"remember",checked:t(s).remember,"onUpdate:checked":e[2]||(e[2]=a=>t(s).remember=a)},null,8,["checked"]),e[5]||(e[5]=r("span",{class:"ms-2 text-sm text-gray-600"},"Remember me",-1))])]),r("div",j,[o.canResetPassword?(n(),m(t(C),{key:0,href:d.route("password.request"),class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},null,8,["href"])):f("",!0),l(q,{class:P(["ms-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:p(()=>e[6]||(e[6]=[V(" Log in ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{G as default};
