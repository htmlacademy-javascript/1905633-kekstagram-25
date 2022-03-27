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

// Домашнее задание №4 - создание 25 объектов
const keksogramObjects = [];

for (let i = 0; i <= 24; i++) {
  const pictureAttributes = {};  // Один обьект с описанием фотографии
  const id = i + 1;

  pictureAttributes.id = id;
  pictureAttributes.url = `photos/${  id  }.jpg`;
  pictureAttributes.description = `Это фото демонстрирует меня на моём ${  id  } отпуске`;
  pictureAttributes.likes = getRandomPositiveInteger(15, 200);
  pictureAttributes.comments = [];

  const maxCommentIdNumber = 1000;
  const commentIdList = [];

  for (let j = 0; j <= (maxCommentIdNumber - 1); j++) {
    commentIdList[j] = j + 1;
  }

  for (let j = 1; j <= 10; j++) {
    const commentAttributes = {};
    const RandomCommentIdListElement = getRandomPositiveInteger(0, commentIdList.length - 1);
    commentAttributes.id = commentIdList[RandomCommentIdListElement];
    commentIdList.splice(RandomCommentIdListElement, 1);

    commentAttributes.avatar = `img/avatar-${  getRandomPositiveInteger(1, 6)  }.svg`;

    const sentenceCount = getRandomPositiveInteger(1, 2);
    const textComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
    if (sentenceCount === 1) {
      commentAttributes.message = textComments[getRandomPositiveInteger(0, textComments.length - 1)];
    } else {
      const randomCommentText = getRandomPositiveInteger(1, textComments.length);
      commentAttributes.message = textComments[randomCommentText];
      textComments.splice(randomCommentText, 1);
      commentAttributes.message += ` ${  textComments[getRandomPositiveInteger(0, textComments.length - 1)]}`;
    }

    const namesList = ['Сергей', 'Тарас', 'Дженнифер', 'Скарлетт', 'Шарик', 'Кекс'];

    commentAttributes.name = namesList[getRandomPositiveInteger(1, 6) - 1];

    pictureAttributes.comments[j] = {
      id: commentAttributes.id,
      avatar: commentAttributes.avatar,
      message: commentAttributes.message,
      name: commentAttributes.name
    };
  }

  keksogramObjects[i] = pictureAttributes;
}

