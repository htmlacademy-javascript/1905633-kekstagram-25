
const expandComments = () => {
  let visibleCount = 5;
  const commentsList = document.querySelectorAll('.social__comment');
  const loadButton = document.querySelector('.social__comments-loader');
  const visibleComments = document.querySelector('.comments-visible');

  if (commentsList.length > visibleCount) {
    for (let i = visibleCount; i < commentsList.length; i++) {
      commentsList[i].classList.add('hidden');
      loadButton.classList.remove('hidden');
    }
  } else {
    loadButton.classList.add('hidden');
  }

  loadButton.addEventListener('click', () => {
    if (commentsList.length >= visibleCount + 5) {
      for (let i = visibleCount; i < visibleCount + 5; i++) {
        commentsList[i].classList.remove('hidden');
        loadButton.classList.remove('hidden');
      }
      visibleCount += 5;
    } else if (commentsList.length < visibleCount + 5) {
      for (let i = visibleCount; i < commentsList.length; i++) {
        commentsList[i].classList.remove('hidden');
      }
      visibleCount = commentsList.length;
      loadButton.classList.add('hidden');
    }
    visibleComments.textContent = visibleCount;
  });

};

export { expandComments };
