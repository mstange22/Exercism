export const hey = (message) => {
  const shouting = /^[A-Z\d, ]*[A-Z]+[A-Z\d, %\^\*@#\$(!\?]*$/;
  const question = /^[\S ]+\?+\s*$/;
  const nothing = /^[\s]*$/;
  if (nothing.test(message)) return 'Fine. Be that way!';
  if (shouting.test(message) && question.test(message)) return 'Calm down, I know what I\'m doing!';
  if (shouting.test(message)) return 'Whoa, chill out!';
  if (question.test(message)) return 'Sure.';
  return 'Whatever.';
};