<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Constituency extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;

    public function district()
    {
        return $this->belongsTo(District::class, 'district_id');
    }
    public function gpus()
    {
        return $this->hasMany(Gpu::class);
    }
}
