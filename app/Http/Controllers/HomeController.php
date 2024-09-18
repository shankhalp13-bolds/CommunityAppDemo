<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    //
    public function showLayoutWithGallery()
    {
        // Fetch all images from the Gallery model
        // $images = GalleryImage::all();

        // Pass $images to the layout view
        // $gallery = Gallery::orderBy('created_at', 'desc')->get();
        $gallery = Gallery::orderBy('created_at', 'desc')->limit(16)->get();

       // Fetch the feature flag for 'about-stba'
       $communityName = env('COMMUNITY_NAME');
       $community = DB::table('communities')->where('name', $communityName)->first();

       $isEventsEnabled = DB::table('features')
           ->where('community_id', $community->id)
           ->where('name', 'events')
           ->value('enabled');

       return Inertia::render('STBA/Home', [
           'gallery' => $gallery,
           'isEventsEnabled' => $isEventsEnabled == 1, // Pass as a boolean
       ]);
    }
}
