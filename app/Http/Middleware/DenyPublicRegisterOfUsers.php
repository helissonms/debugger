<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;

class DenyPublicRegisterOfUsers extends RedirectIfDoesntHaveRegisteredAdmin
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
        abort_if(
            ! $this->doesntHaveAnAdminRegistered(),
            Response::HTTP_NOT_FOUND
        );

        return $next($request);
    }
}
