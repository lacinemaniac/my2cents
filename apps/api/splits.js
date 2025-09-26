// Minimal split calculator (we’ll refine after LND is live)
function computeSplits({ amountUsdCents, satsPerUsd, poolPctBps = 1000, platformFeeCents = 1 }) {
  const amountSats = Math.max(1, Math.round((amountUsdCents / 100) * satsPerUsd));
  const platformFeeSats = Math.max(1, Math.round((platformFeeCents / 100) * satsPerUsd));
  const remaining = amountSats - platformFeeSats;
  if (remaining < 2) throw new Error("Too small after fee");

  const poolSats = Math.max(1, Math.round((remaining * poolPctBps) / 10000));
  const creatorSats = remaining - poolSats;
  return { amountSats, platformFeeSats, poolSats, creatorSats };
}

module.exports = { computeSplits };
