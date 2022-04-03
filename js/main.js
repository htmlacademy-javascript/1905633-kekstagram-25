import { dataGeneration } from './data.js';
import { miniaturesDisplay } from './miniatures.js';
import { dataformToggle } from './dataform.js';
import { formValidation } from './hashtags-and-comments.js';

miniaturesDisplay(dataGeneration ());
dataformToggle();
formValidation();

