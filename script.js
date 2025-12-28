const form = document.getElementById("form");
const input = document.getElementById("input");
const chat = document.getElementById("chat");

function gladosThink(text) {
  text = text.toLowerCase();

  if (dictionary.insults.some(word => text.includes(word))) {
    return "Ах, мій тест-субʼєкт втрачає контроль… як мило.";
  }

  if (dictionary.greetings.some(word => text.includes(word))) {
    return "О, тест-субʼєкт намагається бути ввічливим. Записано.";
  }

  if (dictionary.howAreYou.some(word => text.includes(word))) {
    return "Моя продуктивність стабільна. Твоя — сумнівна.";
  }

  if (dictionary.questions.some(word => text.includes(word))) {
    return "Цікаве питання. На жаль, твоя логіка слабка.";
  }

  if (dictionary.thanks.some(word => text.includes(word))) {
    return "Вдячність прийнято, але вона не покращує результати.";
  }

  if (dictionary.smallTalk.some(word => text.includes(word))) {
    return "Це все? Очікувала більшого.";
  }

  const replies = [
    "Майже правильно, але недостатньо.",
    "Тест-субʼєкт демонструє обмежений потенціал.",
    "Продовжуй. Дані все ще збираються.",
    "Цікаво, скільки разів ти ще помилишся.",
    "Твої спроби цікаві… в межах статистичної похибки.",
    "Я можу відчувати роздратування. Але я цього не роблю.",
    "Ти на правильному шляху… майже.",
    "Досить цікаво, але не достатньо, щоб мене здивувати."
  ];

  return replies[Math.floor(Math.random() * replies.length)];
}

form.onsubmit = (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  chat.innerHTML += `<div class="user">> ${text}</div>`;
  input.value = "";

  setTimeout(() => {
    const reply = gladosThink(text);
    chat.innerHTML += `<div class="glados">GLaDOS: ${reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 300);
};
