import{m as b,P as y,p as n,c as g,o as x,w as f,a as v,b as e,i,j as m,t as o}from"./app-DpvEXxlt.js";import{A as c}from"./AuthenticatedLayout-CmhO04LZ.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _={props:["data"],components:{AuthenticatedLayout:c,Link:y,Head:b},data(){return{start_date:null,end_date:null}},mounted(){},computed:{},methods:{filterReservationSummary(){this.$inertia.post("/reports/reservation_summary",{start_date:this.start_date,end_date:this.end_date})}}},R={class:"py-1"},h={class:"mx-auto sm:px-6 lg:px-8"},k={class:"overflow-hidden bg-white shadow-lg sm:rounded-lg"},C={class:"p-6 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0"},S={class:"flex items-center space-x-2 w-full md:w-auto"},T={class:"min-w-full border border-gray-200"},A={class:"bg-gray-100"},B={class:"border border-gray-200 px-4 py-2"},H={class:"border border-gray-200 px-4 py-2"},L={class:"border border-gray-200 px-4 py-2"},V={class:"border border-gray-200 px-4 py-2"},P={class:"border border-gray-200 px-4 py-2"},j={class:"border border-gray-200 px-4 py-2"};function q(a,t,s,D,d,l){const u=n("Head"),p=n("AuthenticatedLayout");return x(),g(p,null,{default:f(()=>[v(u,{title:"Reports / Reservation Summary"}),e("div",R,[e("div",h,[e("div",k,[e("div",C,[t[8]||(t[8]=e("h3",{class:"text-2xl font-bold"},"Reports - Reservation Summary",-1)),e("div",S,[t[6]||(t[6]=e("label",{for:"email",class:"mb-0 text-sm font-medium text-gray-900"},"From",-1)),i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>d.start_date=r),type:"date",name:"email",onChange:t[1]||(t[1]=(...r)=>a.filterTrips&&a.filterTrips(...r)),id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,544),[[m,d.start_date]]),t[7]||(t[7]=e("label",{for:"email",class:"block mb-0 text-sm font-medium text-gray-900"},"To",-1)),i(e("input",{"onUpdate:modelValue":t[2]||(t[2]=r=>d.end_date=r),type:"date",name:"email",onChange:t[3]||(t[3]=(...r)=>a.filterTrips&&a.filterTrips(...r)),id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,544),[[m,d.end_date]]),e("button",{onClick:t[4]||(t[4]=(...r)=>l.filterReservationSummary&&l.filterReservationSummary(...r)),class:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"},t[5]||(t[5]=[e("svg",{class:"w-6 h-6 text-white-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2",d:"M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"})],-1),e("span",null,"Filter",-1)]))])]),e("table",T,[e("tbody",A,[e("tr",null,[t[9]||(t[9]=e("td",{class:"border border-gray-200 px-4 py-2"},"Canceled Reservations",-1)),e("td",B,o(s.data.canceled_reservations),1)]),e("tr",null,[t[10]||(t[10]=e("td",{class:"border border-gray-200 px-4 py-2"},"Completed Reservations",-1)),e("td",H,o(s.data.completed_reservations),1)]),e("tr",null,[t[11]||(t[11]=e("td",{class:"border border-gray-200 px-4 py-2"},"Completed Reservations",-1)),e("td",L,o(s.data.completed_reservations),1)]),e("tr",null,[t[12]||(t[12]=e("td",{class:"border border-gray-200 px-4 py-2"},"Confirmed Reservations",-1)),e("td",V,o(s.data.confirmed_reservations),1)]),e("tr",null,[t[13]||(t[13]=e("td",{class:"border border-gray-200 px-4 py-2"},"Pending Reservations",-1)),e("td",P,o(s.data.pending_reservations),1)]),e("tr",null,[t[14]||(t[14]=e("td",{class:"border border-gray-200 px-4 py-2"},"Total Reservations",-1)),e("td",j,o(s.data.total_reservations),1)])])])])])])]),_:1})}const U=w(_,[["render",q]]);export{U as default};
