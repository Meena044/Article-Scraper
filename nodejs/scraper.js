import axios from "axios";
import * as cheerio from "cheerio";


export async function scrapeArticle(url) {
  const { data } = await axios.get(url, {
    headers: { "User-Agent": "Mozilla/5.0" }
  });

  const $ = cheerio.load(data);

  $("script, style, nav, footer").remove();

  return $("p")
    .map((i, el) => $(el).text())
    .get()
    .join("\n");
}
