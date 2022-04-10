import { miniaturesDisplay } from './miniatures.js';
import { dataformToggle } from './dataform.js';
import { formValidation } from './validation.js';
import { scalePictures } from './scaling.js';
import { visualEffects } from './effects.js';
import { showNotification } from './notification.js';

fetch(
  'https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    miniaturesDisplay(data);
  }
  )
  .catch(() => {
    showNotification('Не удалось загрузить данные, попробуйте перезагрузить страницу', 'red');
  });

dataformToggle();
formValidation();
scalePictures();
visualEffects();
