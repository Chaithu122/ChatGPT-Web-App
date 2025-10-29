import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());


app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const apikey = process.env.apikey;
if (!apikey) {
  console.error("ERROR: apikey is missing in .env");
  process.exit(1);
}

app.post("/api/chat", async (req, res) => {
  try {
    const { message, language } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const bodyPayload = {
      model: "Meta-Llama-3.3-70B-Instruct",  
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `${message} in ${language || "English"}` }
      ],
      temperature: 0.5,
      max_tokens: 500
    };

    const response = await fetch("https://api.sambanova.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apikey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyPayload)
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(" API error:", data);
      return res.status(response.status).json({ error: data.error?.message || " API error" });
    }

    const reply = data.choices?.[0]?.message?.content || "No reply received.";
    res.json({ reply });

  } catch (error) {
    console.error("Error in /api/chat:", error);
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
