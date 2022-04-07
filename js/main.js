import { dataGeneration } from './data.js';
import { miniaturesDisplay } from './miniatures.js';
import { dataformToggle } from './dataform.js';
import { formValidation } from './validation.js';
import { scalePictures } from './scaling.js';
import { visualEffects } from './effects.js';

miniaturesDisplay(dataGeneration ());
dataformToggle();
formValidation();
scalePictures();
visualEffects();

