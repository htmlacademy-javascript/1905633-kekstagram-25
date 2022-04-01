const miniaturesDisplay = function (objects) {
  const picturesSection = document.querySelector('.pictures');
  const templateContent = document.querySelector('#picture').content;
  const pictureContainer = templateContent.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < objects.length; i++) {
    const pictureContainerCloned = pictureContainer.cloneNode(true);
    const picture = pictureContainerCloned.querySelector('.picture__img');
    const pictureLikes = pictureContainerCloned.querySelector('.picture__likes');
    const pictureComments = pictureContainerCloned.querySelector('.picture__comments');

    picture.src = objects[i].url;
    pictureLikes.textContent = objects[i].likes;
    pictureComments.textContent = objects[i].comments.length - 1;

    fragment.append(pictureContainerCloned);
  }
  picturesSection.append(fragment);
};

export { miniaturesDisplay };
