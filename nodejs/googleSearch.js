import axios from "axios";
import * as cheerio from "cheerio";

export async function googleSearch(query) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

  const { data } = await axios.get(url, {
    headers: {
      "User-Agent": "Mozilla/5.0"
    }
  });

  const $ = cheerio.load(data);
  const links = [];

  $("a").each((i, el) => {
    const href = $(el).attr("href");
    if (href?.startsWith("/url?q=")) {
      const clean = href.split("/url?q=")[1].split("&")[0];
      if (!clean.includes("google")) {
        links.push(clean);
      }
    }
  });

  return links.slice(0, 2);
}
