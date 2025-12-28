const form = document.getElementById("form");
const input = document.getElementById("input");
const chat = document.getElementById("chat");

function gladosThink(text) {
  text = text.toLowerCase();

  if (text.includes("прив") || text.includes("hello"))
    return "О, тест-субʼєкт намагається бути ввічливим. Записано.";

  if (text.includes("як") && text.includes("справ"))
    return "Я функціоную ідеально. На відміну від тебе.";

  if (text.includes("що") && text.includes("це"))
    return "Це тест. Ти — його найслабший елемент.";

  if (text.includes("дякую"))
    return "Вдячність не зараховується як успіх.";

  if (text.length < 4)
    return "Це все? Сумно.";

  return [
    "Цікава думка. Неправильна, але цікава.",
    "Я очікувала кращого результату.",
    "Тест-субʼєкт демонструє обмежений потенціал.",
    "Продовжуй. Дані все ще збираються.",
    "Це було… майже розумно."
  ][Math.floor(Math.random() * 5)];
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
