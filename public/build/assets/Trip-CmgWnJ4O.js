import{m as C,P as M,p as y,c as S,o as d,w as j,a as D,b as e,f as n,g as a,i as m,j as f,F as p,q as c,t as i,e as h,H as x,C as v}from"./app-DqCdAQAQ.js";import{A as F}from"./AuthenticatedLayout-BhTxI8-h.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css            */const B={props:["trips","vehicles","drivers"],components:{AuthenticatedLayout:F,Link:M,Head:C},data(){return{form:v({id:"",trip_code:"",vehicle_id:"",driver_id:"",origin:"",destination:"",departure_date:"",departure_time:"",active:!1,is_editing:!1}),delete_form:v({id:"",name:"",active:!1}),loading_button:!1,disabled_button:!1,is_created:!1,is_updated:!1,is_deleted:!1,is_started:!1,is_ended:!1,is_canceled:!1,selected_trip:v({id:null,trip_code:null,status:null,active:!1,modal:null}),view_trip:v({trip_code:null,passengers:[],route:null,vehicle:null,driver:null,travel_date:null,seats_available:null,seats_available:null,status:null,active:!1}),search:"",travel_date:null,routes:[{key:"Tabuk",value:"Tabuk"},{key:"Tuguegarao",value:"Tuguegarao"}],mode_of_payments:["Full","Installment"]}},mounted(){},computed:{filteredTrips(){return this.trips.filter(o=>{const t=!this.travel_date||o.departure_date===this.travel_date,g=!this.search||Object.values(o).some(w=>String(w).toLowerCase().includes(this.search.toLowerCase()));return t&&g})}},methods:{viewItem(o){this.view_trip.trip_code=o.trip_code,this.view_trip.passengers=o.bookings,this.view_trip.route=o.origin+" -> "+o.destination,this.view_trip.vehicle=o.vehicle!=null?o.vehicle.plate_number+"-"+o.vehicle.brand+" "+o.vehicle.model:"",this.view_trip.driver=o.driver!=null?o.driver.full_name:"",this.view_trip.travel_date=o.departure_date_v+" || "+o.departure_time_v,this.view_trip.status=o.status,this.view_trip.total_seats=o.total_seats,this.view_trip.seats_available=o.seats_available,this.view_trip.active=!0},closeViewItem(){this.view_trip.passengers=[],this.view_trip.route=null,this.view_trip.trip_code=null,this.view_trip.vehicle=null,this.view_trip.driver=null,this.view_trip.travel_date=null,this.view_trip.total_seats=null,this.view_trip.seats_available=null,this.view_trip.active=!1},openStatusForm(o,t,g){this.selected_trip.id=o.id,this.selected_trip.trip_code=o.trip_code,this.selected_trip.status=t,this.selected_trip.active=!0,this.selected_trip.modal=g},CloseStatusForm(){this.selected_trip.id=null,this.selected_trip.trip_code=null,this.selected_trip.status=null,this.selected_trip.active=!1,this.selected_trip.modal=null},openForm(){this.form.active=!0,this.form.is_editing=!1},closeForm(){this.form.id="",this.form.vehicle_id="",this.form.driver_id="",this.form.origin="",this.form.destination="",this.form.departure_date="",this.form.departure_time="",this.form.active=!1,this.form.is_editing=!1},editItem(o){this.form.id=o.id,this.form.vehicle_id=o.vehicle_id,this.form.driver_id=o.driver_id,this.form.origin=o.origin,this.form.destination=o.destination,this.form.departure_date=o.departure_date,this.form.departure_time=o.departure_time,this.form.active=!0,this.form.is_editing=!0},OpenDeleteForm(o){this.delete_form.id=o.id,this.delete_form.name=o.code,this.delete_form.active=!0},CloseDeleteForm(){this.delete_form.id="",this.delete_form.name="",this.delete_form.active=!1},save(){this.form.post("/trip/store",{onSuccess:()=>{this.closeForm(),this.is_created=!0},onError:()=>{}})},update(){this.form.patch("/trip/update/"+this.form.id,{onSuccess:()=>{this.closeForm(),this.is_updated=!0},onError:()=>{}})},updateStatus(){this.selected_trip.patch("/trip/update_status/"+this.selected_trip.id,{onSuccess:()=>{this.selected_trip.modal=="start"?this.is_started=!0:this.selected_trip.modal=="end"?this.is_ended=!0:this.selected_trip.modal=="cancel"&&(this.is_canceled=!0),this.selected_trip.id=null,this.selected_trip.active=!1},onError:()=>{}})},deleteItem(){this.form.delete("/trip/destroy/"+this.delete_form.id,{onSuccess:()=>{this.CloseDeleteForm(),this.is_deleted=!0},onError:()=>{}})}}},V={class:"py-1"},Z={class:"mx-auto sm:px-6 lg:px-8"},H={class:"overflow-hidden bg-white shadow-lg sm:rounded-lg"},I={class:"px-6 pb-6 overflow-x-auto bg-white shadow-md rounded-lg mt-0"},A={key:0,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50",role:"alert"},E={key:1,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-yellow-800 border-t-4 border-yellow-300 bg-yellow-50",role:"alert"},U={key:2,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50",role:"alert"},L={key:3,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-teal-800 border-t-4 border-teal-300 bg-teal-50",role:"alert"},z={key:4,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-orange-800 border-t-4 border-orange-300 bg-orange-50",role:"alert"},N={key:5,id:"alert-border-1",class:"flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50",role:"alert"},q={class:"mb-2 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0"},O={class:"flex items-center space-x-2 w-full md:w-auto"},P={class:"min-w-full border border-gray-200"},Y={class:"px-4 py-2"},R={class:"px-4 py-2"},G={class:"px-4 py-2"},J={class:"px-4 py-2"},K={class:"px-4 py-2"},Q={class:"px-4 py-2"},W={class:"px-4 py-2"},X={class:"px-4 py-2"},$={class:"px-4 py-2"},ee={class:"px-4 py-2 flex space-x-2"},te=["onClick"],re=["onClick"],se=["onClick"],le=["onClick"],oe=["onClick"],ie=["onClick"],de={key:0,id:"default-modal",tabindex:"-1","aria-hidden":"true",class:"fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"},ne={class:"relative p-4 w-full max-w-2xl max-h-full"},ae={class:"relative bg-white rounded-lg shadow-sm"},ue={class:"flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200"},me={class:"text-xl font-semibold text-gray-900"},ge={class:"p-4 md:p-5 space-y-4"},pe=["value"],ce=["value"],be={class:"flex flex-col md:flex-row gap-4"},fe={class:"w-full"},he=["value"],xe={class:"w-full"},ve=["value"],we={class:"flex flex-col md:flex-row gap-4"},ye={class:"w-full"},ke={class:"w-full"},_e={class:"flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b"},Ce={key:1,id:"default-modal",tabindex:"-1","aria-hidden":"true",class:"fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"},Me={class:"relative p-4 w-full max-w-2xl max-h-full"},Se={class:"relative bg-white rounded-lg shadow-sm"},je={class:"flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200"},De={class:"p-4 md:p-5 space-y-4"},Fe={class:"flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b"},Te={key:2,id:"default-modal",tabindex:"-1","aria-hidden":"true",class:"fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"},Be={class:"relative p-4 w-full max-w-2xl max-h-full"},Ve={class:"relative bg-white rounded-lg shadow-sm"},Ze={class:"flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200"},He={class:"text-xl font-semibold text-gray-900"},Ie={class:"p-4 md:p-5 space-y-4"},Ae={class:"flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b"},Ee={key:3,id:"default-modal",tabindex:"-1","aria-hidden":"true",class:"fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"},Ue={class:"relative p-6 w-full max-w-5xl max-h-[90vh]"},Le={class:"relative bg-white rounded-lg shadow-lg"},ze={class:"flex items-center justify-between p-6 border-b border-gray-200 rounded-t"},Ne={class:"text-2xl font-semibold text-gray-900"},qe={class:"p-6 grid grid-cols-2 gap-6"},Oe={class:"border border-gray-300 rounded-lg shadow-sm p-4"},Pe={class:"min-w-full border border-gray-200"},Ye={class:"border-b"},Re={class:"border-b"},Ge={class:"border-b"},Je={class:"border-b"},Ke={class:"border-b"},Qe={class:"border-b"},We={class:"border-b"},Xe={class:"border border-gray-300 rounded-lg shadow-sm p-4"},$e={class:"min-w-full border border-gray-200"},et={class:"px-4 py-2"},tt={class:"px-4 py-2"},rt={class:"p-6 border-t border-gray-200 rounded-b"};function st(o,t,g,w,s,l){const k=y("Head"),_=y("AuthenticatedLayout");return d(),S(_,null,{default:j(()=>[D(k,{title:"Trips"}),e("div",V,[e("div",Z,[e("div",H,[t[58]||(t[58]=e("div",{class:"p-6 mb-5 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 border-b border-gray-300 shadow"},[e("h3",{class:"text-2xl font-bold"},"Trips")],-1)),e("div",I,[s.is_created?(d(),n("div",A,[t[31]||(t[31]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t[32]||(t[32]=e("div",{class:"ms-3 text-sm font-medium"}," Trip Created Successfully. ",-1)),e("button",{onClick:t[0]||(t[0]=r=>s.is_created=!1),type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8","data-dismiss-target":"#alert-border-1","aria-label":"Close"},t[30]||(t[30]=[e("span",{class:"sr-only"},"Dismiss",-1),e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))])):a("",!0),s.is_updated?(d(),n("div",E,[t[34]||(t[34]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t[35]||(t[35]=e("div",{class:"ms-3 text-sm font-medium"}," Trip Updated Successfully. ",-1)),e("button",{onClick:t[1]||(t[1]=r=>s.is_updated=!1),type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8","data-dismiss-target":"#alert-border-1","aria-label":"Close"},t[33]||(t[33]=[e("span",{class:"sr-only"},"Dismiss",-1),e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))])):a("",!0),s.is_deleted?(d(),n("div",U,[t[37]||(t[37]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t[38]||(t[38]=e("div",{class:"ms-3 text-sm font-medium"}," Trip Deleted Successfully. ",-1)),e("button",{onClick:t[2]||(t[2]=r=>s.is_deleted=!1),type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8","data-dismiss-target":"#alert-border-1","aria-label":"Close"},t[36]||(t[36]=[e("span",{class:"sr-only"},"Dismiss",-1),e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))])):a("",!0),s.is_canceled?(d(),n("div",L,[t[40]||(t[40]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t[41]||(t[41]=e("div",{class:"ms-3 text-sm font-medium"}," Trip Canceled ",-1)),e("button",{onClick:t[3]||(t[3]=r=>s.is_canceled=!1),type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-teal-50 text-teal-500 rounded-lg focus:ring-2 focus:ring-teal-400 p-1.5 hover:bg-teal-200 inline-flex items-center justify-center h-8 w-8","data-dismiss-target":"#alert-border-1","aria-label":"Close"},t[39]||(t[39]=[e("span",{class:"sr-only"},"Dismiss",-1),e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))])):a("",!0),s.is_started?(d(),n("div",z,[t[43]||(t[43]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t[44]||(t[44]=e("div",{class:"ms-3 text-sm font-medium"}," Trip Started ",-1)),e("button",{onClick:t[4]||(t[4]=r=>s.is_started=!1),type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-orange-50 text-orange-500 rounded-lg focus:ring-2 focus:ring-orange-400 p-1.5 hover:bg-orange-200 inline-flex items-center justify-center h-8 w-8","data-dismiss-target":"#alert-border-1","aria-label":"Close"},t[42]||(t[42]=[e("span",{class:"sr-only"},"Dismiss",-1),e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))])):a("",!0),s.is_ended?(d(),n("div",N,[t[46]||(t[46]=e("svg",{class:"shrink-0 w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"})],-1)),t[47]||(t[47]=e("div",{class:"ms-3 text-sm font-medium"}," Trip Ended ",-1)),e("button",{onClick:t[5]||(t[5]=r=>s.is_ended=!1),type:"button",class:"ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8","data-dismiss-target":"#alert-border-1","aria-label":"Close"},t[45]||(t[45]=[e("span",{class:"sr-only"},"Dismiss",-1),e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1)]))])):a("",!0),e("div",q,[e("button",{onClick:t[6]||(t[6]=(...r)=>l.openForm&&l.openForm(...r)),class:"px-4 py-2 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"},t[48]||(t[48]=[e("svg",{class:"w-6 h-6 text-white-800","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 12h14m-7 7V5"})],-1),e("span",null,"New Item",-1)])),e("div",O,[t[49]||(t[49]=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900"},"Travel Date",-1)),m(e("input",{"onUpdate:modelValue":t[7]||(t[7]=r=>s.travel_date=r),type:"date",name:"email",onChange:t[8]||(t[8]=(...r)=>o.filterTrips&&o.filterTrips(...r)),id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,544),[[f,s.travel_date]]),m(e("input",{type:"text",placeholder:"Search...","onUpdate:modelValue":t[9]||(t[9]=r=>s.search=r),class:"px-4 py-2 border rounded-lg w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[f,s.search]]),t[50]||(t[50]=e("button",{class:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"},[e("svg",{class:"w-6 h-6","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2",d:"m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"})]),e("span",null,"Search")],-1))])]),e("table",P,[t[57]||(t[57]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"#"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Trip"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Route"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Vehicle"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Driver"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Travel Date"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Total Seats"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Available Seats"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Status"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Actions")])],-1)),e("tbody",null,[(d(!0),n(p,null,c(l.filteredTrips,(r,u)=>(d(),n("tr",{class:"border-b",key:u},[e("td",Y,i(u+1),1),e("td",R,i(r.trip_code),1),e("td",G,i(r.origin)+" -> "+i(r.destination),1),e("td",J,i(r.vehicle!=null?r.vehicle.plate_number+"-"+r.vehicle.brand+" "+r.vehicle.model:""),1),e("td",K,i(r.driver!=null?r.driver.full_name:""),1),e("td",Q,i(r.departure_date_v)+" || "+i(r.departure_time_v),1),e("td",W,i(r.total_seats),1),e("td",X,i(r.seats_available),1),e("td",$,i(r.status),1),e("td",ee,[e("button",{onClick:b=>l.viewItem(r),type:"button",class:"text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2"},t[51]||(t[51]=[e("svg",{class:"w-6 h-6 text-white-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-width":"2",d:"M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"}),e("path",{stroke:"currentColor","stroke-width":"2",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})],-1),h(" View ")]),8,te),r.status=="scheduled"?(d(),n("button",{key:0,onClick:b=>l.openStatusForm(r,"ongoing","start"),type:"button",class:"text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2"},t[52]||(t[52]=[e("svg",{class:"w-6 h-6 text-white-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 18V6l8 6-8 6Z"})],-1)]),8,re)):a("",!0),r.status=="ongoing"?(d(),n("button",{key:1,onClick:b=>l.openStatusForm(r,"completed","end"),type:"button",class:"text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2"},t[53]||(t[53]=[e("svg",{class:"w-6 h-6 text-white-400 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 24 24"},[e("path",{d:"M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Z"})],-1)]),8,se)):a("",!0),r.status=="scheduled"?(d(),n("button",{key:2,onClick:b=>l.openStatusForm(r,"canceled","cancel"),type:"button",class:"text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2"},t[54]||(t[54]=[e("svg",{class:"w-6 h-6 text-white-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18 17.94 6M18 18 6.06 6"})],-1),h(" Cancel ")]),8,le)):a("",!0),r.status=="pending"?(d(),n("button",{key:3,onClick:b=>l.editItem(r),type:"button",class:"text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2"},t[55]||(t[55]=[e("svg",{class:"w-6 h-6 text-white-800","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"})],-1),h(" Edit ")]),8,oe)):a("",!0),r.status=="pending"?(d(),n("button",{key:4,onClick:b=>l.OpenDeleteForm(r),type:"button",class:"text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2"},t[56]||(t[56]=[e("svg",{class:"w-6 h-6 text-white-800","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"})],-1),h(" Delete ")]),8,ie)):a("",!0)])]))),128))])])])])])]),s.form.active?(d(),n("div",de,[e("div",ne,[e("div",ae,[e("div",ue,[e("h3",me,i(s.form.is_editing?"Edit":"Create")+" Trip ",1),e("button",{onClick:t[10]||(t[10]=(...r)=>l.closeForm&&l.closeForm(...r)),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center","data-modal-hide":"default-modal"},t[59]||(t[59]=[e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),e("span",{class:"sr-only"},"Close modal",-1)]))]),e("div",ge,[e("div",null,[t[60]||(t[60]=e("label",{for:"countries",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Vehicle",-1)),m(e("select",{"onUpdate:modelValue":t[11]||(t[11]=r=>s.form.vehicle_id=r),id:"countries",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(d(!0),n(p,null,c(g.vehicles,(r,u)=>(d(),n("option",{key:u,value:r.id},i(r.plate_number)+"-"+i(r.brand)+" "+i(r.model),9,pe))),128))],512),[[x,s.form.vehicle_id]])]),e("div",null,[t[61]||(t[61]=e("label",{for:"countries",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Driver",-1)),m(e("select",{"onUpdate:modelValue":t[12]||(t[12]=r=>s.form.driver_id=r),id:"countries",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(d(!0),n(p,null,c(g.drivers,(r,u)=>(d(),n("option",{key:u,value:r.id},i(r.full_name),9,ce))),128))],512),[[x,s.form.driver_id]])]),e("div",be,[e("div",fe,[t[62]||(t[62]=e("label",{for:"countries",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Origin",-1)),m(e("select",{"onUpdate:modelValue":t[13]||(t[13]=r=>s.form.origin=r),id:"countries",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(d(!0),n(p,null,c(s.routes,(r,u)=>(d(),n("option",{key:u,value:r.key},i(r.value),9,he))),128))],512),[[x,s.form.origin]])]),e("div",xe,[t[63]||(t[63]=e("label",{for:"countries",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Destination",-1)),m(e("select",{"onUpdate:modelValue":t[14]||(t[14]=r=>s.form.destination=r),id:"countries",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(d(!0),n(p,null,c(s.routes,(r,u)=>(d(),n("option",{key:u,value:r.key},i(r.value),9,ve))),128))],512),[[x,s.form.destination]])])]),e("div",we,[e("div",ye,[t[64]||(t[64]=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900"},"Departure Date",-1)),m(e("input",{"onUpdate:modelValue":t[15]||(t[15]=r=>s.form.departure_date=r),type:"date",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[f,s.form.departure_date]])]),e("div",ke,[t[65]||(t[65]=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900"},"Departure Time",-1)),m(e("input",{"onUpdate:modelValue":t[16]||(t[16]=r=>s.form.departure_time=r),type:"time",name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[f,s.form.departure_time]])])])]),e("div",_e,[s.form.is_editing===!1?(d(),n("button",{key:0,onClick:t[17]||(t[17]=(...r)=>l.save&&l.save(...r)),"data-modal-hide":"default-modal",type:"button",class:"text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Save")):a("",!0),s.form.is_editing?(d(),n("button",{key:1,onClick:t[18]||(t[18]=(...r)=>l.update&&l.update(...r)),"data-modal-hide":"default-modal",type:"button",class:"text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Update")):a("",!0),e("button",{onClick:t[19]||(t[19]=(...r)=>l.closeForm&&l.closeForm(...r)),"data-modal-hide":"default-modal",type:"button",class:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"},"Cancel")])])])])):a("",!0),s.delete_form.active?(d(),n("div",Ce,[e("div",Me,[e("div",Se,[e("div",je,[t[67]||(t[67]=e("h3",{class:"text-xl font-semibold text-gray-900"}," Delete this trip? ",-1)),e("button",{onClick:t[20]||(t[20]=(...r)=>l.closeForm&&l.closeForm(...r)),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center","data-modal-hide":"default-modal"},t[66]||(t[66]=[e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),e("span",{class:"sr-only"},"Close modal",-1)]))]),e("div",De,[e("div",null,i(s.delete_form.name),1)]),e("div",Fe,[e("button",{onClick:t[21]||(t[21]=(...r)=>l.deleteItem&&l.deleteItem(...r)),"data-modal-hide":"default-modal",type:"button",class:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Yes, Delete"),e("button",{onClick:t[22]||(t[22]=(...r)=>l.CloseDeleteForm&&l.CloseDeleteForm(...r)),"data-modal-hide":"default-modal",type:"button",class:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"},"Cancel")])])])])):a("",!0),s.selected_trip.active?(d(),n("div",Te,[e("div",Be,[e("div",Ve,[e("div",Ze,[e("h3",He,i(s.selected_trip.status==="canceled"?"Cancel ":"")+i(s.selected_trip.status==="ongoing"?"Start ":"")+i(s.selected_trip.status==="completed"?"End":"")+" this trip: "+i(s.selected_trip.trip_code)+"? ",1),e("button",{onClick:t[23]||(t[23]=(...r)=>l.CloseStatusForm&&l.CloseStatusForm(...r)),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center","data-modal-hide":"default-modal"},t[68]||(t[68]=[e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),e("span",{class:"sr-only"},"Close modal",-1)]))]),e("div",Ie,[e("div",null,i(s.selected_trip.code),1)]),e("div",Ae,[s.selected_trip.modal=="cancel"?(d(),n("button",{key:0,onClick:t[24]||(t[24]=(...r)=>l.updateStatus&&l.updateStatus(...r)),"selected_tripdata-modal-hide":"default-modal",type:"button",class:"text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Yes, Cancel")):a("",!0),s.selected_trip.modal=="start"?(d(),n("button",{key:1,onClick:t[25]||(t[25]=(...r)=>l.updateStatus&&l.updateStatus(...r)),"selected_tripdata-modal-hide":"default-modal",type:"button",class:"text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Yes, Start ")):a("",!0),s.selected_trip.modal=="end"?(d(),n("button",{key:2,onClick:t[26]||(t[26]=(...r)=>l.updateStatus&&l.updateStatus(...r)),"selected_tripdata-modal-hide":"default-modal",type:"button",class:"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Yes, End ")):a("",!0),e("button",{onClick:t[27]||(t[27]=(...r)=>l.CloseStatusForm&&l.CloseStatusForm(...r)),"data-modal-hide":"default-modal",type:"button",class:"py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"},"Close")])])])])):a("",!0),s.view_trip.active?(d(),n("div",Ee,[e("div",Ue,[e("div",Le,[e("div",ze,[e("h3",Ne," Trip: "+i(s.view_trip.trip_code),1),e("button",{onClick:t[28]||(t[28]=(...r)=>l.closeViewItem&&l.closeViewItem(...r)),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center","data-modal-hide":"default-modal"},t[69]||(t[69]=[e("svg",{class:"w-4 h-4","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),e("span",{class:"sr-only"},"Close modal",-1)]))]),e("div",qe,[e("div",Oe,[t[77]||(t[77]=e("h4",{class:"text-lg font-semibold mb-3"},"Trip Details",-1)),e("table",Pe,[e("tr",Ye,[t[70]||(t[70]=e("td",{class:"font-medium"},"Route:",-1)),e("td",null,i(s.view_trip.route),1)]),e("tr",Re,[t[71]||(t[71]=e("td",{class:"font-medium"},"Vehicle:",-1)),e("td",null,i(s.view_trip.vehicle),1)]),e("tr",Ge,[t[72]||(t[72]=e("td",{class:"font-medium"},"Driver:",-1)),e("td",null,i(s.view_trip.driver),1)]),e("tr",Je,[t[73]||(t[73]=e("td",{class:"font-medium"},"Travel Date:",-1)),e("td",null,i(s.view_trip.travel_date),1)]),e("tr",Ke,[t[74]||(t[74]=e("td",{class:"font-medium"},"Status:",-1)),e("td",null,i(s.view_trip.status),1)]),e("tr",Qe,[t[75]||(t[75]=e("td",{class:"font-medium"},"Total Seats:",-1)),e("td",null,i(s.view_trip.total_seats),1)]),e("tr",We,[t[76]||(t[76]=e("td",{class:"font-medium"},"Seats Available:",-1)),e("td",null,i(s.view_trip.seats_available),1)])])]),e("div",Xe,[t[79]||(t[79]=e("h4",{class:"text-lg font-semibold mb-3"},"Passenger Details",-1)),e("table",$e,[t[78]||(t[78]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Seat #"),e("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Passenger")])],-1)),e("tbody",null,[(d(!0),n(p,null,c(s.view_trip.passengers,(r,u)=>(d(),n("tr",{class:"border-b",key:u},[e("td",et,i(r.seat_number),1),e("td",tt,i(r.user!=null?r.user.name:""),1)]))),128))])])])]),e("div",rt,[e("button",{onClick:t[29]||(t[29]=(...r)=>l.closeViewItem&&l.closeViewItem(...r)),type:"button",class:"w-full py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"}," Close ")])])])])):a("",!0)]),_:1})}const nt=T(B,[["render",st]]);export{nt as default};
