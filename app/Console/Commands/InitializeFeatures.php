<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Config;
class InitializeFeatures extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'features:initialize';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Initialize features in the database based on the configuration.';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // Get the current community from the environment
        $communityName = env('COMMUNITY_NAME', 'default'); // Set a default community name

        // Fetch or create the community
        $community = DB::table('communities')->where('name', $communityName)->first();

        if (!$community) {
            // Optionally, you could create the community if it doesn't exist
            $communityId = DB::table('communities')->insertGetId([
                'name' => $communityName,
                'description' => 'Default description', // You might want to add a description
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        } else {
            $communityId = $community->id;
        }

        // Fetch features from the configuration
        $features = Config::get('features.features');

        foreach ($features as $name => $enabled) {
            // Check if the feature already exists
            $existingFeature = DB::table('features')
                ->where('name', $name)
                ->where('community_id', $communityId)
                ->first();

            if (!$existingFeature) {
                // Insert the feature if it does not exist
                DB::table('features')->insert([
                    'name' => $name,
                    'community_id' => $communityId,
                    'enabled' => $enabled,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }

        $this->info('Features have been initialized.');

        return 0;
    }
}
