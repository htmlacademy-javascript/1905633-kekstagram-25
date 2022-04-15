import { displayMiniatures } from './miniatures.js';
import { toggleDataform } from './dataform.js';
import { validateForm } from './validation.js';
import { scalePictures } from './scaling.js';
import { applyEffects } from './effects.js';
import { showNotification } from './notification.js';


fetch(
  'https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    displayMiniatures(data);
  })
  .catch(() => {
    showNotification('Не удалось загрузить данные, попробуйте перезагрузить страницу', 'red');
  });

toggleDataform();
validateForm();
scalePictures();
applyEffects();
