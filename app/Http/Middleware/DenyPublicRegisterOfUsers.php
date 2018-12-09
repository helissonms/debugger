<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;
use App\Entities\User;

class DenyPublicRegisterOfUsers
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
        abort_if(User::take(1)->orderBy('id')->exists(), Response::HTTP_NOT_FOUND);

        return $next($request);
    }
}
