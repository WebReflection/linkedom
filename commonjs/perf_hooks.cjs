/* c8 ignore start */
try {
  const {performance} = require('perf_hooks');
  exports.performance = performance;
}
catch (fallback) {
  exports.performance = {now() { return +new Date; }};
}
/* c8 ignore stop */
