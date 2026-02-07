# PowerShell script to run both servers

# Check if we are in the right directory
if (!(Test-Path "backend") -or !(Test-Path "frontend")) {
    Write-Host "Error: Please run this script from the project root folder containing 'backend' and 'frontend' directories." -ForegroundColor Red
    Exit
}

# 1. Setup Backend Environment (basic check)
if (!(Test-Path "backend/.env")) {
    Write-Host "Creating default .env for backend..." -ForegroundColor Yellow
    Copy-Item "backend/.env.example" "backend/.env" -ErrorAction SilentlyContinue
    # Append a default SQLite DB URL for easy local testing if not present
    if (!(Select-String -Path "backend/.env" -Pattern "DATABASE_URL")) {
        Add-Content "backend/.env" "`nDATABASE_URL=sqlite:///./todo.db"
    }
}

# 2. Setup Frontend Environment (basic check)
if (!(Test-Path "frontend/.env.local")) {
    Write-Host "Creating default .env.local for frontend..." -ForegroundColor Yellow
    Copy-Item "frontend/.env.example" "frontend/.env.local" -ErrorAction SilentlyContinue
}

# 3. Launch Backend
Write-Host "Launching Backend Server (FastAPI)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; python -m venv .venv; .\.venv\Scripts\Activate.ps1; pip install -r requirements.txt; uvicorn src.main:app --reload"

# 4. Launch Frontend
Write-Host "Launching Frontend Server (Next.js)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm install; npm run dev"

Write-Host " servers starting in new windows..."
Write-Host "Once servers are ready:"
Write-Host "Backend API: http://127.0.0.1:8000/docs"
Write-Host "Frontend App: http://localhost:3000"
Start-Sleep -Seconds 5
