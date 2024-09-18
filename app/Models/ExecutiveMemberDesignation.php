<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExecutiveMemberDesignation extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;

    public function executive_member()
    {
        return $this->hasMany(ExecutiveMember::class);
    }
}
