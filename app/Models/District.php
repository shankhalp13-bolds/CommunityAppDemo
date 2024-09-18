<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;

    public function constituency()
    {
        return $this->hasMany(Constituency::class);
    }

    public function event()
    {
        return $this->hasMany(Event::class);
    }
    public function user()
    {
        return $this->hasMany(User::class);
    }
}
