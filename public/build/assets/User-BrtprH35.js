import{m as k,P as C,p as b,c as _,o as l,w as M,a as j,b as e,f as n,g as i,t as a,i as u,j as m,F as c,q as x,e as p,H as F,v as B,C as h}from"./app-DMYFAFEH.js";import{A as U}from"./AuthenticatedLayout-BKkKJYv6.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css            */const S={props:["users","errors"],components:{AuthenticatedLayout:U,Link:C,Head:k},data(){return{form:h({id:"",name:"",email:"",password:"",role:"",banned:!1,contact_number:"",active:!1,is_editing:!1}),delete_form:h({id:"",name:"",active:!1}),loading_button:!1,disabled_button:!1,is_created:!1,is_updated:!1,is_deleted:!1,search:"",roles:[{key:"admin",value:"Admin"},{key:"staff",value:"Staff"},{key:"passenger",value:"Passenger"}]}},mounted(){},computed:{filteredUsers(){return this.search?this.users.filter(d=>Object.values(d).some(t=>String(t).toLowerCase().includes(this.search.toLowerCase()))):this.users}},methods:{openForm(){this.form.id="",this.form.name="",this.form.email="",this.form.banned=!1,this.form.contact_number="",this.form.password="",this.form.role="",this.form.active=!0,this.form.is_editing=!1},closeForm(){this.form.id="",this.form.name="",this.form.email="",this.form.banned=!1,this.form.password="",this.form.contact_number="",this.form.role="",this.form.active=!1,this.form.is_editing=!1},editItem(d){this.form.id=d.id,this.form.name=d.name,this.form.email=d.email,this.form.banned=d.banned,this.form.role=d.role,this.form.contact_number=d.contact_number,this.form.active=!0,this.form.is_editing=!0},OpenDeleteForm(d){this.delete_form.id=d.id,this.delete_form.name=d.name,this.delete_form.active=!0},CloseDeleteForm(){this.delete_form.id="",this.delete_form.name="",this.form.price="",this.delete_form.active=!1},save(){this.form.post("/user/store",{onSuccess:()=>{this.closeForm(),this.is_created=!0},onError:()=>{}})},update(){this.form.patch("/user/update/"+this.form.id,{onSuccess:()=>{this.closeForm(),this.is_updated=!0},onError:()=>{}})},deleteItem(){this.form.delete("/user/destroy/"+this.delete_form.id,{onSuccess:()=>{this.CloseDeleteForm(),this.is_deleted=!0},onError:()=>{this.CloseDeleteForm()}})}}},Z={class:"py-1"},H={class:"mx-auto sm:px-6 lg:px-8"},V={class:"overflow-hidden bg-white shadow-lg sm:rounded-lg"},A={class:"px-6 pb-6 overflow-x-auto bg-white shadow-md rounded-lg mt-0"},L={key:0,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50",role:"alert"},N={key:1,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-yellow-800 border-t-4 border-yellow-300 bg-yellow-50",role:"alert"},E={key:2,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50",role:"alert"},I={key:3,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50",role:"alert"},q={class:"ms-3 text-sm font-medium"},z={class:"mb-2 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0"},P={class:"flex items-center space-x-2 w-full md:w-auto"},O={class:"min-w-full border border-gray-200"},R={class:"px-4 py-2"},T={class:"px-4 py-2"},Y={class:"px-4 py-2"},G={class:"px-4 py-2"},J={class:"px-4 py-2 flex space-x-2"},K=["onClick"],Q=["onClick"],W={key:0,id:"default-modal",tabindex:"-1","aria-hidden":"true",class:"fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"},X={class:"relative p-4 w-full max-w-2xl max-h-full"},$={class:"relative bg-white rounded-lg shadow-sm"},ee={class:"flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200"},te={class:"text-xl font-semibold text-gray-900"},re={class:"p-4 md:p-5 space-y-4"},se=["value"],oe={key:0},le={class:"flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b"},ne={key:1,id:"default-modal",tabindex:"-1","aria-hidden":"true",class:"fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"},de={class:"relative p-4 w-full max-w-2xl max-h-full"},ie={class:"relative bg-white rounded-lg shadow-sm"},ae={class:"flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200"},ue={class:"p-4 md:p-5 space-y-4"},me={class:"flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b"};function fe(d,t,g,ge,s,o){const w=b("Head"),y=b("AuthenticatedLayout");return l(),_(y,null,{default:M(()=>[j(w,{title:"Settings / User"}),e("div",Z,[e("div",H,[e("div",V,[t[33]||(t[33]=e("div",{class:"p-6 mb-5 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 border-b border-gray-300 shadow"},[e("h3",{class:"text-2xl font-bold"},"Settings - User")],-1)),e("div",A,[s.is_created?(l(),n("div",L,[t[19]||(t[19]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t[20]||(t[20]=e("div",{class:"ms-3 text-sm font-medium"}," User Created Successfully. ",-1)),e("button",{onClick:t[0]||(t[0]=r=>s.is_created=!1),type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8","data-dismiss-target":"#alert-border-1","aria-label":"Close"},t[18]||(t[18]=[e("span",{class:"sr-only"},"Dismiss",-1),e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))])):i("",!0),s.is_updated?(l(),n("div",N,[t[22]||(t[22]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t[23]||(t[23]=e("div",{class:"ms-3 text-sm font-medium"}," User Updated Successfully. ",-1)),e("button",{onClick:t[1]||(t[1]=r=>s.is_updated=!1),type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8","data-dismiss-target":"#alert-border-1","aria-label":"Close"},t[21]||(t[21]=[e("span",{class:"sr-only"},"Dismiss",-1),e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))])):i("",!0),s.is_deleted?(l(),n("div",E,[t[25]||(t[25]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t[26]||(t[26]=e("div",{class:"ms-3 text-sm font-medium"}," User Deleted Successfully. ",-1)),e("button",{onClick:t[2]||(t[2]=r=>s.is_deleted=!1),type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8","data-dismiss-target":"#alert-border-1","aria-label":"Close"},t[24]||(t[24]=[e("span",{class:"sr-only"},"Dismiss",-1),e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))])):i("",!0),g.errors.cannot_delete?(l(),n("div",I,[t[27]||(t[27]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),e("div",q,a(g.errors.cannot_delete),1)])):i("",!0),e("div",z,[e("button",{onClick:t[3]||(t[3]=(...r)=>o.openForm&&o.openForm(...r)),class:"px-4 py-2 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"},t[28]||(t[28]=[e("svg",{class:"w-6 h-6 text-white-800","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h14m-7 7V5"})],-1),e("span",null,"New Item",-1)])),e("div",P,[u(e("input",{type:"text",placeholder:"Search...","onUpdate:modelValue":t[4]||(t[4]=r=>s.search=r),class:"px-4 py-2 border rounded-lg w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[m,s.search]]),t[29]||(t[29]=e("button",{class:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"},[e("svg",{class:"w-6 h-6","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2",d:"m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"})]),e("span",null,"Search")],-1))])]),e("table",O,[t[32]||(t[32]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"#"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Name"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Role"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Status"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Actions")])],-1)),e("tbody",null,[(l(!0),n(c,null,x(o.filteredUsers,(r,f)=>(l(),n("tr",{class:"border-b",key:f},[e("td",R,a(f+1),1),e("td",T,a(r.name),1),e("td",Y,a(r.role),1),e("td",G,a(r.banned?"Banned":"Active"),1),e("td",J,[e("button",{onClick:v=>o.editItem(r),type:"button",class:"text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2"},t[30]||(t[30]=[e("svg",{class:"w-6 h-6 text-white-800","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"})],-1),p(" Edit ")]),8,K),e("button",{onClick:v=>o.OpenDeleteForm(r),type:"button",class:"text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2"},t[31]||(t[31]=[e("svg",{class:"w-6 h-6 text-white-800","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"})],-1),p(" Delete ")]),8,Q)])]))),128))])])])])])]),s.form.active?(l(),n("div",W,[e("div",X,[e("div",$,[e("div",ee,[e("h3",te,a(s.form.is_editing?"Edit":"Create")+" User ",1),e("button",{onClick:t[5]||(t[5]=(...r)=>o.closeForm&&o.closeForm(...r)),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center","data-modal-hide":"default-modal"},t[34]||(t[34]=[e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),e("span",{class:"sr-only"},"Close modal",-1)]))]),e("div",re,[e("div",null,[t[35]||(t[35]=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900"},"Name",-1)),u(e("input",{"onUpdate:modelValue":t[6]||(t[6]=r=>s.form.name=r),type:"text",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[m,s.form.name]])]),e("div",null,[t[36]||(t[36]=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900"},"Email Address",-1)),u(e("input",{"onUpdate:modelValue":t[7]||(t[7]=r=>s.form.email=r),type:"email",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[m,s.form.email]])]),e("div",null,[t[37]||(t[37]=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900"},"Password",-1)),u(e("input",{"onUpdate:modelValue":t[8]||(t[8]=r=>s.form.password=r),type:"password",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[m,s.form.password]])]),e("div",null,[t[38]||(t[38]=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900"},"Contact Number",-1)),u(e("input",{"onUpdate:modelValue":t[9]||(t[9]=r=>s.form.contact_number=r),type:"number",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[m,s.form.contact_number]])]),e("div",null,[t[39]||(t[39]=e("label",{for:"countries",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Role",-1)),u(e("select",{"onUpdate:modelValue":t[10]||(t[10]=r=>s.form.role=r),id:"countries",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(l(!0),n(c,null,x(s.roles,(r,f)=>(l(),n("option",{key:f,value:r.key},a(r.value),9,se))),128))],512),[[F,s.form.role]])]),s.form.role==="passenger"?(l(),n("div",oe,[u(e("input",{id:"default-checkbox","onUpdate:modelValue":t[11]||(t[11]=r=>s.form.banned=r),type:"checkbox",value:"",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[B,s.form.banned]]),t[40]||(t[40]=e("label",{for:"default-checkbox",class:"ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Ban user access",-1))])):i("",!0)]),e("div",le,[s.form.is_editing===!1?(l(),n("button",{key:0,onClick:t[12]||(t[12]=(...r)=>o.save&&o.save(...r)),"data-modal-hide":"default-modal",type:"button",class:"text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Save")):i("",!0),s.form.is_editing?(l(),n("button",{key:1,onClick:t[13]||(t[13]=(...r)=>o.update&&o.update(...r)),"data-modal-hide":"default-modal",type:"button",class:"text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Update")):i("",!0),e("button",{onClick:t[14]||(t[14]=(...r)=>o.closeForm&&o.closeForm(...r)),"data-modal-hide":"default-modal",type:"button",class:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"},"Cancel")])])])])):i("",!0),s.delete_form.active?(l(),n("div",ne,[e("div",de,[e("div",ie,[e("div",ae,[t[42]||(t[42]=e("h3",{class:"text-xl font-semibold text-gray-900"}," Delete this User? ",-1)),e("button",{onClick:t[15]||(t[15]=(...r)=>o.closeForm&&o.closeForm(...r)),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center","data-modal-hide":"default-modal"},t[41]||(t[41]=[e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),e("span",{class:"sr-only"},"Close modal",-1)]))]),e("div",ue,[e("div",null,a(s.delete_form.name),1)]),e("div",me,[e("button",{onClick:t[16]||(t[16]=(...r)=>o.deleteItem&&o.deleteItem(...r)),"data-modal-hide":"default-modal",type:"button",class:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Yes, Delete"),e("button",{onClick:t[17]||(t[17]=(...r)=>o.CloseDeleteForm&&o.CloseDeleteForm(...r)),"data-modal-hide":"default-modal",type:"button",class:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"},"Cancel")])])])])):i("",!0)]),_:1})}const he=D(S,[["render",fe]]);export{he as default};
