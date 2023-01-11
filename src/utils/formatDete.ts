export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][newDate.getMonth()];
  const year = newDate.getFullYear();
  let dayWithSuffix = '';

  switch (day % 10) {
    case 1:
      dayWithSuffix = `${day}st`;
      break;
    case 2:
      dayWithSuffix = `${day}nd`;
      break;
    case 3:
      dayWithSuffix = `${day}rd`;
      break;
    default:
      dayWithSuffix = `${day}th`;
  }

  const formatedDate = `${month} ${dayWithSuffix}, ${year}`;

  return formatedDate;
};
