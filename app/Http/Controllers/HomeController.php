<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;

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

        return Inertia::render('STBA/Home', [
            "gallery" => $gallery,
        ]);
    }
}
