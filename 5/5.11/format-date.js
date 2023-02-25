const formatDate = (date) => {
  const now = new Date();
  const diff = now - date;
  const sec = diff / 1000;
  const min = sec / 60;

  if (sec < 1) {
    return 'Прямо сейчас';
  }

  if (sec < 60) {
    return `${sec} секунд назад`;
  }

  if (min < 60) {
    return `${min} минут назад`;
  }

  const convertOutput = (value) => value > 10 ? value : `0${value}`;
  const convertOutputYear = (year) => convertOutput(year.toString().slice(2));

  return `${convertOutput(date.getDate())}.${convertOutput(date.getMonth() + 1)}.${convertOutputYear(date.getFullYear())}, ${convertOutput(date.getHours())}:${convertOutput(date.getMinutes())}`;

};

alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));
