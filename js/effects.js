const applyEffects = () => {
  const picture = document.querySelector('.img-upload__picture');
  const radioList = document.querySelector('.effects__list');
  const radioItems = radioList.querySelectorAll('.effects__item');
  const sliderElement = document.querySelector('.effect-level__slider');
  const sliderValue = document.querySelector('.effect-level__value');
  const sliderBackground = document.querySelector('.img-upload__effect-level');

  const none = {
    filter: '',
    min: 0,
    max: 1,
    step: 0.1
  };
  const chrome = {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1
  };
  const sepia = {
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1
  };
  const marvin = {
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1
  };
  const phobos = {
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1
  };
  const heat = {
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1
  };
  const effectSliderSettings = [none, chrome, sepia, marvin, phobos, heat];

  sliderElement.classList.add('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
  });

  const setSliderSettings = (effect) => {
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: effect.min,
        max: effect.max,
      },
      step: effect.step,
      start: effect.max,
    });
  };

  for (let i = 0; i < radioItems.length; i++) {
    const icon = radioItems[i].querySelector('span');
    const iconClassList = icon.className.split(' ');
    const newClass = iconClassList[2];
    icon.addEventListener('click', () => {
      picture.className = '';
      picture.classList.add('img-upload__picture');
      picture.classList.add(newClass);
      if (i > 0) {
        sliderBackground.classList.remove('hidden');
        sliderElement.classList.remove('hidden');
        setSliderSettings(effectSliderSettings[i]);
      } else {
        sliderBackground.classList.add('hidden');
        sliderElement.classList.add('hidden');
        picture.style.filter = 'none';
      }
      sliderElement.noUiSlider.off('update');
      sliderElement.noUiSlider.on('update', () => {
        sliderValue.value = sliderElement.noUiSlider.get();
        if (effectSliderSettings[i].max === 1) {
          picture.style.filter = `${effectSliderSettings[i].filter}(${sliderElement.noUiSlider.get()})`;
        } else if (effectSliderSettings[i].max === 100) {
          picture.style.filter = `${effectSliderSettings[i].filter}(${sliderElement.noUiSlider.get()}%)`;
        } else if (effectSliderSettings[i].max === 3) {
          picture.style.filter = `${effectSliderSettings[i].filter}(${sliderElement.noUiSlider.get()}px)`;
        }
      });
    });
  }
};

export { applyEffects };
