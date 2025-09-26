// Stub payout queue (we'll connect real payouts later)
console.log("payout-queue starting (stub)");

function enqueuePayout(invoiceHash) {
  console.log("Processing payout for:", invoiceHash);
}

module.exports = { enqueuePayout };
