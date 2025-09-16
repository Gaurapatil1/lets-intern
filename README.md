

# 🎯 Internship Recommendation System (AI-Powered)

An AI-driven web application that recommends internship roles to students and aspiring product managers based on their skills, interests, and educational background.

> 🤖 Built with a modern full-stack architecture and machine learning for real-time internship matching.

---

## 🚀 Live Demo

🌐 [Live App (Coming Soon)](https://your-live-link.vercel.app)

---

## 🧠 AI-Powered Features

- ✅ Personalized internship recommendations using **sentence-transformers**
- 📄 Resume parsing and skill extraction (GPT-3.5 / SpaCy)
- 🔎 Semantic matching using **embeddings + pgvector**
- 💡 Future-ready architecture to plug in OpenAI or HuggingFace models

---

## 🖥 Tech Stack

### Frontend
- ⚛️ React.js (Vite)
- 🎨 TailwindCSS + ShadCN UI
- 🎞️ Framer Motion (for UI animations)
- 🔄 React Query for API communication

### Backend
- 🚀 FastAPI (Python)
- 🧠 AI logic using Sentence Transformers
- 🔐 Pydantic models for validation

### Database
- 🗃 Supabase (PostgreSQL with `pgvector`)
- 🧠 Store embeddings for AI matching

### DevOps / Hosting
- 🎯 Vercel for frontend deployment
- ☁️ Railway for backend hosting
- 🔐 .env for storing API keys

---

## 📦 Folder Structure

```bash
internship-recommendation-system/
├── frontend/             # React + Tailwind + ShadCN
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.tsx
├── backend/              # FastAPI backend
│   ├── app/
│   │   ├── main.py
│   │   ├── api.py
│   │   ├── recommender.py
│   │   ├── models.py
├── notebooks/            # AI/ML notebooks
│   └── train_model.ipynb
├── .env
└── README.md
````

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/internship-recommendation-system.git
cd internship-recommendation-system
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 3. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 4. Environment Variables

Create a `.env` file in both frontend and backend with:

```env
# Backend
OPENAI_API_KEY=your_openai_key
DATABASE_URL=your_supabase_url

# Frontend (if needed)
VITE_API_URL=http://localhost:8000
```

---

## 🔌 Sample API Endpoint

### POST `/recommend`

**Description:** Returns internship recommendations based on profile.

**Request:**

```json
{
  "name": "Alex",
  "skills": ["UI/UX", "Figma", "Wireframing"],
  "interests": ["product management", "design"],
  "education": "BBA"
}
```

**Response:**

```json
{
  "recommendations": [
    {
      "title": "Product Intern",
      "company": "Google"
    },
    {
      "title": "Associate PM",
      "company": "Microsoft"
    }
  ]
}
```

---

## 🔮 Future Features

* 📄 Resume upload + parsing
* 🧠 GPT-based profile improvement tips
* 💬 AI chat assistant for internship advice
* 🔔 Email alerts for matching internships
* 📊 Admin dashboard for analytics

---

## 🙋‍♂️ Contributing

We welcome contributions from students, developers, and AI enthusiasts.

```bash
# Fork it
# Create your feature branch (git checkout -b feature/new-feature)
# Commit your changes (git commit -am 'Add new feature')
# Push to the branch (git push origin feature/new-feature)
# Create a new Pull Request
```

---

## 📃 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Useful Links

* [Tailwind CSS Docs](https://tailwindcss.com/docs)
* [FastAPI Docs](https://fastapi.tiangolo.com/)
* [Supabase Docs](https://supabase.com/docs)
* [ShadCN UI](https://ui.shadcn.com/)
* [Hugging Face Transformers](https://huggingface.co/docs/transformers/index)
* [Framer Motion Docs](https://www.framer.com/motion/)

---

> ⚡ *"Build real. Learn fast. Ship smart."* – The future of AI projects starts here.

```

---

## ✅ What to Do Next

- Paste this into `README.md` in your GitHub repo
- Replace placeholders like `yourusername`, `your-live-link`, and API examples
- Ask me if you want a **clean `.md` file download**

Would you like me to:

- Give you the **backend FastAPI starter code**?
- Help with **frontend UI page** using Tailwind + ShadCN?
- Generate `.md` as a file you can download?

Just tell me your next move 🧠💻
```
