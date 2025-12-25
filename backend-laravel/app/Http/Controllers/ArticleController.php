<?php

namespace App\Http\Controllers;

use App\Models\Article; 
use Illuminate\Http\Request;


class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Article::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $article = Article::create([
            'title' => $request->title,
            'content' => $request->content,
            'url' => $request->url ?? 'generated',
            'published_at' => now()
        ]);

    return response()->json($article, 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        
        return Article::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $article = Article::findOrFail($id);
        $article->update($request->all());
        return $article;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Article::destroy($id);
        return response()->json(['message' => 'Deleted']);
    }
   

    public function latest()
    {
        $articles = Article::orderBy('created_at', 'desc')->take(5)->get();
        return response()->json($articles);
    }

}
