/////////////////////MISE A JOUR DEADLINE/////////////////
function updateDeadlines() {
  const dateLimiteSpans = document.querySelectorAll(".date_limite");
  dateLimiteSpans.forEach((dateLimiteSpan) => {
    const deadlineSpan =
      dateLimiteSpan.parentNode.parentNode.querySelector(".deadline");
    const dateLimite = new Date(dateLimiteSpan.innerText);
    const now = new Date();
    const diff = dateLimite.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    deadlineSpan.innerText = `${days} jours restants`;
  });
}

////////// DECLENCHEMENT MODULE//////////////////////////
export function initDeadlines() {
  setInterval(updateDeadlines, 1000);
}
