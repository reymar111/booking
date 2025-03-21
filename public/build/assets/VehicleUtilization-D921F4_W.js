import{m as f,P as y,p as n,c as g,o,w as h,a as _,b as t,i as p,j as u,f as m,F as w,q as v,t as l}from"./app-DqCdAQAQ.js";import{A as k}from"./AuthenticatedLayout-BhTxI8-h.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css            */const C={props:["data"],components:{AuthenticatedLayout:k,Link:y,Head:f},data(){return{start_date:null,end_date:null}},mounted(){},computed:{},methods:{filterData(){this.$inertia.post("/reports/vehicle_utilization",{start_date:this.start_date,end_date:this.end_date})}}},V={class:"py-1"},B={class:"mx-auto sm:px-6 lg:px-8"},D={class:"overflow-hidden bg-white shadow-lg sm:rounded-lg"},L={class:"p-6 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0"},U={class:"flex items-center space-x-2 w-full md:w-auto"},z={class:"min-w-full border border-gray-200"},A={class:"px-4 py-2"},F={class:"px-4 py-2"},H={class:"px-4 py-2"},q={class:"px-4 py-2"},M={class:"px-4 py-2"},N={class:"px-4 py-2"};function P(a,e,x,j,r,d){const b=n("Head"),c=n("AuthenticatedLayout");return o(),g(c,null,{default:h(()=>[_(b,{title:"Reports / Vehicle Utilization"}),t("div",V,[t("div",B,[t("div",D,[t("div",L,[e[8]||(e[8]=t("h3",{class:"text-2xl font-bold"},"Reports - Vehicle Utilization",-1)),t("div",U,[e[6]||(e[6]=t("label",{for:"email",class:"mb-0 text-sm font-medium text-gray-900"},"From",-1)),p(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>r.start_date=s),type:"date",name:"email",onChange:e[1]||(e[1]=(...s)=>a.filterTrips&&a.filterTrips(...s)),id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,544),[[u,r.start_date]]),e[7]||(e[7]=t("label",{for:"email",class:"block mb-0 text-sm font-medium text-gray-900"},"To",-1)),p(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>r.end_date=s),type:"date",name:"email",onChange:e[3]||(e[3]=(...s)=>a.filterTrips&&a.filterTrips(...s)),id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,544),[[u,r.end_date]]),t("button",{onClick:e[4]||(e[4]=(...s)=>d.filterData&&d.filterData(...s)),class:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"},e[5]||(e[5]=[t("svg",{class:"w-6 h-6 text-white-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2",d:"M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"})],-1),t("span",null,"Filter",-1)]))])]),t("table",z,[e[9]||(e[9]=t("thead",{class:"bg-gray-100"},[t("tr",null,[t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"#"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Plate Number"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Model"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Capacity"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Status"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Total Trips")])],-1)),t("tbody",null,[(o(!0),m(w,null,v(x.data,(s,i)=>(o(),m("tr",{class:"border-b",key:i},[t("td",A,l(i+1),1),t("td",F,l(s.plate_number),1),t("td",H,l(s.model),1),t("td",q,l(s.capacity),1),t("td",M,l(s.status),1),t("td",N,l(s.total_trips),1)]))),128))])])])])])]),_:1})}const G=T(C,[["render",P]]);export{G as default};
