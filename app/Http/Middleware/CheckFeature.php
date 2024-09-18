<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class CheckFeature
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $feature): Response
    {
        // dd($request);
        // Fetch the community name from the .env file
        $communityName = env('COMMUNITY_NAME');

        // Retrieve the community ID based on the community name
        $community = DB::table('communities')
            ->where('name', $communityName)
            ->first();

        if (!$community) {
            abort(404, 'Community not found.');
        }

        $communityId = $community->id;

        // Query the database for the feature status
        $isFeatureEnabled = DB::table('features')
            ->where('community_id', $communityId)
            ->where('name', $feature)
            ->value('enabled');

        // Check if the feature is enabled
        if ($isFeatureEnabled !== 1) {
            abort(404, 'This feature is not available.');
        }

        return $next($request);
    }
}
