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
  if (verifiedText.length <= maxLength) {
    return true;
  }
  return false;
};

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
let keksogramObjects = [];

for (let i = 0; i <= 24; i++) {
  let pictureAttributes = {};  // Один обьект с описанием фотографии
  let id = i + 1;

  pictureAttributes.id = id;
  pictureAttributes.url = "photos/" + id + ".jpg";
  pictureAttributes.description = "Это фото демонстрирует меня на моём " + id + " отпуске";
  pictureAttributes.likes = getRandomPositiveInteger(15, 200);
  pictureAttributes.comments = [];

  let maxCommentIdNumber = 1000;
  let commentIdList = [];

  for (let j = 0; j <= (maxCommentIdNumber - 1); j++) {
    commentIdList[j] = j + 1;
  }

  for (let i = 1; i <= 10; i++) {
    let commentAttributes = {};
    let RandomCommentIdListElement = getRandomPositiveInteger(0, commentIdList.length - 1);
    commentAttributes.id = commentIdList[RandomCommentIdListElement];
    commentIdList.splice(RandomCommentIdListElement, 1);

    commentAttributes.avatar = "img/avatar-" + getRandomPositiveInteger(1, 6) + ".svg";

    let sentenceCount = getRandomPositiveInteger(1, 2);
    let textComments = ["Всё отлично!", "В целом всё неплохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.", "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.", "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.", "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"];
    if (sentenceCount == 1) {
      commentAttributes.message = textComments[getRandomPositiveInteger(0, textComments.length - 1)];
    } else {
      let randomCommentText = getRandomPositiveInteger(1, textComments.length);
      commentAttributes.message = textComments[randomCommentText];
      textComments.splice(randomCommentText, 1);
      commentAttributes.message += " " + textComments[getRandomPositiveInteger(0, textComments.length - 1)];
    }

    let namesList = ["Сергей", "Тарас", "Дженнифер", "Скарлетт", "Шарик", "Кекс"];

    commentAttributes.name = namesList[getRandomPositiveInteger(1, 6) - 1];

    pictureAttributes.comments[i] = {
      id: commentAttributes.id,
      avatar: commentAttributes.avatar,
      message: commentAttributes.message,
      name: commentAttributes.name
    }
  }

  keksogramObjects[i] = pictureAttributes;
}

console.log (keksogramObjects);
