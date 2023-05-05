// Fonction pour mettre à jour les deadlines
function updateDeadlines() {
    const dateLimiteSpans = document.querySelectorAll('.date_limite');
    dateLimiteSpans.forEach((dateLimiteSpan) => {
      const deadlineSpan = dateLimiteSpan.parentNode.parentNode.querySelector('.deadline');
      const dateLimite = new Date(dateLimiteSpan.innerText);
      const now = new Date();
      const diff = dateLimite.getTime() - now.getTime();
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      deadlineSpan.innerText = `${days} jours restants`;
    });
  }
  
  // Fonction pour initialiser le module
  export function initDeadlines() {
    // Mettre à jour les deadlines toutes les secondes
    setInterval(updateDeadlines, 1000);
  }