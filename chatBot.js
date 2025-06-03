
  const toggleBtn = document.getElementById('chatbot-toggle');
  const chatBox = document.getElementById('chatbot-box');
  const closeBtn = document.getElementById('chatbot-close');
  const input = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send');
  const messages = document.getElementById('chatbot-messages');

  // Toggle chat visibility
  toggleBtn.onclick = () => {
    chatBox.style.display = 'flex';
  };

  closeBtn.onclick = () => {
    chatBox.style.display = 'none';
  };

  // Format GPT response for readability
    function formatResponse(text) {
    if (typeof text !== 'string') return '❌ Invalid response format';

    return text
        .replace(/\n/g, "<br>")
        .replace(/\. ([A-Z])/g, ".<br><br>$1")
        .replace(/(\*\*.+?\*\*)/g, "<strong>$1</strong>");
    }

  // Send message
  function sendMessage() {
    const userMsg = input.value.trim();
    if (!userMsg) return;

    // Display user's message
    const userDiv = document.createElement('div');
    userDiv.textContent = "🧑 " + userMsg;
    messages.appendChild(userDiv);
    messages.scrollTop = messages.scrollHeight;

    // Clear input
    input.value = '';

    // Add loading message
    const loadingDiv = document.createElement('div');
    loadingDiv.textContent = "🤖 Typing...";
    loadingDiv.id = "loading";
    messages.appendChild(loadingDiv);
    messages.scrollTop = messages.scrollHeight;

    // Get GPT response
    puter.ai.chat(userMsg)
    .then(response => {
        const loadingElement = document.getElementById('loading');
        if (loadingElement) messages.removeChild(loadingElement);

        let botText = '';
        try {
        const parsed = typeof response === "string" ? JSON.parse(response) : response;
        botText = parsed.message?.content || JSON.stringify(parsed, null, 2);
        } catch (err) {
        botText = typeof response === "string" ? response : JSON.stringify(response, null, 2);
        }

        const botDiv = document.createElement('div');
        botDiv.textContent = "🤖 " + botText;
        botDiv.classList.add('bot-msg');
        messages.appendChild(botDiv);
        messages.scrollTop = messages.scrollHeight;
    });



  }

  sendBtn.onclick = sendMessage;
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
