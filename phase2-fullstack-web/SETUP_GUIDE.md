# Setup Guide: Phase II - Full-Stack Web App

This is a complete full-stack application with a Python Backend (FastAPI) and a Next.js Frontend.

Directory structure:
- `backend/` - Python API Server
- `frontend/` - React/Next.js Web Interface

## 🚀 Correct Way to Run (Automated)

I've included a script to start everything for you!

1.  Open PowerShell in this folder.
2.  Run the command:
    ```powershell
    .\run_project.ps1
    ```
3.  This will:
    - Create virtual environments if needed.
    - Install dependencies.
    - Start the **Backend Server** on `http://127.0.0.1:8000`.
    - Start the **Frontend Server** on `http://localhost:3000`.

---

## 🛠 Manual Setup Instructions (If the script fails)

### 1. Backend Setup (Python)

Open a terminal in the `backend` folder:

```bash
cd backend

# Create virtual environment
python -m venv .venv
.\.venv\Scripts\Activate

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn src.main:app --reload
```
The API will be available at: http://127.0.0.1:8000/docs

### 2. Frontend Setup (Node.js)

Open a NEW terminal in the `frontend` folder:

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```
The App will be available at: http://localhost:3000

## 📝 Environment Configuration

- **Backend**: Needs a `.env` file for database connection.
  - Create `.env` in `backend/`
  - Add: `DATABASE_URL=sqlite:///./todo.db` (for simple local testing) or your PostgreSQL URL.

- **Frontend**: Needs `.env.local` for API URL.
  - Create `.env.local` in `frontend/`
  - Add: `NEXT_PUBLIC_API_URL=http://127.0.0.1:8000`

---
**Enjoy your new Full-Stack Todo App!** 🚀
