import { shuffleArray } from './util.js';

function enableFilters(picturesArray) {
  const picturesSection = document.querySelector('.pictures');
  const filters = document.querySelector('.img-filters');
  const defaultFilter = filters.querySelector('#filter-default');
  const randomFilter = filters.querySelector('#filter-random');
  const discussedFilter = filters.querySelector('#filter-discussed');
  let timeoutId;

  filters.classList.remove('img-filters--inactive');
  const defaultListClone = picturesArray.slice();

  function highlightFilter(targetID) {
    const buttons = filters.querySelectorAll('button');
    buttons.forEach((element) => {
      element.classList.remove('img-filters__button--active');
    });
    const tagerButton = filters.querySelector(`#${targetID}`);
    tagerButton.classList.add('img-filters__button--active');
  }

  function erasePictures() {
    picturesArray.forEach((element) => {
      element.remove();
    });
  }

  function debounce(callback, timeoutDelay = 500) {
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback(), timeoutDelay);
    };
  }

  function showDefaultMiniatures() {
    erasePictures();
    defaultListClone.forEach((element) => {
      picturesSection.append(element);
    });
  }

  function showRandomMiniatures() {
    const shuffledList = shuffleArray(picturesArray.slice()).slice(0, 10);
    erasePictures();
    shuffledList.forEach((element) => {
      picturesSection.append(element);
    });
  }

  function showDiscussedMiniatures() {
    erasePictures();
    picturesArray.sort((a, b) => {
      if (Number(a.querySelector('.picture__likes').textContent) < Number(b.querySelector('.picture__likes').textContent)) {
        return 1;
      }
      if (Number(a.querySelector('.picture__likes').textContent) > Number(b.querySelector('.picture__likes').textContent)) {
        return -1;
      }
      return 0;
    });

    picturesArray.forEach((element) => {
      picturesSection.append(element);
    });
  }


  defaultFilter.addEventListener('click', () => {
    highlightFilter('filter-default');
    debounce(showDefaultMiniatures)();
  });

  randomFilter.addEventListener('click', () => {
    highlightFilter('filter-random');
    debounce(showRandomMiniatures)();
  });


  discussedFilter.addEventListener('click', () => {
    highlightFilter('filter-discussed');
    debounce(showDiscussedMiniatures)();
  });
}

export { enableFilters };

// debounce(  () => renderSimilarList(wizards),  RERENDER_DELAY, );

