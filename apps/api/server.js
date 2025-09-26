const express = require("express");
const app = express();

// allow browser calls from any domain (Vercel, local, etc.)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.use(express.json());

// health checks
app.get("/", (_req, res) => res.send("AddYour2Cents API is alive"));
app.get("/healthz", (_req, res) => res.json({ ok: true }));

// TEMP endpoint — returns a dummy invoice so we can wire up the front-end
app.get("/api/generate-invoice", async (req, res) => {
  const { amount = "0.25", creator = "testcreator" } = req.query;
  const dummy = `lightning:lnbc_${Math.random().toString(36).slice(2, 10)}`;
  res.json({ ok: true, creator, amount, invoice: dummy });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API listening on :${PORT}`);
});
