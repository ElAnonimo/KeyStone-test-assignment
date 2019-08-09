// avoid using moment for now because of it's size, and we don't need a lot of functionality

const intl = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
});

export function formatString(dateString) {
  return intl.format((new Date(dateString)));
}

export function formatDate(date) {
  return intl.format(date);
}

export function getTimestampFromDateString(dateString) {
  return (new Date(dateString)).getTime()
}
