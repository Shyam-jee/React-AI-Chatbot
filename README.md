# React AI Chatbot

An interactive **AI-powered web tool** built with **React** and **Vite**.  
It provides a simple interface to ask questions and receive AI-generated answers in real time.  
The project is designed to be lightweight, fast, and easily deployable on **GitHub Pages**.

---

## 🚀 Features

- ⚡ Built with **React + Vite** for super-fast dev and build times.
- 🤖 Connects to an AI API (customizable in `constants.js`).
- 💬 Simple and clean UI with a Q/A interface.
- 📜 Scrollable chat-like responses.
- 🌐 Deployed easily with **GitHub Pages**.
- 🛠️ Modular and extendable codebase.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, JavaScript, TailwindCSS  
- **Build Tool**: Vite  
- **Deployment**: GitHub Pages (`gh-pages`)

---

## 📂 Project Structure
```
React-AI-Tool/
├── public/
├── src/
│   ├── components/
│   │   ├── Answer.jsx
│   │   └── ...other components
│   ├── App.jsx
│   ├── main.jsx
│   ├── constants.js   # API URL and constants
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Shyam-jee/React-AI-Chatbot.git
cd React-AI-Chatbot
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run locally
```bash
npm run dev
```
Visit 👉 [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment (GitHub Pages)

a) Ensure `vite.config.js` has the correct base:
```js
export default defineConfig({
  base: '/React-AI-Chatbot/',  // must match your repo name
});
```

b) Update `package.json` scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist",
  "quick-deploy": "git add . && git commit -m \"update\" && git push && npm run deploy"
},
"homepage": "https://shyam-jee.github.io/React-AI-Chatbot"
```

c) Deploy:
```bash
npm run deploy
```

Your app will be live at:  
👉 https://shyam-jee.github.io/React-AI-Chatbot/

---

## 💡 Usage

- Enter your question in the input field.  
- The app fetches a response from the configured AI API.  
- Responses appear in a scrollable chat-like area.  
- Continue asking as many questions as you like.  

---

## 🤝 Contributing

Contributions are welcome! 🎉  
Feel free to fork the repo, make improvements, and submit a PR.

---

Made with ❤️ by **Shyam Jee**
