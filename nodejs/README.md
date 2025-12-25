# Phase 2 

## Objective
Create a NodeJS-based automation script that:
- Fetches the latest article from a Laravel API
- Searches the article title on Google
- Fetches the top 2 ranking blog/article links from other websites
- Scrapes the main content from those articles
- Uses an LLM to enhance the original article
- Publishes the enhanced article back to Laravel
- Cites reference articles at the bottom

---

## Architecture Overview

Laravel API (Backend)  
⬆ Fetch Latest Article  
⬇ Publish Enhanced Article  

NodeJS Script  
→ Google Search  
→ Article Scraping  
→ LLM Content Enhancement  

---

## Tech Stack

- Backend: Laravel (REST API)
- Script: NodeJS (ES Modules)
- HTTP Client: Axios
- Scraping: Cheerio
- LLM: OpenAI API
- Database: SQLite
- Environment Config: dotenv

---

## Project Structure

Scrape-article/
- nodejs/
-- index.js
-- googleSearch.js
-- scrapeArticle.js
-- llm.js
-- publishArticle.js
-- package.json
-- .env

## Workflow

1. Fetch latest article from Laravel API  
2. Search article title on Google  
3. Select top 2 external blog/article links  
4. Scrape main content from those articles  
5. Enhance original article using LLM  
6. Append references section  
7. Publish enhanced article using Laravel CRUD API


---

## Setup Instructions

### Backend (Laravel)

```bash
cd backend-laravel
php artisan migrate
php artisan serve ```

### Run the script

node index.js

