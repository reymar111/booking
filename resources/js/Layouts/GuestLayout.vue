<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
<div class="flex min-h-screen items-center justify-center bg-gray-100 p-6">
    <!-- Container with Two Equal Columns -->
    <div class="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
        <!-- Left Column: Title and Description -->
        <div class="flex flex-col items-center justify-center text-center p-6">
            <!-- <ApplicationLogo/> -->
            <div class="text-3xl font-extrabold text-gray-800 sm:text-4xl">
                Online Booking System
            </div>
            <div class="mt-2 text-lg font-semibold text-gray-600">
                Northlandia Transport Service Multipurpose Cooperative (NORTRANS MPC)
            </div>
        </div>

        <!-- Right Column: Login Form -->
        <div class="overflow-hidden bg-white px-6 py-8 shadow-md sm:rounded-lg">
            <slot />
        </div>
    </div>
</div>

</template>
