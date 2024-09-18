<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExecutiveMember extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function executive_member_designation()
    {
        return $this->belongsTo(ExecutiveMemberDesignation::class, 'executive_member_designation_id');
    }
}
