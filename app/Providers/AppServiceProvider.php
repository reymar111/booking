<?php

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        Inertia::share([
            'auth' => function () {
                $user = Auth::user();
                return [
                    'user' => $user ? $user->only('id', 'name', 'email') : null,
                    'notifications' => $user ? $user->unreadNotifications->map(function ($notification) {
                        return [
                            'id' => $notification->id,
                            'message' => $notification->data['message'],
                            'created_at' => $notification->created_at->diffForHumans(),
                        ];
                    }) : [],
                    'unread_notifications' => $user ? $user->unreadNotifications->count() : 0,
                ];
            },
        ]);
    }
}
