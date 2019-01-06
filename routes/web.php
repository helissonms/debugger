<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes([
    'verify' => true,
]);

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::redirect('/home', '/', 301);
    Route::get('/', 'HomeController@index')->name('home');

    Route::get('/me', function () {
        return auth()->user();
    })->name('me');
});
