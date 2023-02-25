const date = new Date(2012, 0, 8);

const getLocalDay = (date) => {
  if (date.getDay() === 0) {
    return 7;
  }

  return date.getDay();
}

alert(getLocalDay(date));