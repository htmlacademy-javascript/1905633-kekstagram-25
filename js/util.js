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

function stringLimit(verifiedText, maxLength) {
  return (verifiedText.length <= maxLength);
}

// Функции от Кекса

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.length <= length;
}

export {intFromRange, stringLimit, getRandomPositiveInteger, checkStringLength};
