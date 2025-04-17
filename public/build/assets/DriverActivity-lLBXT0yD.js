import{m,P as g,p,c as h,o as a,w as _,a as w,b as t,i as c,j as u,f as x,F as v,q as T,t as r}from"./app-nnnvBFJW.js";import{A as k}from"./AuthenticatedLayout-DRcgFkbp.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css            */const A={props:["data"],components:{AuthenticatedLayout:k,Link:g,Head:m},data(){return{start_date:null,end_date:null}},mounted(){},computed:{},methods:{filterData(){this.$inertia.post("/reports/vehicle_utilization",{start_date:this.start_date,end_date:this.end_date})},printReport(){const o=this.$refs.printTable,e=window.open("","","width=1000,height=800"),l=`
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                    }
                    h1 {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid #ccc;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f3f4f6;
                    }
                </style>
            <h1>Driver Activity Report</h1>${o.outerHTML}`;e.document.write(l),e.document.close(),e.onload=function(){e.focus(),e.print()}}}},C={class:"py-1"},L={class:"mx-auto sm:px-6 lg:px-8"},B={class:"overflow-hidden bg-white shadow-lg sm:rounded-lg"},H={class:"p-6 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0"},F={class:"flex items-center space-x-2 w-full md:w-auto"},N={ref:"printTable",class:"min-w-full border border-gray-200"},R={class:"px-4 py-2"},V={class:"px-4 py-2"},q={class:"px-4 py-2"},M={class:"px-4 py-2"},j={class:"px-4 py-2"},P={class:"px-4 py-2"},S={class:"px-4 py-2"},U={class:"px-4 py-2"},$={class:"px-4 py-2"};function z(o,e,d,b,l,i){const y=p("Head"),f=p("AuthenticatedLayout");return a(),h(f,null,{default:_(()=>[w(y,{title:"Reports / Driver Activity"}),t("div",C,[t("div",L,[t("div",B,[t("div",H,[e[8]||(e[8]=t("h3",{class:"text-2xl font-bold"},"Reports - Driver Activity",-1)),t("div",F,[e[6]||(e[6]=t("label",{for:"email",class:"mb-0 text-sm font-medium text-gray-900"},"From",-1)),c(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>l.start_date=s),type:"date",name:"email",onChange:e[1]||(e[1]=(...s)=>o.filterTrips&&o.filterTrips(...s)),id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,544),[[u,l.start_date]]),e[7]||(e[7]=t("label",{for:"email",class:"block mb-0 text-sm font-medium text-gray-900"},"To",-1)),c(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>l.end_date=s),type:"date",name:"email",onChange:e[3]||(e[3]=(...s)=>o.filterTrips&&o.filterTrips(...s)),id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,544),[[u,l.end_date]]),t("button",{onClick:e[4]||(e[4]=(...s)=>i.filterData&&i.filterData(...s)),class:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"},e[5]||(e[5]=[t("svg",{class:"w-6 h-6 text-white-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2",d:"M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"})],-1),t("span",null,"Filter",-1)]))])]),t("table",N,[e[9]||(e[9]=t("thead",{class:"bg-gray-100"},[t("tr",null,[t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"#"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Driver"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"License Number"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Contact Number"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Scheduled Trips"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Ongoing Trips"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Completed Trips"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Canceled Trips"),t("th",{class:"px-4 py-2 text-left text-gray-700 border-b"},"Total Trips")])],-1)),t("tbody",null,[(a(!0),x(v,null,T(d.data,(s,n)=>(a(),x("tr",{class:"border-b",key:n},[t("td",R,r(n+1),1),t("td",V,r(s.full_name),1),t("td",q,r(s.license_number),1),t("td",M,r(s.contact_number),1),t("td",j,r(s.scheduled_trips),1),t("td",P,r(s.ongoing_trips),1),t("td",S,r(s.completed_trips),1),t("td",U,r(s.canceled_trips),1),t("td",$,r(s.total_trips),1)]))),128))])],512)])])])]),_:1})}const G=D(A,[["render",z]]);export{G as default};
