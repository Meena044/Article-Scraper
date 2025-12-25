# 📘 Phase 3 – ReactJS

## 📌 Objective
To build a **simple ReactJS frontend** that fetches articles from the Laravel APIs
(created in Phase 2) and displays:

- Original scraped articles
- Updated / enhanced versions of the articles

The UI is kept **minimal, responsive, and professional**.

---

## 🛠️ Tech Stack
- Frontend: ReactJS
- Backend API: Laravel (Phase 2)
- HTTP Client: Axios
- Styling: Basic CSS / Inline styles

---

## 📂 Project Structure

reactjs/
- src/
-- Articles.js
-- App.js
-- App.css
-- index.js
-- package.json
-- README.md


---

## 🚀 Setup Instructions

### 1️⃣ Create React Application
npx create-react-app reactjs
cd reactjs
npm start


---

### 2️⃣ Install Axios

npm install axios
---

### 3️⃣ Start Laravel Backend
Make sure Laravel server from Phase 2 is running:
php artisan serve

### Api used

GET http://127.0.0.1:8000/api/articles


---

## 🧩 Implementation Details

### 🔹 Data Fetching
- React `useEffect` hook is used
- Axios fetches data from Laravel API
- Articles are stored in component state

---

### 🔹 Display Logic
Each article card displays:
- Article title
- Original content
- Updated content
- Last updated timestamp

---

