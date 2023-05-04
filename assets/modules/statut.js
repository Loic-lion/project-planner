
const checkboxes = document.querySelectorAll('input[type=checkbox]');

// Boucle à travers tous les checkboxes
checkboxes.forEach(checkbox => {
  // Ajoute un événement onchange à chaque checkbox
  checkbox.addEventListener('change', function() {
    // Récupère l'élément li parent
    const li = this.parentNode;

    // Supprime toutes les classes de l'élément li
    li.classList.remove('done', 'doing', 'todo');

    // Ajoute la classe appropriée en fonction de la case à cocher cochée
    if (this.checked && this.value === 'done') {
      li.classList.add('done');
    } else if (this.checked && this.value === 'doing') {
      li.classList.add('doing');
    } else if (this.checked && this.value === 'todo') {
      li.classList.add('todo');
    }
  });
});
