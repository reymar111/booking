import{m as y,P as g,p as n,c as f,o as x,w as c,a as v,b as e,i,j as m,t as d}from"./app-nnnvBFJW.js";import{A as w}from"./AuthenticatedLayout-DRcgFkbp.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css            */const _={props:["data"],components:{AuthenticatedLayout:w,Link:g,Head:y},data(){return{start_date:null,end_date:null}},mounted(){},computed:{},methods:{filterReservationSummary(){this.$inertia.post("/reports/reservation_summary",{start_date:this.start_date,end_date:this.end_date})},printReport(){const o=this.$refs.printTable,t=window.open("","","width=1000,height=800"),a=`
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
            <h1>Reservation Summary Report</h1>${o.outerHTML}`;t.document.write(a),t.document.close(),t.onload=function(){t.focus(),t.print()}}}},R={class:"py-1"},k={class:"mx-auto sm:px-6 lg:px-8"},T={class:"overflow-hidden bg-white shadow-lg sm:rounded-lg"},C={class:"p-6 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0"},S={class:"flex items-center space-x-2 w-full md:w-auto"},A={ref:"printTable",class:"min-w-full border border-gray-200"},H={class:"bg-gray-100"},L={class:"border border-gray-200 px-4 py-2"},B={class:"border border-gray-200 px-4 py-2"},V={class:"border border-gray-200 px-4 py-2"},M={class:"border border-gray-200 px-4 py-2"},P={class:"border border-gray-200 px-4 py-2"};function j(o,t,s,p,a,l){const u=n("Head"),b=n("AuthenticatedLayout");return x(),f(b,null,{default:c(()=>[v(u,{title:"Reports / Reservation Summary"}),e("div",R,[e("div",k,[e("div",T,[e("div",C,[t[8]||(t[8]=e("h3",{class:"text-2xl font-bold"},"Reports - Reservation Summary",-1)),e("div",S,[t[6]||(t[6]=e("label",{for:"email",class:"mb-0 text-sm font-medium text-gray-900"},"From",-1)),i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>a.start_date=r),type:"date",name:"email",onChange:t[1]||(t[1]=(...r)=>o.filterTrips&&o.filterTrips(...r)),id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,544),[[m,a.start_date]]),t[7]||(t[7]=e("label",{for:"email",class:"block mb-0 text-sm font-medium text-gray-900"},"To",-1)),i(e("input",{"onUpdate:modelValue":t[2]||(t[2]=r=>a.end_date=r),type:"date",name:"email",onChange:t[3]||(t[3]=(...r)=>o.filterTrips&&o.filterTrips(...r)),id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,544),[[m,a.end_date]]),e("button",{onClick:t[4]||(t[4]=(...r)=>l.filterReservationSummary&&l.filterReservationSummary(...r)),class:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"},t[5]||(t[5]=[e("svg",{class:"w-6 h-6 text-white-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-width":"2",d:"M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"})],-1),e("span",null,"Filter",-1)]))])]),e("table",A,[e("tbody",H,[e("tr",null,[t[9]||(t[9]=e("td",{class:"border border-gray-200 px-4 py-2"},"Canceled Reservations",-1)),e("td",L,d(s.data.canceled_reservations),1)]),e("tr",null,[t[10]||(t[10]=e("td",{class:"border border-gray-200 px-4 py-2"},"Completed Reservations",-1)),e("td",B,d(s.data.completed_reservations),1)]),e("tr",null,[t[11]||(t[11]=e("td",{class:"border border-gray-200 px-4 py-2"},"Confirmed Reservations",-1)),e("td",V,d(s.data.confirmed_reservations),1)]),e("tr",null,[t[12]||(t[12]=e("td",{class:"border border-gray-200 px-4 py-2"},"Pending Reservations",-1)),e("td",M,d(s.data.pending_reservations),1)]),e("tr",null,[t[13]||(t[13]=e("td",{class:"border border-gray-200 px-4 py-2"},"Total Reservations",-1)),e("td",P,d(s.data.total_reservations),1)])])],512)])])])]),_:1})}const U=h(_,[["render",j]]);export{U as default};
