<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Article;

class ScrapeBeyondChats extends Command
{
    protected $signature = 'scrape:beyondchats';
    protected $description = 'Scrape BeyondChats blog articles';

    public function handle()
    {
        $url = 'https://beyondchats.com/blogs/page/14/';

        $html = file_get_contents($url);

        if (!$html) {
            $this->error('Failed to fetch page');
            return;
        }

        libxml_use_internal_errors(true);

        $dom = new \DOMDocument();
        $dom->loadHTML($html);

        $xpath = new \DOMXPath($dom);

        // adjust selector if needed
        $articles = $xpath->query("//h2[@class='entry-title']/a");


        $count = 0;

        foreach ($articles as $article) {
            if ($count >= 5) break;

            $title = trim($article->textContent);
            $link = $article->getAttribute('href');

            $alreadyExists = Article::where('url', $link)->exists();

            if ($alreadyExists) {
                continue;
            }

            Article::create([
                'title' => $title,
                'url' => $link,
                'published_at' => now()
            ]);

            $count++;
        }

        $this->info('Articles scraped successfully');
    }

}
