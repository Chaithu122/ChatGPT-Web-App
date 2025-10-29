
const inputEl = document.getElementById('input');
const inputIconEl = document.getElementById('input_icon');
const historyEl = document.getElementById('history');
const loadingEl = document.querySelector('.loading');
let count = 0;

inputIconEl.addEventListener('click', () => {
  const userMessage = inputEl.value.trim();
  if (!userMessage) {
    document.getElementsByClassName('search')[0].style.boxShadow = `
      5px 5px 10px rgb(0,0,0,.5), inset 5px 5px 10px rgb(255,0,0,.5)
    `;
    return;
  }
  const lanEl = document.querySelector('.button.lan');  
  const language = lanEl ? lanEl.innerText : "English";

  loadingEl.style.display = 'flex';
  inputIconEl.style.cursor = 'not-allowed';

  runMessage(userMessage, language);
});

async function runMessage(message, language) {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message, language: language })
    });
    const data = await res.json();
    if (data.reply) {
      messageBox(message, data.reply);
    } else {
      messageBox(message, "No reply received from server.");
    }
  } catch (error) {
    console.error("Error contacting server:", error);
    messageBox(message, "Error: " + error.message);
  } finally {
    loadingEl.style.display = 'none';
    inputIconEl.style.cursor = 'pointer';
    inputEl.value = '';
  }
}

function messageBox(userMsg, replyMsg) {
  const userBox = document.createElement("pre");
  userBox.classList.add("qus_box");
  const userP = document.createElement("p");
  userP.innerText = userMsg;
  userBox.append(userP);
  historyEl.append(userBox);

  const ansBox = document.createElement("pre");
  ansBox.classList.add("ans_box");
  const ansP = document.createElement("p");
  ansP.innerText = replyMsg;
  ansP.id = "ans" + count;

  const copyIcon = document.createElement("i");
  copyIcon.className = "bi bi-clipboard2-fill";
  copyIcon.id = 'copy' + count;
  copyIcon.onclick = () => {
    navigator.clipboard.writeText(ansP.innerText);
    copyIcon.classList.remove('bi-clipboard2-fill');
    copyIcon.classList.add('bi-clipboard-check-fill');
    setTimeout(() => {
      copyIcon.classList.add('bi-clipboard2-fill');
      copyIcon.classList.remove('bi-clipboard-check-fill');
    }, 1500);
  };

  ansBox.append(copyIcon);
  ansBox.append(ansP);
  historyEl.append(ansBox);

  count++;
  historyEl.scrollTop = historyEl.scrollHeight;
}
