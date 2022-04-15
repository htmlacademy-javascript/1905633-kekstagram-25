import { enlargePicture } from './maxPic.js';
import { expandComments } from './expand.js';
import { enableFilters } from './filtering.js';

const displayMiniatures = (objects) => {
  const picturesSection = document.querySelector('.pictures');
  const templateContent = document.querySelector('#picture').content;
  const pictureContainer = templateContent.querySelector('.picture');
  const bigPictureSection = document.querySelector('.big-picture');
  const closeButton = bigPictureSection.querySelector('.big-picture__cancel');
  const body = document.querySelector('body');
  const fragment = document.createDocumentFragment();
  const allImages = [];

  for (let i = 0; i < objects.length; i++) {
    const pictureContainerCloned = pictureContainer.cloneNode(true);
    const picture = pictureContainerCloned.querySelector('.picture__img');
    const pictureLikes = pictureContainerCloned.querySelector('.picture__likes');
    const pictureComments = pictureContainerCloned.querySelector('.picture__comments');

    picture.src = objects[i].url;
    pictureLikes.textContent = objects[i].likes;
    pictureComments.textContent = objects[i].comments.length;

    allImages[i] = pictureContainerCloned;

    const onPopupEscKeydown = (evt) => {
      if (evt.key === 'Escape') {
        // eslint-disable-next-line no-use-before-define
        hideModalWindow();
      }
    };

    const hideModalWindow = () => {
      bigPictureSection.classList.add('hidden');
      body.classList.remove('modal-open');
      document.querySelector('.social__comments-loader').classList.remove('hidden');
      closeButton.removeEventListener('click', hideModalWindow);
      document.removeEventListener('keydown', onPopupEscKeydown);
      const bigPictureSocialSection = document.querySelector('.big-picture__social');
      const newButton = document.querySelector('.social__comments-loader').cloneNode(true);
      const commentField = document.querySelector('.social__footer');
      document.querySelector('.social__comments-loader').remove();
      bigPictureSocialSection.insertBefore(newButton, commentField);
    };

    const showModalWindow = () => {
      enlargePicture(objects[i]);
      expandComments();
      closeButton.addEventListener('click', hideModalWindow);
      document.addEventListener('keydown', onPopupEscKeydown);
    };

    pictureContainerCloned.addEventListener('click', showModalWindow);

    fragment.append(pictureContainerCloned);
  }

  picturesSection.append(fragment);
  enableFilters(allImages);
};

export { displayMiniatures };
