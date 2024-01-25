document.getElementById('goal-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const goalInput = document.getElementById('goal');
  const goalText = goalInput.value;
  const categoryInput = document.getElementById('category');
  const categoryText = categoryInput.value;
  const tagsInput = document.getElementById('tags');
  const tagsText = tagsInput.value.split(',').map(tag => tag.trim());

  if (goalText.trim() !== '') {
    const goalList = document.getElementById('goal-list');
    const newGoal = document.createElement('li');
    newGoal.innerHTML = `
      <span>${goalText}</span>
      <div>
        <span class="category">Categoria: ${categoryText}</span>
        <span class="tags">Tags: ${tagsText.join(', ')}</span>
      </div>
      <button class="delete-button">Excluir</button>
    `;

    newGoal.querySelector('.delete-button').addEventListener('click', function () {
      goalList.removeChild(newGoal);
    });

    newGoal.addEventListener('click', function () {
      newGoal.classList.toggle('completed');
    });

    goalList.appendChild(newGoal);
    goalInput.value = '';
    categoryInput.value = '';
    tagsInput.value = '';
  }
});
