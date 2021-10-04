export default {
for: Class => {
    console.log('%c' + Class, 'font-weight:bold');
    return (expression, expected, message = '') => {
      if (!Object.is(expression, expected)) {
        if (message)
          console.error('', message);
        console.error('', 'Expected:', String(expected));
        console.error('', 'Got instead:', String(expression));
        console.error('');
        process.exit(1);
      }
    };
  }
};
