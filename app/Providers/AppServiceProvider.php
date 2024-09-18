<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Pennant\Feature;
use Illuminate\Support\Facades\DB;
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
        // // Define features based on .env file
        // $features = [
        //     'blog' => env('FEATURE_BLOG', false),
        //     'comments' => env('FEATURE_COMMENTS', false),
        //     'events' => env('FEATURE_EVENTS', false),
        // ];

        // foreach ($features as $featureName => $defaultValue) {
        //     Feature::define($featureName, function () use ($featureName, $defaultValue) {
        //         // Check if the feature is present in the database, otherwise use default value
        //         $feature = DB::table('features')->where('name', $featureName)->first();

        //         if ($feature) {
        //             return json_decode($feature->value, true);
        //         }

        //         // If feature is not found in the database, use the default value
        //         return $defaultValue;
        //     });
        // }
    }
}
