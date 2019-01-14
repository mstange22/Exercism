export const hey = (message) => {
  message = message.trim();
  if (message === '') return 'Fine. Be that way!';
  if (/.*[a-z].*/i.test(message) && message.toUpperCase() === message) {
    if (message.endsWith('?')) return 'Calm down, I know what I\'m doing!';
    else return 'Whoa, chill out!';
  }
  if (message.endsWith('?')) return 'Sure.';
  return 'Whatever.';
};