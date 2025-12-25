import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function enhanceArticle(title, sources) {
  const referenceText = sources
    .map(s => s.text.substring(0, 1500))
    .join("\n\n");

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are an expert content editor."
      },
      {
        role: "user",
        content: `
Rewrite and enhance this article titled "${title}".
Match formatting and depth of top ranking articles.
Add references at the end.

SOURCE CONTENT:
${referenceText}
`
      }
    ]
  });

  let finalContent = response.choices[0].message.content;

  finalContent += "\n\nReferences:\n";
  sources.forEach(s => {
    finalContent += `- ${s.link}\n`;
  });

  return finalContent;
}
