# Phase 3 Standalone Setup Guide

This directory contains the Integrated Phase 3 application (Full Stack Web + AI Chatbot), configured to run alongside Phase 2.

## Configuration
- **Frontend Port**: 3001
- **Backend Port**: 8001
- **Database**: Shared with Phase 2 (Neon DB)

## Prerequisites
1. **OpenAI API Key**: Open `backend/.env` and replace `sk-your-openai-key-here` with your actual key.

## Installation Steps

### 1. Database Migration
You must create the new tables (`conversations`, `messages`) in your database.
Run this SQL script in your database (via Neon Console or pgAdmin):
`backend/migrations/003_phase3_tables.sql`

### 2. Backend Setup
```bash
cd backend
python -m venv venv
# Windows
.\venv\Scripts\Activate.ps1
# Mac/Linux
source venv/bin/activate

pip install -r requirements.txt
uvicorn src.main:app --reload --port 8001
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
(This will automatically start on port 3001)

## Running Simultaneously with Phase 2
- **Phase 2**: Access at `http://localhost:3000` (Backend 8000)
- **Phase 3**: Access at `http://localhost:3001` (Backend 8001/chat)
