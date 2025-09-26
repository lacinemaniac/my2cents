// LND helper (stub). We'll replace with real gRPC calls once your node creds are ready.
async function addInvoiceSats(valueSats, memo = "") {
  return { payment_request: `lnbc_${valueSats}_${Date.now()}_${memo || "tip"}` };
}

async function sendPaymentBolt11WithRetry(_bolt11) {
  return true; // simulate success
}

module.exports = { addInvoiceSats, sendPaymentBolt11WithRetry };
