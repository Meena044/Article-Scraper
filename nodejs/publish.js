import axios from "axios";

export async function publishArticle(title, content) {
  await axios.post("http://127.0.0.1:8000/api/articles", {
    title: `${title} (Enhanced)`,
    url: "https://generated.example.com",
    published_at: new Date().toISOString().split("T")[0]
  });

  console.log("Article published");
}
