const express = require("express");

const app = express();
app.use(express.json());

// health checks
app.get("/", (_req, res) => res.send("My2Cents API is alive"));
app.get("/healthz", (_req, res) => res.json({ ok: true }));

// TEMP endpoint — returns a dummy invoice so we can wire up the front-end later
app.get("/api/generate-invoice", async (req, res) => {
  const { amount = "0.25", creator = "testcreator" } = req.query;
  const dummy = `lightning:lnbc_${Math.random().toString(36).slice(2, 10)}`;
  res.json({ ok: true, creator, amount, invoice: dummy });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API listening on :${PORT}`);
});
