<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResources(['products' => ProductController::class]);

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::group([
//     'namespace' => 'App\Http\Controllers\Api',
//     'prefix' => 'products'
// ], function () {
//     Route::get('/', 'ProductController@index');
//     Route::get('/{product}', 'ProductController@show');
//     Route::post('/', 'ProductController@store');
//     Route::put('/{product}', 'ProductController@update');
//     Route::delete('/{product}', 'ProductController@destroy');
// });
