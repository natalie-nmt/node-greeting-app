const greetings = require('./greeting.js');
const testmodule = require('./test-module.js');

greetings.greetingEnglish();
greetings.greetingJapanese();
greetings.greetingIcelandic();
greetings.greetingSpanish();

testmodule.read('test-module.js');
testmodule.append('test-module.js', 'Here is some text.');