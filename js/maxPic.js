const maxPic = function (object) {
  const bigPictureSection = document.querySelector('.big-picture');
  const bigPictureImage = bigPictureSection.querySelector('.big-picture__img');
  const bigPictureImageTag = bigPictureImage.querySelector('img');
  const bigPictureLikesCount = bigPictureSection.querySelector('.likes-count');
  const bigPictureCommentsCount = bigPictureSection.querySelector('.comments-count');
  const bigPictureSocialComments = bigPictureSection.querySelector('.social__comments');
  const bigPictureDescription = bigPictureSection.querySelector('.social__caption');
  const bugPictureCommentCountContainer = bigPictureSection.querySelector('.social__comment-count');
  const bugPictureCommentLoader = bigPictureSection.querySelector('.comments-loader');
  const body = document.querySelector('body');
  let fragment = document.createDocumentFragment();

  bigPictureSection.classList.remove('hidden');
  bugPictureCommentCountContainer.classList.add('hidden');
  bugPictureCommentLoader.classList.add('hidden');
  body.classList.add('modal-open');

  bigPictureImageTag.src = object.url;
  bigPictureLikesCount.textContent = object.likes;
  bigPictureCommentsCount.textContent = object.comments.length - 1;
  bigPictureDescription.textContent = object.description;

  for (let j = 1; j < object.comments.length; j++) {
    const existingComment = document.querySelector('.social__comment');
    const newComment = existingComment.cloneNode(true);
    const newCommentImage = newComment.querySelector('img');
    const newCommentText = newComment.querySelector('.social__text');

    newCommentImage.src = object.comments[j].avatar;
    newCommentImage.alt = object.comments[j].name;
    newCommentText.textContent = object.comments[j].message;

    fragment.append(newComment);

  });
}

bigPictureSocialComments.append(fragment);

const closeButton = bigPictureSection.querySelector('.big-picture__cancel');
closeButton.addEventListener('click', () => {
  bigPictureSection.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    bigPictureSection.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};


export { maxPic };