# Phase 1

## **Project Overview**
This project scrapes articles from the **BeyondChats blogs** section, stores them in a database, and exposes **CRUD APIs** to manage articles.  

**Key Points:**
- Scrapes the **5 oldest articles** from BeyondChats blogs.  
- Stores articles in a database.  
- Provides **RESTful APIs** for managing articles.  
- Supports updating, deleting, and preventing duplicate articles.  

---

## **Features**
- **Scraping:** Fetch the 5 oldest articles from BeyondChats blogs.  
- **Database Storage:** Articles are stored in a MySQL/PostgreSQL database.  
- **CRUD APIs:** Fully functional RESTful endpoints:  
  - **GET /api/articles** – List all articles  
  - **GET /api/articles/{id}** – View a single article  
  - **POST /api/articles** – Create a new article  
  - **PUT /api/articles/{id}** – Update an article  
  - **DELETE /api/articles/{id}** – Delete an article  
- **Duplicate Prevention:** Old records are deleted before scraping new ones.  

---

## **Setup Instructions**

### 1.Clone the Project
git clone <your-repo-url>
cd <project-folder>

### 2.Install Dependencies
composer install

### 3.Set Up Environment
- cp .env.example .env
- php artisan key:generate
- Update .env with your database credentials.

### 4.Run Migrations
- php artisan migrate

### 5.Scrape Articles
- Open Tinker:
php artisan tinker

- Clear old articles:
\App\Models\Article::truncate();
Run the scraper to fetch the 5 oldest articles.

### 6.Start the Server
- php artisan serve
- Default URL: http://127.0.0.1:8000
- API base URL: http://127.0.0.1:8000/api/articles

## **API Endpoints & Testing**
Method -> Endpoint -> Description -> Example -> cURL Command
- GET -> /api/articles -> List all articles -> curl http://127.0.0.1:8000/api/articles
- GET -> /api/articles/{id} -> View a single article -> curl http://127.0.0.1:8000/api/articles/1
- POST -> /api/articles -> Create a new article -> curl -X POST http://127.0.0.1:8000/api/articles
 -H "Content-Type: application/json" -d '{"title":"New Test Article","content":"This is the content","url":"https://beyondchats.com/blogs/new-test-article"}
'
- PUT -> /api/articles/{id} -> Update an article -> curl -X PUT http://127.0.0.1:8000/api/articles/1
 -H "Content-Type: application/json" -d '{"title":"Updated Title","content":"Updated content"}'
- DELETE ->	/api/articles/{id} -> Delete an article -> curl -X DELETE http://127.0.0.1:8000/api/articles/1

## **Notes**

- Keep php artisan serve running while testing APIs with cURL.
- If port 8000 is busy, Laravel will suggest another port; use that port in your commands.
- Truncating the table ensures no duplicate articles during scraping.

Phase 2: NodeJS script to fetch the latest article from these APIs, scrape top Google results, update the article using LLM, and publish back via APIs.

Phase 3: ReactJS frontend to display articles and updates in a responsive, professional UI.
