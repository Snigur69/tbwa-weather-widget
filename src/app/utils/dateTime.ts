export const getFormattedDate = date => {
  const isToday = new Date().toDateString() === date?.toDateString();

  return isToday
    ? 'Today'
    : new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
};
