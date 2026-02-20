# 5 Steps to Create a Local Host Website

Follow these steps to run your **ForgeFit** website (or any project) on your local machine:

### 1. Organize Your Files
Ensure all your website files (`index.html`, `style.css`, `app.js`) are in a single dedicated folder. For this project, they are in: `C:\Users\Admin\Downloads\FitnessPro`.

### 2. Choose a Local Server Method
The simplest way is to use a "Local Server" tool. You can use:
- **VS Code "Live Server" Extension**: (Recommended) Just click "Go Live" at the bottom right of VS Code.
- **Python (Built-in)**: If you have Python installed, you can run a command.
- **Node.js (npx)**: Run a simple command if you have Node.js.

### 3. Start the Server
Open your terminal or command prompt, navigate to your folder, and run one of these:
- **Python**: `python -m http.server 8000`
- **Node.js**: `npx serve .`

### 4. Access the Local Host URL
Open your web browser (Chrome, Edge, etc.) and type the following into the address bar:
`http://localhost:8000` (or the port number provided by your tool).

### 5. Start Developing
Now, any changes you save in your code files will be reflected on the website immediately when you refresh the page!
