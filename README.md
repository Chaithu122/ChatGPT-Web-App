
## 🤖 ChatGPT Web App

## 🎯 Objective

To build a simple and interactive AI chat interface using Node.js, HTML, CSS, and JavaScript that allows users to communicate with the OpenAI ChatGPT model directly from the browser.

## 📘 Description

This project is a web-based ChatGPT application that uses a Node.js backend to securely handle API requests and a HTML, CSS, JavaScript frontend to display the chat interface.
Users can type messages into the chat UI, and the message is sent to the backend where it is forwarded to the OpenAI ChatGPT API. The AI's response is then returned and displayed in the browser in real time, creating a smooth and interactive conversational experience.

## 🌍 Live Demo

You can access the hosted version of the ChatGPT Web App using the link below:

👉🌐 [LiveDemo]( https://unvacated-nonheretical-myra.ngrok-free.dev/)

## ✨ Features

- 💬 Real-time AI conversation using OpenAI ChatGPT API
- 🌐 Built with Node.js backend + HTML/CSS/JavaScript fronten
- 🧾 Secure API handling via server
- 🎨 Responsive and clean UI for smooth chat experience
- ⚡ Fast request-response using fetch() integration
- 🧠 Handles errors & empty input gracefully
- 🧩 Modular and beginner-friendly project structure

## 🧰 Technical Skills Used

- HTML5 — Structure and markup

- CSS3 — Styling, layout, responsiveness

- JavaScript (ES6) — Client-side logic and DOM handling

- Node.js — Backend runtime environment

- Express.js — Server and API routing

- OpenAI ChatGPT API — AI-powered responses

- Git & GitHub — Version control and code hosting

  
## 📂 Project Structure
```
chatgpt-web-app/
│
├── public/
│   ├── index.html        
│   ├── style.css         
│   └── script.js        
│
├── server.js            
├── package.json         
├── .env                 
├── .gitignore            
└── README.md
```

## 🛠 Installation & Setup

 **1. Create a New Project Folder**

- Create a folder named chatgpt-web-app on your system

- Open the folder in VS Code

**2. Create Required Files**
- index.html

- style.css

- script.js

- server.js (for backend API handling)

- .env (for storing API key securely)

**3. Write the Code**

- Add frontend UI code in index.html

- Add styles in style.css

- Add client-side chat logic in script.js

- Add Node.js server and API request code in server.js

**4. Add Your OpenAI API Key**

- Open .env file and add:
- OPENAI_API_KEY=YOUR_API_KEY

**5. Install Dependencies**
```
npm install
```

**6. Run the Project**
```
node server.js
```

-Then open browser and visit:
```
http://localhost:3000
```

## 📌 Usage

- Open the application in your browser
- Type your question or prompt in the input field
- Click the **Send** / **Submit** button
- Wait for the AI to generate and display the response
- Continue the conversation in real-time as a chat

## 🔑 API Key Usage

- This project communicates with the OpenAI API to generate AI responses.
- To use the application, you must provide a valid OpenAI API key.
- The API key is used only for sending requests securely from the backend (Node.js).
- Do not expose your API key in the frontend (HTML/JS) — always keep it in a .env file or server code.
- Example of .env file:
```
OPENAI_API_KEY=your_api_key_here
```
- Never push your API key to GitHub — remove it or use .gitignore.

## 📸 Screenshots

Below are some preview screens from the ChatGPT Web App  help to understand the UI and overall workflow

### 🏠 Home Screen

<img src="https://github.com/user-attachments/assets/a87a50e7-babf-4872-9a0d-487f7fa41c5b" alt="homepage"/>

### 💬 Chat Response Screen
<img src="https://github.com/user-attachments/assets/f2ff18ad-cc73-4b7d-bf27-3200782c568e" alt="chatpage1"/>
<img src="https://github.com/user-attachments/assets/d5b9efca-93b4-47cb-9037-8e66b19d47ec" alt="chatpage2"/>
<img src="https://github.com/user-attachments/assets/3165d755-a808-49e6-ac75-d79e2d6f8cac" alt="chatpage3"/>

## 🧠 How It Works

- The frontend (HTML/CSS/JS) captures user prompts and sends them to the backend
- The backend (Node.js) receives the prompt and reads the API key from .env
- A request is sent to the OpenAI API using the secure API key
- The AI response is returned from the backend to the frontend
- The response is displayed dynamically in a chat-style interface

## 👨‍💻 Author

**Krishna Chaithanya Pigilapu** 

Java Full Stack Developer-Fresher

**Core Skills:**

Java • Spring Boot • REST APIs • HTML • CSS • JavaScript • React • SQL • Git & GitHub

**About Me:**  

Passionate fresher with strong fundamentals in backend and frontend development, actively looking for an entry-level developer role to apply skills and grow in a real-world environment.

📧 Email: pigilapuchaithanya123@gmail.com 

🔗 GitHub:https://github.com/Chaithu122

🔗 LinkedIn:https://linkedin.com/in/krishna-chaithanya-pigilapu-655563349

## 📬 Connect With Me

If you found this project interesting or would like to discuss opportunities, feel free to connect with me:

- 🔗 [LinkedIn](https://www.linkedin.com/in/krishna-chaithanya-pigilapu-655563349/)
- 📧 [Email](pigilapuchaithanya123@gmail.com)
- 💻 [GitHub](https://github.com/Chaithu122)

## 🚀 Open to Opportunities

- Thank you for reviewing my project. I am a dedicated fresher with strong fundamentals and a constant learning mindset, looking for an opportunity to apply my skills in a professional environment.  
- I would be glad to connect and discuss how I can contribute to your team.





























  

































