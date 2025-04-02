
<template>
    <AuthenticatedLayout>
        <Head title="Reports / Reservation Summary" />

        <div class="py-1">
            <div class="mx-auto sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-lg sm:rounded-lg">
                    <div class="p-6 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 ">
                        <h3 class="text-2xl font-bold ">Reports - Reservation Summary</h3>

                            <!-- header -->
                            <div class="flex items-center space-x-2 w-full md:w-auto">
                                <label for="email" class=" mb-0 text-sm font-medium text-gray-900 ">From</label>
                                <input v-model="start_date" type="date" name="email" @change="filterTrips" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />

                                <label for="email" class="block mb-0 text-sm font-medium text-gray-900 ">To</label>
                                <input v-model="end_date" type="date" name="email" @change="filterTrips" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />

                                <button @click="filterReservationSummary" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                                    <svg class="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"/>
                                    </svg>

                                    <span>Filter</span>
                                </button>

                            </div>
                    </div>

                    <table class="min-w-full border border-gray-200">
                        <tbody class="bg-gray-100">
                            <tr>
                                <td class="border border-gray-200 px-4 py-2">Canceled Reservations</td>
                                <td class="border border-gray-200 px-4 py-2">{{data.canceled_reservations}}</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-200 px-4 py-2">Completed Reservations</td>
                                <td class="border border-gray-200 px-4 py-2">{{data.completed_reservations}}</td>
                            </tr>
                            <!-- <tr>
                                <td class="border border-gray-200 px-4 py-2">Completed Reservations</td>
                                <td class="border border-gray-200 px-4 py-2">{{data.completed_reservations}}</td>
                            </tr> -->
                            <tr>
                                <td class="border border-gray-200 px-4 py-2">Confirmed Reservations</td>
                                <td class="border border-gray-200 px-4 py-2">{{data.confirmed_reservations}}</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-200 px-4 py-2">Pending Reservations</td>
                                <td class="border border-gray-200 px-4 py-2">{{data.pending_reservations}}</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-200 px-4 py-2">Total Reservations</td>
                                <td class="border border-gray-200 px-4 py-2">{{data.total_reservations}}</td>
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
        filterReservationSummary() {
            this.$inertia.post('/reports/reservation_summary', {
                start_date: this.start_date,
                end_date: this.end_date
            });
        }
    }
}
</script>
