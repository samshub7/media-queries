import room from './samsRoom.js';
import computerMonitor from './samsRoom.js';
import newDress from './samsRoom.js';


const samsRoom = new room (
    'Sams room',
    '30 square feet',
    '2nd floor',
    true,
);

const samsMonitor = new computerMonitor (
    'Sams computer monitor',
    'black',
   'ViewSonic',
     42,
     32,
     true,
);

const samsDress = new newDress (
    'purple',
    'small',
    'summer-dress',
    false,
);

