<template>
    <div>
      <h2>Notifications</h2>
      <ul v-if="notifications.length">
        <li v-for="notification in notifications" :key="notification.id">
          {{ notification.message }} - <small>{{ notification.created_at }}</small>
          <button @click="markAsRead(notification.id)">Mark as Read</button>
        </li>
      </ul>
      <p v-else>No new notifications.</p>
    </div>
  </template>

  <script>
  import { router } from '@inertiajs/vue3';

  export default {
    props: {
      auth: Object, // Get global Inertia shared props
    },
    computed: {
      notifications() {
        return this.auth?.notifications || [];
      }
    },
    methods: {
      markAsRead(id) {
        router.post('/notifications/read', { id }, {
          preserveScroll: true,
          onSuccess: () => {
            // Remove the notification from the list after marking as read
            this.$inertia.reload({ only: ['auth'] });
          }
        });
      }
    }
  };
  </script>
