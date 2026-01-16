async function sendToAI() {
  const input = document.getElementById('userInput').value;
  const output = document.getElementById('aiOutput');
  output.textContent = '🤖 CoForMaFi is thinking...';

  try {
    const response = await fetch('https://YOUR-REPLIT-ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt: input })
    });

    const data = await response.json();
    output.textContent = `💡 CoForMaFi:\n${data.reply}`;
  } catch (err) {
    output.textContent = `❌ Error: ${err.message}`;
  }
}
