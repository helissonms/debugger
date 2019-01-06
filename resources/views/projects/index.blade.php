@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="card text-center">
                <div class="card-header">
                    <div class="float-left">
                        <h3 class="mb-0">Projects</h3>
                    </div>
                    <div class="float-right">
                        <a href="{{ route('projects.create') }}" class="btn btn-secondary">
                            New Project
                        </a>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Issues</th>
                                <th>Created at</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($projects as $project)
                                <tr>
                                    <td>
                                        <a href="{{ route('projects.show', ['project' => $project->id]) }}">
                                            {{ $project->name }}
                                        </a>
                                    </td>
                                    <td>
                                        <a href="#">{{ mt_rand(1, 500) }}</a>
                                    </td>
                                    <td class="text-muted">{{ $project->created_at }}</td>
                                </tr>
                            @empty
                            @endforelse
                        </tbody>
                    </table>
                </div>
                <div class="card-footer">
                    {{ $projects->links() }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
