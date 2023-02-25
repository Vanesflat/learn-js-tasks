const date = new Date(2012, 0, 3);
const dayNames = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

const getWeekDay = (date) => dayNames[date.getDay()];

alert(getWeekDay(date));