let date = new Date(2015, 0, 2);

const getDateAgo = (date, days) => {
  date.setDate(date.getDate() - days);

  return date.getDate();
};

alert(getDateAgo(date, 10));