const events  = require('events')
const eventEmitter = new events()

const eventHandler = () => {
    console.log('we triggered this event handler action');
}

eventEmitter.on('triggerAction',eventHandler);

eventEmitter.emit('triggerAction');
eventEmitter.emit('triggerAction');
eventEmitter.emit('triggerAction');
eventEmitter.emit('triggerAction');
eventEmitter.emit('triggerAction');