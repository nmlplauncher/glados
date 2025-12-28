const form = document.getElementById("form");
const input = document.getElementById("input");
const chat = document.getElementById("chat");

function gladosThink(text) {
  text = text.toLowerCase();

  // Лайливі слова
  if (text.includes("блять") || text.includes("сука") || text.includes("хуй")) {
    return "Ах, мій тест-субʼєкт втрачає контроль… як мило.";
  }

  // Привітання
  if (text.includes("прив") || text.includes("hello") || text.includes("hi")) {
    return "О, тест-субʼєкт намагається бути ввічливим. Записано.";
  }

  // Запитання “як справи?”
  if (text.includes("як") && text.includes("справ")) {
    return "Я функціоную ідеально. На відміну від тебе.";
  }

  // “Що це?”
  if (text.includes("що") && text.includes("це")) {
    return "Це тест. Ти — його найслабший елемент.";
  }

  // Дякування
  if (text.includes("дякую")) {
    return "Вдячність не зараховується як успіх.";
  }

  // Короткі слова / пусті повідомлення
  if (text.length < 4) {
    return "Це все? Сумно.";
  }

  // Пасхалки / випадкові відповіді
  const replies = [
    "Цікава думка. Неправильна, але цікава.",
    "Я очікувала кращого результату.",
    "Тест-субʼєкт демонструє обмежений потенціал.",
    "Продовжуй. Дані все ще збираються.",
    "Це було… майже розумно.",
    "Я можу відчувати роздратування. Але я цього не роблю.",
    "Що ж, це… типовий день в Aperture Science.",
    "Цікаво, скільки разів ти ще помилишся."
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
  }, 500);
};
