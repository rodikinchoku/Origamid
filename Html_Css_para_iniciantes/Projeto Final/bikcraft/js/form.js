const form = document.querySelector("form");

function SentForm(response) {
  if (response.ok) {
    form.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317A00;'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  } else {
    form.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #E00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.net</p>";
  }
}

function SendForm(event) {
  event.preventDefault();
  const button = document.querySelector("form button");
  button.disabled = true;
  button.innerText = "Enviando...";

  const data = new FormData(form);

  fetch("./send.php", {
    method: "POST",
    body: data,
  }).then(SentForm);
}

form.addEventListener("submit", SendForm);