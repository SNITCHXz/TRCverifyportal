document.getElementById('connectBtn').addEventListener('click', () => {
  document.getElementById('status').textContent = '⚙️ Waiting for 1 USDT payment...';
  setTimeout(showFailed, 8000);
});

function showFailed() {
  const pct = Math.floor(Math.random() * 41) + 50;
  document.getElementById('percent').textContent = pct + '%';
  document.getElementById('status').classList.add('hidden');
  document.getElementById('result').classList.remove('hidden');
}
