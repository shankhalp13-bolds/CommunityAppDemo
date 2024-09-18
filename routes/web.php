<?php

use App\Http\Controllers\CashfreePaymentController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Models\Blog;
use App\Models\Event;
use App\Models\ExecutiveMember;
use App\Models\Gompa;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'showLayoutWithGallery'])->name('home');

Route::get('/about-stba', function () {
    return Inertia::render('STBA/AboutUS');
});
Route::get('/events', function () {
    $event = Event::orderBy('created_at', 'desc')->get();

    return Inertia::render('STBA/Events', [
        "event" => $event
    ]);
});

Route::get('/executive-members', function () {
    $executiveMember = ExecutiveMember::orderBy('created_at', 'desc')->with('executive_member_designation')->get();

    return Inertia::render('STBA/CentralExecutives', [
        "executiveMember" => $executiveMember
    ]);
});
Route::get('/gonpas', function () {

    $gompa = Gompa::orderBy('created_at', 'desc')->get();

    return Inertia::render('STBA/Gonpas', [
        "gompa" => $gompa
    ]);
});
Route::get('/language-tamyig', function () {
    return Inertia::render('STBA/TamangScripts ');
});
Route::get('/blogs', function () {
    $blog = Blog::orderBy('created_at', 'desc')->get();

    return Inertia::render('STBA/Blogs', [
        "blog" => $blog
    ]);
});


Route::get('/gonpas/{slug}', function ($slug) {
    $gompa = Gompa::where('slug', $slug)->first();
    return Inertia::render('STBA/GonpasDetails', [
        "gompa" => $gompa
    ]);
});

Route::get('/blogs/{slug}', function ($slug) {
    $blog = Blog::where('slug', $slug)->first();
    return Inertia::render('STBA/BlogDetails', [
        "blog" => $blog
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('cashfree/payments/create', [CashfreePaymentController::class, 'create'])->name('callback');
Route::post('cashfree/payments/store', [CashfreePaymentController::class, 'store'])->name('store');
Route::any('cashfree/payments/success', [CashfreePaymentController::class, 'success'])->name('success');

require __DIR__ . '/auth.php';
