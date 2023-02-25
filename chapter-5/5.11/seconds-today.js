const getSecondsToday = () => {
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Math.round((now - today) / 1000);
}

alert(getSecondsToday());