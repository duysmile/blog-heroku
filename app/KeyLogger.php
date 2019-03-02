<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class KeyLogger extends Model
{
    protected $fillable = ['key', 'content'];
}
