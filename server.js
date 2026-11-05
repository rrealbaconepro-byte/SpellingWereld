// SpellingWereld – kleine Express-server voor Render.
// Serveert alleen index.html, zodat server.js en package.json niet te downloaden zijn.
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const page = path.join(__dirname, "index.html");

app.disable("x-powered-by");
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

app.get("/healthz", (req, res) => res.send("ok"));
app.get("*", (req, res) => res.sendFile(page));

app.listen(PORT, () => console.log(`SpellingWereld draait op poort ${PORT}`));
