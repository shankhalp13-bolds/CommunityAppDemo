<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MemberRegistration extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function district()
    {
        return $this->belongsTo(District::class, 'district_id');
    }

    public function gpus()
    {
        return $this->belongsTo(gpu::class);
    }

    public function constituency()
    {
        return $this->belongsTo(Constituency::class);
    }
    // In AddRegistration.php

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
