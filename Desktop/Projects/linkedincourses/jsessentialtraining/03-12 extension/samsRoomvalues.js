const samsRoom = {
    name: 'Sams room',
    size: '30 square feet',
    location: '2nd floor',
    desk = {
        color: 'black',
        size: {
            width: 32,
            height: 89,
            length: 33
        },
        doorOpen: true,
        toggleDoor: function(doorState) {
            this.doorOpen = doorState;
        },
    computerMonitor = {
    name: 'Sams computer monitor',
    color: 'black',
    brand: 'ViewSonic',
    monitorDimensions: {
        height: 42,
        width: 32,
    },
    changeDimensions: function(currentHeight, currentWidth) {
        this.monitorDimensions.height = currentHeight;
        this.monitorDimensions.width = currentWidth;
    },
    monitorOn: true,
    monitorStatus: function (curStatus) {
        this.monitorStatus = curStatus;
    },
    laundryHamper = {
    color: 'blue',
    contents: 'dirty clothes'
    },
    fan = {
    color: 'black',
    size: 'small',
    fanOff: false,
    toggleFan: function(fanStatus) {
        this.fanOff= fanStatus;
    },
    waterbottle = {
    color: 'blue',
    volume: '24 ounces',
    name: 'contigo',
    openLid: false,
    toggleLid: function(lidStatus) {
        this.lidOpen= lidStatus;
       }
    },
    newDress = {
    color: 'purple',
    size: 'small',
    style: 'summer-dress',
    newDressSold: false,
    toggleNewDress: function(newDressStatus) {
        this.newDressSold= newDressStatus;
       }
    },