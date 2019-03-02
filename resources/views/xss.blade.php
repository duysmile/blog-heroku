@extends('layout.master')
@section('title', "Torf's Blog")

@section('main')
    <thead>
    <tr>
        <th>IP</th>
        <th>Content</th>
    </tr>
    </thead>
    <tbody>
    @foreach($keyLoggers as $keyLogger)
        <tr>
            <td>
                {{$keyLogger->ip}}
            </td>
            <td>
                {{$keyLogger->content}}
            </td>
        </tr>
    @endforeach
    </tbody>
    </table>
@endsection


