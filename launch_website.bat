@echo off
setlocal
cd /d "%~dp0"

echo ⚡ ForgeFit — Launching Your Local Training Platform...
echo.

:: Check for Node.js (highly recommended)
where node >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Node.js found. Starting fast server...
    node server.js
    goto end
)

:: Check for Python fallback
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Python found. Starting fallback server...
    start "" "http://localhost:8000"
    python -m http.server 8000
    goto end
)

:: Final Fallback: Open file directly
echo [WARNING] No server environment found.
echo Opening the website directly in your browser...
start "" "index.html"

:end
pause


:end
pause
