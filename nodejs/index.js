import 'dotenv/config';
import axios from "axios";
import { googleSearch } from "./googleSearch.js";
import { scrapeArticle } from "./scraper.js";
import { enhanceArticle } from "./llm.js";
import { publishArticle } from "./publish.js";

const LARAVEL_API = "http://127.0.0.1:8000/api/articles/latest";

async function run() {
  // 1. Fetch latest article
  const { data } = await axios.get(LARAVEL_API);
  const article = data[0];

  console.log("Fetched article:", article.title);
  

  // 2. Google search
  const links = await googleSearch(article.title);

  // 3. Scrape top 2 articles
  const contents = [];
  for (let link of links) {
    const text = await scrapeArticle(link);
    contents.push({ link, text });
  }

  // 4. Enhance using LLM
  const enhancedContent = await enhanceArticle(
    article.title,
    contents
  );

  // 5. Publish new article
  await publishArticle(article.title, enhancedContent);

  console.log("Phase 2 completed successfully");
}

run();
