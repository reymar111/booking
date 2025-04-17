
<template>
    <AuthenticatedLayout>
        <Head title="Reports / Vehicle Utilization" />

        <div class="py-1">
            <div class="mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                    <div class="p-6 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 ">
                        <h3 class="text-2xl font-bold ">Reports - Vehicle Utilization</h3>

                            <!-- header -->
                            <div class="flex items-center space-x-2 w-full md:w-auto">
                                <label for="email" class=" mb-0 text-sm font-medium text-gray-900 ">From</label>
                                <input v-model="start_date" type="date" name="email" @change="filterTrips" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />

                                <label for="email" class="block mb-0 text-sm font-medium text-gray-900 ">To</label>
                                <input v-model="end_date" type="date" name="email" @change="filterTrips" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />

                                <button @click="filterData" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                                    <svg class="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
                                    </svg>

                                    <span>Filter</span>
                                </button>

                                <!-- <button @click="printReport" class="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 flex items-center space-x-2">
                                    <svg class="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M16.444 18H19a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2.556M17 11V5a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6h10ZM7 15h10v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"/>
                                    </svg>
                                </button> -->

                            </div>
                    </div>


                    <table ref="printTable" class="min-w-full border border-gray-200">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">#</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Plate Number</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Model</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Capacity</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Status</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Total Trips</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b" v-for="(item, index) in data" :key="index">
                                <td class="px-4 py-2">{{ index + 1 }}</td>
                                <td class="px-4 py-2">{{ item.plate_number }}</td>
                                <td class="px-4 py-2">{{ item.model }}</td>
                                <td class="px-4 py-2">{{ item.capacity }}</td>
                                <td class="px-4 py-2">{{ item.status }}</td>
                                <td class="px-4 py-2">{{ item.total_trips }}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
import { useForm, Link, Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

export default {
    props: ['data'],
    components: {
        AuthenticatedLayout,
        Link,
        Head

    },
    data() {
        return {
            start_date: null,
            end_date: null,
        }
    },
    mounted() {

    },
    computed: {

    },
    methods: {
        filterData() {
            this.$inertia.post('/reports/vehicle_utilization', {
                start_date: this.start_date,
                end_date: this.end_date
            });
        },

        printReport() {
            const table = this.$refs.printTable;
            const printWindow = window.open('', '', 'width=1000,height=800');

            const style = `
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
            `;

            const title = `<h1>Passenger Summary Report</h1>`;
            const html = `${style}${title}${table.outerHTML}`;

            printWindow.document.write(html);
            printWindow.document.close();

            // Wait for the content to be fully loaded before printing
            printWindow.onload = function () {
                printWindow.focus();
                printWindow.print();
                // printWindow.close();
            };
        }
    }
}
</script>
