import{m as f,P as m,p as c,c as b,o as n,w,a as v,b as e,f as i,g as a,i as y,j as k,F as _,q as C,t as r,C as p}from"./app-DpvEXxlt.js";import{A as M}from"./AuthenticatedLayout-CmhO04LZ.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const j={props:["bookings"],components:{AuthenticatedLayout:M,Link:m,Head:f},data(){return{form:p({id:"",active:!1,is_editing:!1}),delete_form:p({id:"",active:!1}),loading_button:!1,disabled_button:!1,is_confirmed:!1,is_canceled:!1,search:""}},mounted(){},computed:{filteredBookings(){return this.search?this.bookings.filter(o=>Object.values(o).some(t=>String(t).toLowerCase().includes(this.search.toLowerCase()))):this.bookings}},methods:{openForm(){this.form.active=!0,this.form.is_editing=!1},OpenDeleteForm(o){this.delete_form.id=o.id,this.delete_form.name=o.code,this.delete_form.active=!0},CloseDeleteForm(){this.delete_form.id="",this.delete_form.name="",this.delete_form.active=!1},accept(o){this.form.patch("/update_booking/accept/"+o,{onSuccess:()=>{this.is_confirmed=!0},onError:()=>{}})},cancelItem(o){this.form.patch("/update_booking/cancel/"+o,{onSuccess:()=>{this.is_canceled=!0},onError:()=>{}})}}},S={class:"py-1"},A={class:"mx-auto sm:px-6 lg:px-8"},D={class:"overflow-hidden bg-white shadow-lg sm:rounded-lg"},F={class:"px-6 pb-6 overflow-x-auto bg-white shadow-md rounded-lg mt-0"},H={key:0,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-teal-800 border-t-4 border-teal-300 bg-teal-50",role:"alert"},L={key:1,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-indigo-800 border-t-4 border-indigo-300 bg-indigo-50",role:"alert"},Z={class:"mb-2 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0"},R={class:"flex items-center space-x-2 w-full md:w-auto"},V={class:"min-w-full border border-gray-200"},N={class:"px-4 py-2"},E={class:"px-4 py-2"},I={class:"px-4 py-2"},P={class:"px-4 py-2"},T={class:"px-4 py-2"},O={class:"px-4 py-2"},q={class:"px-4 py-2"},U={class:"px-4 py-2"},z={class:"px-4 py-2 flex space-x-2"},G=["onClick"],J=["onClick"];function K(o,t,Q,W,l,d){const g=c("Head"),h=c("AuthenticatedLayout");return n(),b(h,null,{default:w(()=>[v(g,{title:"Reservations"}),e("div",S,[e("div",A,[e("div",D,[t[15]||(t[15]=e("div",{class:"p-6 mb-5 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 border-b border-gray-300 shadow"},[e("h3",{class:"text-2xl font-bold"},"Reservations")],-1)),e("div",F,[l.is_canceled?(n(),i("div",H,[t[5]||(t[5]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t[6]||(t[6]=e("div",{class:"ms-3 text-sm font-medium"}," Reservation Canceled ",-1)),e("button",{onClick:t[0]||(t[0]=s=>l.is_canceled=!1),type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-teal-50 text-teal-500 rounded-lg focus:ring-2 focus:ring-teal-400 p-1.5 hover:bg-teal-200 inline-flex items-center justify-center h-8 w-8","data-dismiss-target":"#alert-border-1","aria-label":"Close"},t[4]||(t[4]=[e("span",{class:"sr-only"},"Dismiss",-1),e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))])):a("",!0),l.is_confirmed?(n(),i("div",L,[t[8]||(t[8]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t[9]||(t[9]=e("div",{class:"ms-3 text-sm font-medium"}," Reservation Confirmed ",-1)),e("button",{onClick:t[1]||(t[1]=s=>l.is_confirmed=!1),type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-indigo-50 text-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-400 p-1.5 hover:bg-indigo-200 inline-flex items-center justify-center h-8 w-8","data-dismiss-target":"#alert-border-1","aria-label":"Close"},t[7]||(t[7]=[e("span",{class:"sr-only"},"Dismiss",-1),e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))])):a("",!0),e("div",Z,[e("button",{onClick:t[2]||(t[2]=(...s)=>d.openForm&&d.openForm(...s)),class:"px-4 py-2 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"},t[10]||(t[10]=[e("svg",{class:"w-6 h-6 text-white-800","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h14m-7 7V5"})],-1),e("span",null,"New Item",-1)])),e("div",R,[y(e("input",{type:"text",placeholder:"Search...","onUpdate:modelValue":t[3]||(t[3]=s=>l.search=s),class:"px-4 py-2 border rounded-lg w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[k,l.search]]),t[11]||(t[11]=e("button",{class:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"},[e("svg",{class:"w-6 h-6","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2",d:"m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"})]),e("span",null,"Search")],-1))])]),e("table",V,[t[14]||(t[14]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"#"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Trip"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Passennger"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Route"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Vehicle"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Seat Number "),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Travel Date"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Status"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Actions")])],-1)),e("tbody",null,[(n(!0),i(_,null,C(d.filteredBookings,(s,u)=>(n(),i("tr",{class:"border-b",key:u},[e("td",N,r(u+1),1),e("td",E,r(s.trip!=null?s.trip.trip_code:""),1),e("td",I,r(s.user!=null?s.user.name:""),1),e("td",P,r(s.trip!=null?s.trip.origin:"")+" -> "+r(s.trip!=null?s.trip.destination:""),1),e("td",T,r(s.trip!=null&&s.trip.vehicle!=null?s.trip.vehicle.plate_number:""),1),e("td",O,r(s.seat_number),1),e("td",q,r(s.trip!=null?s.trip.departure_date_v:"")+" | "+r(s.trip!=null?s.trip.departure_time_v:""),1),e("td",U,r(s.status),1),e("td",z,[s.status=="pending"?(n(),i("button",{key:0,type:"button",onClick:x=>d.accept(s.id),class:"px-1 py-1 text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},t[12]||(t[12]=[e("svg",{class:"w-5 h-5 text-white-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 11.917 9.724 16.5 19 7.5"})],-1)]),8,G)):a("",!0),s.status=="pending"?(n(),i("button",{key:1,type:"button",onClick:x=>d.cancelItem(s.id),class:"px-1 py-1 text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"},t[13]||(t[13]=[e("svg",{class:"w-5 h-5 text-white-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18 17.94 6M18 18 6.06 6"})],-1)]),8,J)):a("",!0)])]))),128))])])])])])])]),_:1})}const ee=B(j,[["render",K]]);export{ee as default};
