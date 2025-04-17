<script>
import { Head, Link } from '@inertiajs/vue3';

export default {
    components: {
        Head,
        Link
    },
    data () {
        return {
            isOpen: false,
        }
    },
    mounted() {

    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },

        readNotification(item) {
            this.$inertia.post('/notifications/read', { id: item.id }, {
                preserveScroll: true,
                onSuccess: () => {
                    // Remove the notification from the list after marking as read
                    this.$inertia.reload({ only: ['auth'] });
                }
            });
        }
    }
}

</script>

<template>
    <div class="antialiased bg-gray-300 dark:bg-gray-900">
        <nav class="bg-white border-b border-gray-200 px-4 h-[80px] flex items-center dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
            <div class="flex justify-between items-center w-full">
                <div class="flex items-center">
                <button
                    data-drawer-target="drawer-navigation"
                    data-drawer-toggle="drawer-navigation"
                    aria-controls="drawer-navigation"
                    class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    <svg

                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                    ></path>
                    </svg>
                    <svg

                    class="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                    ></path>
                    </svg>
                    <span class="sr-only">Toggle sidebar</span>
                </button>
                <a href="https://flowbite.com" class="flex items-center">
                    <span class="text-2xl font-semibold whitespace-nowrap dark:text-white">Northlandia Online Booking System</span>
                </a>
                </div>
            </div>

            <div class="flex items-center lg:order-2 relative">
                <!-- Notifications -->
                <button
                    type="button"
                    @click="toggleDropdown"
                    class="relative p-2 mr-1 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                    <span class="sr-only">View notifications</span>
                    <!-- Bell icon -->
                    <svg
                        class="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                        ></path>
                    </svg>
                    <!-- Notification badge -->
                    <div v-if="$page.props.auth.user.unread_notifications_count > 0" class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full dark:border-gray-900">
                        {{ $page.props.auth.user.unread_notifications_count > 0 ? $page.props.auth.user.unread_notifications_count : '' }}
                    </div>
                </button>




                <!-- Dropdown menu -->
                <div
                    v-if="isOpen"
                    ref="dropdownRef"
                    class="absolute right-14 top-12 mt-4 w-80 bg-white z-80 shadow-lg rounded-lg divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600"
                >
                <div class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                    Notifications
                </div>
                <div>
                    <a href="#" v-for="(item, index) in  $page.props.auth.user.notifications"
                        :key="index"
                        class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">

                            <div class="pl-3 w-full flex justify-between items-center">
                                <!-- Notification Message -->
                                <div class="text-gray-500 font-normal text-sm dark:text-gray-400">
                                    {{ item.data.message }}
                                </div>

                                <!-- Read Button -->
                                <button v-if="item.read_at === null"
                                    @click="readNotification(item)"
                                    type="button"
                                    class="px-1 py-1 text-white bg-green-700 hover:bg-green-800
                                        focus:ring-2 focus:outline-none focus:ring-green-300
                                        font-medium rounded-full text-sm p-2 text-center
                                        inline-flex items-center dark:bg-green-600
                                        dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg class="w-6 h-6 text-white" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"
                                            d="M5 11.917 9.724 16.5 19 7.5"/>
                                    </svg>
                                </button>
                            </div>

                        </a>

                </div>
                </div>

                <Link
                :href="route('logout')"
                method="post"
                class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                </svg>
                </Link>
            </div>

        </nav>

    <!-- Sidebar -->

    <aside
      class="fixed top-2 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
        <ul
          class="pt-5 mt-0 space-y-2 "
        >
            <span class="ml-2">Transactions</span>
          <!-- <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg

                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="ml-3">Dashboard</span>
            </a>
          </li> -->

          <li v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'">
            <Link
              :href="route('reservation.index')"
              class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg

                class="flex-shrink-0 w-6 h-6 text-red-500 transition duration-75 group-hover:text-red-900 dark:text-red-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Reservations</span
              >
            </Link>
          </li>

          <li v-if="$page.props.auth.user.role == 'passenger'">
            <Link
              :href="route('booking.index')"
              class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
            <svg class="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6H6m12 4H6m12 4H6m12 4H6"/>
            </svg>

              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >My Bookings</span
              >
            </Link>
          </li>

          <li v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'">
            <Link
              :href="route('trip.index')"
              class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
            <svg class="w-6 h-6 text-orange-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"/>
            </svg>

              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Trips</span
              >
            </Link>
          </li>
        </ul>

        <ul
          class="pt-5 mt-5 space-y-2 " :class="{ 'border-t border-gray-200 dark:border-gray-700': $page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff' }"
        >
            <span class="ml-2" v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'">Reports</span>
            <li v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'">
                <Link
                :href="route('report.passenger_summary')"
                    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                </svg>

                    <span class="ml-3">Passenger Summary</span>
                </Link>
            </li>
            <li v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'">
                <Link
                :href="route('report.reservation_summary')"
                    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                <svg class="w-6 h-6 text-yellow-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
                </svg>

                    <span class="ml-3">Reservation Summary</span>
                </Link>
            </li>
            <li v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'">
                <Link
                    :href="route('report.vehicle_utilization')"
                    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                <svg class="w-6 h-6 text-violet-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                </svg>


                    <span class="ml-3">Vehicle Utilization</span>
                </Link>
            </li>
            <li>
                <Link
                    :href="route('report.trip_performance')"
                    v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'"
                    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                <svg class="w-6 h-6 text-pink-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
                </svg>


                    <span class="ml-3">Trip Performance</span>
                </Link>
            </li>
            <li v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'">
                <Link
                    :href="route('report.driver_activity')"
                    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                <svg class="w-6 h-6 text-green-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                </svg>


                    <span class="ml-3">Driver Activity</span>
                </Link>
            </li>
            <li v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'">
                <Link
                    :href="route('report.booking_load')"
                    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                <svg class="w-6 h-6 text-purple-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M5 12h14M5 12a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-2 3h.01M14 15h.01M17 9h.01M14 9h.01"/>
                </svg>
                    <span class="ml-3">Booking Load</span>
                </Link>
            </li>


        </ul>


        <ul
          class="pt-5 mt-5 space-y-2 " :class="{ 'border-t border-gray-200 dark:border-gray-700': $page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff' }"
        >
        <span class="ml-2" v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'">Settings</span>
                <li v-if="$page.props.auth.user.role == 'admin'">
                    <Link
                        :href="route('user.index')"
                        class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                    >
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                    </svg>
                        <span class="ml-3">Users </span>
                    </Link>
                </li>
            <li v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'">
                <Link
                    :href="route('vehicle.index')"
                    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                <svg class="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                </svg>


                    <span class="ml-3">Vehicles</span>
                </Link>
            </li>
            <li v-if="$page.props.auth.user.role == 'admin' || $page.props.auth.user.role == 'staff'">
                <Link
                    :href="route('driver.index')"
                    class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                >
                <svg class="w-6 h-6 text-green-800 dark:text-white"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>

                    <span class="ml-3">Drivers</span>
                </Link>
            </li>
        </ul>

        <ul
          class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
        <span class="ml-2">Profile</span>
        <li>
            <Link
                :href="route('profile.edit')"
                class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
            <svg class="w-6 h-6 text-blue-800 dark:text-white"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            </svg>


                <span class="ml-3">My Account</span>
            </Link>
        </li>
        <li>
            <Link
                :href="route('logout')" method="post"
                class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
            <svg class="w-6 h-6 text-red-800 dark:text-white"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
            </svg>
                <span class="ml-3">Logout</span>
            </Link>
        </li>
        </ul>
      </div>

      <!-- <div
        class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20"
      >
        <a
          href="#"
          class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
        >
            <b>{{ $page.props.auth.user.name }}</b>
        </a>
    </div> -->
    </aside>

    <main class="p-4 md:ml-64 min-h-screen mt-20 pt-10 flex flex-col">
        <div class="bg-gray rounded-lg flex-1">
            <slot />
        </div>

    </main>
  </div>
</template>
