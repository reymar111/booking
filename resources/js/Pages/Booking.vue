<template>
    <AuthenticatedLayout>
        <Head title="My Bookings" />

        <div class="py-1">
            <div class="mx-auto sm:px-6 lg:px-8">
                <div
                    class="overflow-hidden bg-white shadow-lg sm:rounded-lg"
                >
                <div class="p-6 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 ">
                    <h3 class="text-2xl font-bold ">My Bookings</h3>

                </div>

                <div class="px-6 pb-6 overflow-x-auto bg-white shadow-md rounded-lg mt-0">
                    <div v-if="is_created" id="alert-border-1" class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 " role="alert">
                        <svg class="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <div class="ms-3 text-sm font-medium">
                            Booking Created Successfully.
                        </div>
                        <button @click="is_created = false" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
                            <span class="sr-only">Dismiss</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>

                    <div v-if="is_updated" id="alert-border-1" class="flex items-center p-4 mb-4 text-yellow-800 border-t-4 border-yellow-300 bg-yellow-50 " role="alert">
                        <svg class="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <div class="ms-3 text-sm font-medium">
                            Booking Updated Successfully.
                        </div>
                        <button @click="is_updated = false" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-yellow-50 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
                            <span class="sr-only">Dismiss</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>

                    <div v-if="is_deleted" id="alert-border-1" class="flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 " role="alert">
                        <svg class="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <div class="ms-3 text-sm font-medium">
                            Booking Deleted Successfully.
                        </div>
                        <button @click="is_deleted = false" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
                            <span class="sr-only">Dismiss</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>

                    <div v-if="is_canceled" id="alert-border-1" class="flex items-center p-4 mb-4 text-teal-800 border-t-4 border-teal-300 bg-teal-50 " role="alert">
                        <svg class="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <div class="ms-3 text-sm font-medium">
                            Booking Canceled
                        </div>
                        <button @click="is_updated = false" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-teal-50 text-teal-500 rounded-lg focus:ring-2 focus:ring-teal-400 p-1.5 hover:bg-teal-200 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
                            <span class="sr-only">Dismiss</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>

                    <div v-if="is_confirmed" id="alert-border-1" class="flex items-center p-4 mb-4 text-indigo-800 border-t-4 border-indigo-300 bg-indigo-50 " role="alert">
                        <svg class="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <div class="ms-3 text-sm font-medium">
                            Booking Confirmed
                        </div>
                        <button @click="is_updated = false" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-indigo-50 text-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-400 p-1.5 hover:bg-indigo-200 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
                            <span class="sr-only">Dismiss</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>

                    <div class="mb-2 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 ">
                            <button @click="openForm" class="px-4 py-2 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2">
                                <svg class="w-6 h-6 text-white-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                                </svg>
                                    <span>Reserve my Booking</span>
                            </button>

                            <!-- header -->
                            <div class="flex items-center space-x-2 w-full md:w-auto">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    v-model="search"
                                    class="px-4 py-2 border rounded-lg w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                                    <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    <span>Search</span>
                                </button>
                            </div>

                            <!-- body -->
                        </div>


                    <table class="min-w-full border border-gray-200">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">#</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Trip</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Route</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Vehicle</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Seat #</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Driver</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Travel Date</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Status</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b" v-for="(item, index) in filteredBookings" :key="index">
                                <td class="px-4 py-2">{{ index + 1 }}</td>
                                <td class="px-4 py-2">{{ item.trip != null ? item.trip.trip_code : '' }}</td>
                                <td class="px-4 py-2">{{ item.trip != null ? item.trip.origin : '' }} -> {{ item.trip != null ? item.trip.destination : '' }}</td>
                                <td class="px-4 py-2">{{ item.trip != null && item.trip.vehicle != null ? item.trip.vehicle.plate_number : '' }}</td>
                                <td class="px-4 py-2">{{ item.seat_number }}</td>
                                <td class="px-4 py-2">{{ item.trip != null && item.trip.driver != null ? item.trip.driver.full_name : '' }}</td>
                                <td class="px-4 py-2">{{ item.trip != null ? item.trip.departure_date : '' }} | {{ item.trip != null ? item.trip.departure_time_v : '' }}</td>
                                <td class="px-4 py-2">{{ item.status }}</td>
                                <td class="px-4 py-2 flex space-x-2">
                                    <button @click="showQR(item)" v-if="item.status != 'canceled' || item.status === 'completed'" type="button" class="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2">
                                        <svg class="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z"/>
                                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z"/>
                                        </svg>
                                    </button>

                                </td>
                            </tr>
                            <!-- More rows here -->
                        </tbody>
                    </table>
                </div>

                </div>
            </div>


        </div>

        <!-- Main modal -->
        <div  v-if="form.active" id="default-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div class="relative p-4 w-full max-w-5xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow-sm ">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                        <h3 class="text-xl font-semibold text-gray-900 ">
                            {{ form.is_editing ? 'Edit' : 'Create' }} Booking
                        </h3>
                        <button @click="closeForm" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5 space-y-4">
                        <div class="flex flex-col md:flex-row gap-4">
                            <!-- Trip Select -->
                            <div class="w-full">
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your cycle</label>
                                <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white max-h-60 overflow-y-auto">
                                    <li v-for="(item, index) in trips"
                                        :key="index"
                                        @click="setTrip(item.id)"
                                        :class="{
                                            'bg-blue-500 text-white': form.trip_id === item.id,
                                            'hover:bg-gray-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500': form.trip_id !== item.id
                                        }"
                                        class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg cursor-pointer">
                                        <span>{{ item.trip_code }}</span> <br>
                                        <span>{{ item.origin }} - {{ item.destination }}</span><br>
                                        <span>{{ item.departure_date }} - {{ item.departure_time_v }}</span><br>
                                        <span>{{ item.driver != null ? item.driver.full_name : '' }} </span>
                                    </li>
                                </ul>
                            </div>

                            <!-- estination Select -->
                            <div class="w-full">
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Seat</label>
                                <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white max-h-60 overflow-y-auto">
                                    <li v-for="(item, index) in computeAvailableSeat"
                                        :key="index"
                                        @click="selectSeat(item)"
                                        :class="{
                                            'bg-blue-500 text-white': form.seat_number === item,
                                            'hover:bg-gray-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:text-blue-500': form.seat_number !== item
                                        }"
                                        class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg cursor-pointer">
                                        <span>{{ item }}</span>
                                    </li>
                                </ul>
                        </div>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                        <button @click="save" v-if="form.is_editing === false" data-modal-hide="default-modal" type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Save</button>
                        <button @click="update" v-if="form.is_editing" data-modal-hide="default-modal" type="button" class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Update</button>
                        <button @click="closeForm" data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main modal -->
        <div  v-if="qr_form.active" id="default-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow-sm ">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                        <h3 class="text-xl font-semibold text-gray-900 ">
                            {{qr_form.trip_code }}: QR Code
                        </h3>
                        <button @click="closeQR" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="default-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5 space-y-4 w-full flex items-center justify-center">
                        <div class="flex justify-center">
                            <vue-qrcode :value="'Trip Code: '+qr_form.trip_code+' Seat Number: '+qr_form.seat_number+' Passenger: '+qr_form.passenger" :options="{
                                width: 500,
                            }"></vue-qrcode>
                        </div>
                    </div>

                    <!-- Modal footer -->
                    <!-- <div class="flex w-full items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                        <button @click="closeQR" data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Close</button>
                    </div> -->
                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>

