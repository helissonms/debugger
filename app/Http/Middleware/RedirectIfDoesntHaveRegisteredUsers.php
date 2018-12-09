<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Cache;
use App\Entities\User;

class RedirectIfDoesntHaveRegisteredUsers
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->path() === 'register') {
            return $next($request);
        }

        if ($this->doesntHaveAnyUserRegistered()) {
            return redirect()->route('register');
        }

        return $next($request);
    }

    private function doesntHaveAnyUserRegistered()
    {
        return Cache::rememberForever('doesntHaveAnyUserRegistered', function () {
            return ! User::take(1)->orderBy('id')->exists();
        });
    }
}
