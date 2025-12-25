import React, { useEffect, useState } from "react";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/articles")
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Article Enhancer</h1>

      {articles.map((article) => (
        <div
          key={article.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "20px",
          }}
        >
          <h2>{article.title}</h2>

          <h4>Original Article</h4>
          <p>{article.original_content}</p>

          <h4>Updated Article</h4>
          <p>{article.updated_content}</p>

          <small>
            Updated at:{" "}
            {new Date(article.updated_at).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
};

export default Articles;
