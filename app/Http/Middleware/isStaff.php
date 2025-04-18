<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class isStaff
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if user is authenticated and has an "admin" role
        if (Auth::check() && Auth::user()->role === 'staff') {
            return $next($request);
        }

        // Redirect if not an admin
        return redirect('/')->with('error', 'Unauthorized access.');
    }
}
