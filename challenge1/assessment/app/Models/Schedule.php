<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    public function location()
    {
        return $this->belongsTo(Location::class);
    }
    public function shift()
    {
        return $this->belongsTo(Shift::class);
    }
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
