const showNotification = (text, color) => {
  const mainSection = document.querySelector('main');
  const notification = document.createElement ('p');
  notification.textContent = text;
  notification.style.color = color;
  notification.classList.add ('notification-message');
  mainSection.prepend(notification);
};

export { showNotification };
