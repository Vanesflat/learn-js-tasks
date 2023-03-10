const showNotification = (options) => {
  const { top, right, html, className } = options;

  const notificationElement = document.createElement('div');
  notificationElement.classList.add('notification');

  notificationElement.style.top = top ? `${top}px` : 0;
  notificationElement.style.right = right ? `${right}px` : 0;
  notificationElement.textContent = html;

  if (className) {
    notificationElement.classList.add(className);
  }

  document.body.append(notificationElement);

  setTimeout(() => notificationElement.remove(), 1500);
};
