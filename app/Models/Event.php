<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Event extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function district()
    {
        return $this->belongsTo(District::class, 'district_id');
    }

    protected static function boot()
    {
        parent::boot();

        // Example: Automatically hash the password before saving the user
        static::creating(function ($model) {
            // $model->password = bcrypt($model->password);
            $model->slug = Str::slug($model->title);
        });

        // Example: Log when a user is updated
        static::saving(function ($model) {
            // \Log::info('User ' . $model->id . ' updated');
            $model->slug = Str::slug($model->title);
        });
    }
}
