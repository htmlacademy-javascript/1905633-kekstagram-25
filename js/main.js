//intFromRange() - Функция выбора случайного целого числа из диапазона

const intFromRange = function (minRange, maxRange) {
  if (maxRange >= minRange) {
    return Math.round(Math.random() * (maxRange - minRange) + minRange);
  } else {
    const storage = maxRange;
    maxRange = minRange;
    minRange = storage;
    return Math.round(Math.random() * (maxRange - minRange) + minRange);
  }
};

//stringLimit - функция проверки максимальной длинны строки

const stringLimit = function (verifiedText, maxLength) {
  if (verifiedText.length <= maxLength ) {
    return true;
  }
  return false;
};
