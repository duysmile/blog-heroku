<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class XssController extends Controller
{
    function index(Request $request) {
        return dd($request);
    }
}
