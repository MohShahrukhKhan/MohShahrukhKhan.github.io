# Portfolio — Moh Shahrukh Khan

A full-stack portfolio website with a **React + Vite** frontend and a **FastAPI + MongoDB** backend.

![Preview](https://images.pexels.com/photos/17485657/pexels-photo-17485657.png)

---

## Tech Stack

| Layer     | Technology                                                     |
| --------- | -------------------------------------------------------------- |
| Frontend  | React 18, Vite, Tailwind CSS, Framer Motion, Recharts          |
| Backend   | Python 3.9+, FastAPI, Motor (async MongoDB driver)             |
| Database  | MongoDB 8.0 (local) or MongoDB Atlas (cloud)                   |
| Email     | SendGrid (optional — for contact form notifications)           |
| Deploy    | GitHub Actions → GitHub Pages (frontend)                       |

---

## Project Structure

```
app/
├── frontend/                  # React + Vite SPA
│   ├── public/
│   │   └── resume.pdf         # Your resume (replace with yours)
│   ├── src/
│   │   ├── components/
│   │   │   ├── portfolio/     # All section components
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Experience.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── Performance.jsx
│   │   │   │   ├── AIWorkflow.jsx
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── SystemDesign.jsx
│   │   │   │   ├── GitHubActivity.jsx
│   │   │   │   ├── Testimonials.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── ParticleBackground.jsx
│   │   │   │   └── SectionHeading.jsx
│   │   │   └── ui/            # Reusable UI primitives
│   │   │       ├── input.jsx
│   │   │       └── textarea.jsx
│   │   ├── lib/
│   │   │   └── portfolioData.js  # All your profile data goes here
│   │   ├── App.jsx            # Root component + routing
│   │   ├── App.css
│   │   ├── index.css          # Tailwind + custom styles
│   │   └── main.jsx           # React entry point
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── backend/                   # FastAPI server
│   ├── server.py              # API routes + MongoDB connection
│   ├── requirements.txt       # Python dependencies
│   └── .env                   # Environment variables (not committed)
│
├── .github/workflows/
│   └── deploy.yml             # GitHub Actions — auto-deploy frontend
│
└── README.md
```

---

## Setup & Run Locally

### Prerequisites

- **Node.js** 18+ & npm
- **Python** 3.9+
- **MongoDB** 8.0+ ([Install via Homebrew](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/))

### 1. Clone & Install

```bash
git clone https://github.com/MohShahrukhKhan/MohShahrukhKhan.github.io.git
cd MohShahrukhKhan.github.io

# Frontend
cd frontend
npm install

# Backend
cd ../backend
pip3 install -r requirements.txt
```

### 2. Environment Variables

**backend/.env**
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
CORS_ORIGINS=http://localhost:5173
SENDGRID_API_KEY=           # Optional — for email notifications
NOTIFICATION_EMAIL=your@email.com
```

**frontend/.env**
```env
VITE_BACKEND_URL=http://localhost:8001
```

### 3. Start MongoDB

```bash
# Start MongoDB (Homebrew)
brew services start mongodb/brew/mongodb-community@8.0

# Or manually
mongod --dbpath /path/to/data --fork --logpath /path/to/mongo.log
```

### 4. Run Backend

```bash
cd backend
python3 -m uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

API available at `http://localhost:8001/api/`

### 5. Run Frontend

```bash
cd frontend
npm run dev
```

Open `http://localhost:5173` in your browser.

### 6. Stop Services

```bash
# Stop frontend
kill $(lsof -ti :5173)

# Stop backend
kill $(lsof -ti :8001)

# Stop MongoDB (Homebrew)
brew services stop mongodb/brew/mongodb-community@8.0

# Or if started manually
kill $(pgrep mongod)
```

Or stop all at once:
```bash
kill $(lsof -ti :5173) 2>/dev/null
kill $(lsof -ti :8001) 2>/dev/null
kill $(pgrep mongod) 2>/dev/null
```

---

## Customize Your Portfolio

Edit **`frontend/src/lib/portfolioData.js`** to replace all content with your own:

| Field         | Description                                    |
| ------------- | ---------------------------------------------- |
| `profile`     | Name, role, tagline, email, social links       |
| `experience`  | Work history — company, role, bullet points    |
| `projects`    | Featured projects — title, tech, challenges    |
| `skills`      | Skills by category (Backend, Database, etc.)   |
| `testimonials`| Placeholder quotes — replace with real ones    |
| ...           | And more — explore the file                    |

---

## API Endpoints

| Method | Endpoint          | Description                        |
| ------ | ----------------- | ---------------------------------- |
| GET    | `/api/`           | Health check                       |
| POST   | `/api/contact`    | Submit contact form                |
| GET    | `/api/contact`    | List all contact messages          |
| POST   | `/api/status`     | Create status check                |
| GET    | `/api/status`     | List status checks                 |

---

## Deploy Frontend to GitHub Pages

The repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that auto-deploys the frontend whenever you push to `main`.

**One-time setup:**
1. Go to your repo **Settings → Pages**
2. **Source → "Deploy from a branch"**
3. **Branch → `gh-pages` → `/ (root)`**
4. **Save**

After that, every push builds the frontend and deploys it to `https://<your-username>.github.io`.

---

## Deploy Backend (Optional)

The backend can be deployed to free platforms like:

| Platform      | Notes                                      |
| ------------- | ------------------------------------------ |
| [Render](https://render.com) | Web Service — free tier, auto-deploy from Git |
| [Railway](https://railway.app)  | Free tier with MongoDB add-on            |
| [Fly.io](https://fly.io)   | Free allowance, Docker support           |

For the database, use **MongoDB Atlas** (free 512 MB).

---

## Email Notifications (SendGrid)

To receive email when someone submits the contact form:

1. Create a free account at [sendgrid.com](https://sendgrid.com)
2. Go to **Settings → API Keys** → Create API Key
3. Add the key to `backend/.env`:
   ```env
   SENDGRID_API_KEY=your_api_key_here
   NOTIFICATION_EMAIL=your@email.com
   ```

---

## Tech Decisions

- **Vite over CRA**: Faster dev server, native ESM, smaller build.
- **Framer Motion**: Smooth scroll-triggered animations with minimal config.
- **Tailwind CSS**: Utility-first — no separate CSS files for each component.
- **Motor (async MongoDB)**: Non-blocking DB operations with FastAPI's async endpoints.
- **Sonner**: Lightweight toast notifications (no heavy UI library).

---

## License

MIT — free to use, modify, and distribute.
