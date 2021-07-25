const light = require('./light');

const start = light();

start.listen(4000);
// start.once('test',function(){
//     console.log('a test was called');
// });

// start.emit('test')