<script>
import { useForm, Link, Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';

export default {
    props: ['trips', 'bookings', 'drivers'],
    components: {
        AuthenticatedLayout,
        Link,
        Head,
        'vue-qrcode': VueQrcode

    },
    data() {
        return {
            form: useForm({
                id: '',
                trip_id: '',
                seat_number: '',
                active: false,
                is_editing: false,
            }),

            delete_form: useForm({
                id: '',
                name: '',
                active: false,
            }),

            loading_button: false,
            disabled_button: false,
            is_created: false,
            is_updated: false,
            is_deleted: false,
            is_confirmed: false,
            is_canceled: false,

            selected_trip: useForm({
                id: null,
                code: null,
                status: null,
                active: false,
            }),

            view_trip: useForm({
                burial_plot: {
                    plot_number: null,
                    size: null,
                    status: null,
                    burial_type_name: null,
                },
                client: {
                    full_name: null,
                    contact_number: null,
                    address: null,
                },
                deceased: {
                    birth_date: null,
                    burial_date: null,
                    cause_of_death: null,
                    death_date: null,
                    full_name: null,
                },
                code: null,
                mode_of_payment: null,
                status: null,
                active: false,
            }),

            search: '',

            routes: [
                {key: 'Tabuk', value: 'Tabuk'},
                {key: 'Tuguegarao', value: 'Tuguegarao'},
            ],

            mode_of_payments: [
                'Full', 'Installment'
            ],

            qr_form: {
                active: false,
                trip_code: null,
                seat_number: null,
                passenger: null,
            }



        }
    },
    mounted() {

    },
    computed: {
        filteredBookings() {
            if (!this.search) return this.bookings;

            return this.bookings.filter(res => {
                return Object.values(res).some(value =>
                    String(value).toLowerCase().includes(this.search.toLowerCase())
                );
            });
        },

        computeAvailableSeat() {
            return this.form.trip_id != '' ? this.trips.find(item => item.id === this.form.trip_id).available_seats : ''
        }
    },
    methods: {
        showQR(item) {
            this.qr_form.trip_code = item.trip != null ? item.trip.trip_code : ''
            this.qr_form.seat_number = item.seat_number
            this.qr_form.passenger = item.user != null ? item.user.name : ''
            this.qr_form.active = true
        },
        closeQR() {
            this.qr_form.trip_code = null
            this.qr_form.seat_number = null
            this.qr_form.passenger = null
            this.qr_form.active = false
        },
        setTrip(item) {
            this.form.trip_id = item
        },
        selectSeat(item) {
            this.form.seat_number = item
        },
        viewItem(item) {
            this.view_trip.burial_plot.plot_number = item.burial_plot != null ? item.burial_plot.plot_number : ''
            this.view_trip.burial_plot.size = item.burial_plot != null ? item.burial_plot.size : ''
            this.view_trip.burial_plot.size = item.burial_plot != null ? item.burial_plot.size : ''
            this.view_trip.burial_plot.status = item.burial_plot != null ? item.burial_plot.status : ''
            this.view_trip.burial_plot.burial_type_name = item.burial_plot != null && item.burial_plot.burial_type != null ? item.burial_plot.burial_type.name : ''
            this.view_trip.client.full_name = item.client != null ? item.client.full_name : ''
            this.view_trip.client.contact_number = item.client != null ? item.client.contact_number : ''
            this.view_trip.client.address = item.client != null ? item.client.address : ''
            this.view_trip.deceased.birth_date = item.deceased != null ? item.deceased.birth_date : ''
            this.view_trip.deceased.burial_date = item.deceased != null ? item.deceased.burial_date : ''
            this.view_trip.deceased.cause_of_death = item.deceased != null ? item.deceased.cause_of_death : ''
            this.view_trip.deceased.death_date = item.deceased != null ? item.deceased.death_date : ''
            this.view_trip.deceased.full_name = item.deceased != null ? item.deceased.full_name : ''
            this.view_trip.payments = item.payments
            this.view_trip.code = item.code
            this.view_trip.mode_of_payment = item.mode_of_payment
            this.view_trip.status = item.status
            this.view_trip.active = true
        },

        closeViewItem() {
            this.view_trip.burial_plot.plot_number = null
            this.view_trip.burial_plot.size = null
            this.view_trip.burial_plot.size = null
            this.view_trip.burial_plot.status = null
            this.view_trip.burial_plot.burial_type_name = null
            this.view_trip.client.full_name = null
            this.view_trip.client.contact_number = null
            this.view_trip.client.address = null
            this.view_trip.deceased.birth_date = null
            this.view_trip.deceased.burial_date = null
            this.view_trip.deceased.cause_of_death = null
            this.view_trip.deceased.death_date = null
            this.view_trip.deceased.full_name = null
            this.view_trip.payments = []
            this.view_trip.code = null
            this.view_trip.mode_of_payment = null
            this.view_trip.status = null
            this.view_trip.active = false
        },

        openStatusForm(item, status) {
            this.selected_trip.id = item.id
            this.selected_trip.code = item.code
            this.selected_trip.status = status
            this.selected_trip.active = true
        },
        CloseStatusForm() {
            this.selected_trip.id = null
            this.selected_trip.code = null
            this.selected_trip.status = null
            this.selected_trip.active = false
        },
        openForm() {
            this.form.active = true
            this.form.is_editing = false
        },

        closeForm() {
            this.form.id = ''
            this.form.trip_id = ''
            this.form.seat_number = ''
            this.form.active = false
            this.form.is_editing = false
        },

        editItem(item) {
            this.form.id = item.id
            this.form.trip_id = item.trip_id
            this.form.seat_number = item.seat_number
            this.form.active = true
            this.form.is_editing = true
        },

        OpenDeleteForm(item) {
            this.delete_form.id = item.id
            this.delete_form.name = item.code
            this.delete_form.active = true
        },

        CloseDeleteForm() {
            this.delete_form.id = ''
            this.delete_form.name = ''
            this.delete_form.active = false
        },

        save() {
            this.form.post('/booking/store', {
                onSuccess: () => {
                    this.closeForm()
                    this.is_created = true
                },
                onError: () => {

                }
            })
        },

        update() {
            this.form.patch('/booking/update/'+this.form.id, {
                onSuccess: () => {
                    this.closeForm()
                    this.is_updated = true
                },
                onError: () => {

                }
            })
        },

        updateStatus() {
            this.selected_trip.patch('/booking/update_status/'+this.selected_trip.id, {
                onSuccess: () => {
                    this.CloseStatusForm()
                    this.is_updated = true
                },
                onError: () => {

                }
            })
        },

        deleteItem() {
            this.form.delete('/booking/destroy/'+this.delete_form.id, {
                onSuccess: () => {
                    this.CloseDeleteForm()
                    this.is_deleted = true
                },
                onError: () => {

                }
            })
        }
    }
}
</script>
