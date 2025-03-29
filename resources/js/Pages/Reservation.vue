<template>
    <AuthenticatedLayout>
        <Head title="Reservations" />

        <div class="py-1">
            <div class="mx-auto sm:px-6 lg:px-8">
                <div
                    class="overflow-hidden bg-white shadow-lg sm:rounded-lg"
                >
                <div class="p-6 mb-5 text-gray-900 flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 border-b border-gray-300 shadow">
                    <h3 class="text-2xl font-bold">Reservations</h3>
                </div>


                <div class="px-6 pb-6 overflow-x-auto bg-white shadow-md rounded-lg mt-0">
                    <div v-if="is_canceled" id="alert-border-1" class="flex items-center p-4 mb-4 text-teal-800 border-t-4 border-teal-300 bg-teal-50 " role="alert">
                        <svg class="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <div class="ms-3 text-sm font-medium">
                            Reservation Canceled
                        </div>
                        <button @click="is_canceled = false" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-teal-50 text-teal-500 rounded-lg focus:ring-2 focus:ring-teal-400 p-1.5 hover:bg-teal-200 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
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
                            Reservation Confirmed
                        </div>
                        <button @click="is_confirmed = false" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-indigo-50 text-indigo-500 rounded-lg focus:ring-2 focus:ring-indigo-400 p-1.5 hover:bg-indigo-200 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
                            <span class="sr-only">Dismiss</span>
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                        </button>
                    </div>

                    <div v-if="is_created" id="alert-border-1" class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 " role="alert">
                        <svg class="shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <div class="ms-3 text-sm font-medium">
                            Reservation Created Successfully.
                        </div>
                        <button @click="is_created = false" type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#alert-border-1" aria-label="Close">
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
                                    <span>New Reservation</span>
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
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Passennger</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Route</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Vehicle</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Seat Number  </th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Travel Date</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Status</th>
                                <th class="px-4 py-2 text-left text-gray-700 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b" v-for="(item, index) in filteredBookings" :key="index">
                                <td class="px-4 py-2">{{ index + 1 }}</td>
                                <td class="px-4 py-2">{{ item.trip != null ? item.trip.trip_code : '' }}</td>
                                <td class="px-4 py-2">{{ item.user != null ? item.user.name : '' }}</td>
                                <td class="px-4 py-2">{{ item.trip != null ? item.trip.origin : '' }} -> {{ item.trip != null ? item.trip.destination : '' }}</td>
                                <td class="px-4 py-2">{{ item.trip != null && item.trip.vehicle != null ? item.trip.vehicle.plate_number : '' }}</td>
                                <td class="px-4 py-2">{{ item.seat_number }}</td>
                                <td class="px-4 py-2">{{ item.trip != null ? item.trip.departure_date_v : '' }} | {{ item.trip != null ? item.trip.departure_time_v : '' }}</td>
                                <td class="px-4 py-2">{{ item.status }}</td>
                                <td class="px-4 py-2 flex space-x-2">
                                    <button type="button" @click="accept(item.id)" v-if="item.status == 'pending'" class="px-1 py-1 text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        <svg class="w-5 h-5 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/>
                                        </svg>
                                    </button>
                                    <button type="button" @click="cancelItem(item.id)" v-if="item.status == 'pending'"  class="px-1 py-1 text-white bg-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                        <svg class="w-5 h-5 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
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

        <!-- MAIN FORM -->
        <div  v-if="form.active" id="default-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div class="relative p-4 w-full max-w-5xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow-sm ">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                        <h3 class="text-xl font-semibold text-gray-900 ">
                            {{ form.is_editing ? 'Edit' : 'Create' }} Reservation
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

                        <div>
                            <label for="user" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passenger: </label>
                            <select v-model="form.user_id" id="user" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="(item, index) in passengers" :key="index" :value="item.id">{{item.name }}</option>
                            </select>
                        </div>

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
                        <button @click="save" data-modal-hide="default-modal" type="button" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create</button>
                        <button @click="closeForm" data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>

<script>
import { useForm, Link, Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

export default {
    props: ['bookings', 'trips', 'passengers'],
    components: {
        AuthenticatedLayout,
        Link,
        Head

    },
    data() {
        return {
            form: useForm({
                id: '',
                trip_id: '',
                seat_number: '',
                user_id: '',
                active: false,
                is_editing: false,
            }),

            delete_form: useForm({
                id: '',
                active: false,
            }),

            loading_button: false,
            disabled_button: false,
            is_confirmed: false,
            is_canceled: false,
            is_created: false,

            search: '',

            routes: [
                {key: 'Tabuk', value: 'Tabuk'},
                {key: 'Tuguegarao', value: 'Tuguegarao'},
            ],

            mode_of_payments: [
                'Full', 'Installment'
            ],
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
        openForm() {
            this.form.active = true
            this.form.is_editing = false
        },

        setTrip(item) {
            this.form.trip_id = item
        },

        selectSeat(item) {
            this.form.seat_number = item
        },

        closeForm() {
            this.form.id = ''
            this.form.trip_id = ''
            this.form.seat_number = ''
            this.form.user_id = ''
            this.form.active = false
            this.form.is_editing = false
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

        accept(item) {
            this.form.patch('/update_booking/accept/'+item, {
                onSuccess: () => {
                    this.is_confirmed = true
                },
                onError: () => {

                }
            })
        },

        cancelItem(item) {
            this.form.patch('/update_booking/cancel/'+item, {
                onSuccess: () => {
                    this.is_canceled = true
                },
                onError: () => {

                }
            })
        },

        save() {
            this.form.post('/reservation/store', {
                onSuccess: () => {
                    this.closeForm()
                    this.is_created = true
                },
                onError: () => {

                }
            })
        },

    }
}
</script>
