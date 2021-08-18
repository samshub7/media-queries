class room {
    constructor (
        name,
        size,
        location,
        doorOpen,
    ) {
this.name = name;
this.size =size;
this.location = location;
this.doorOpen = doorOpen;
    }
toggleDoor(doorState) {
    this.doorOpen = doorState;
        }
}

class computerMonitor {
    constructor (
        name,
        color,
        brand,
        currentHeight,
        currentWidth,
        monitorOn
    ) {
this.name = name;
this.color = color;
this.brand = brand;
this.monitorDimensions = {
    currentHeight,
    currentWidth,
};
this.monitorOn = monitorOn;
    }
    changeDimensions(currentHeight, currentWidth) {
        this.monitorDimensions.height = currentHeight;
        this.monitorDimensions.width = currentWidth;
    }
    monitorStatus(curStatus) {
        this.monitorStatus = curStatus;
    }
}
class desk {
    constructor (
        color,
        width,
        height,
        length,
        doorOpen,
        doorState,
    )  {
    this.color = color;
    this.size = {
        width,
        height,
        length,
    };
    this.doorOpen = doorOpen;
    }
    toggleDoor(doorState) {
            this.doorOpen = doorState;
        }
    }


class laundryHamper {
    constructor (
    color,
    contents
    ) {
    this.color = color;
    this.contents= contents;
    }
}

class fan {
    constructor (
        color,
        size,
        fanOff
    ) {
        this.color = color;
        this.size = size;
        this.fanOff = fanOff;
    }
    toggleFan(fanStatus) {
        this.fanOff= fanStatus;
        }
    }

    class waterbottle {
        constructor (
            color,
            volume,
            name,
            openLid
        ) {
            this.color = color;
            this.volume = volume;
            this.name = name;
            this.openLid = openLid;
        }
        toggleLid(lidStatus) {
        this.lidOpen = lidStatus;
       }
    }

    class newDress {
        constructor (
            color,
            size,
            style,
            newDressSold
        ) {
            this.color = color;
            this.size = size;
            this.style = style;
            this.newDressSold = newDressSold;
        }
        toggleNewDress(newDressStatus) {
        this.newDressSold= newDressStatus;
    }
}

export default room;
export default computerMonitor;
export default desk;
export default laundryHamper;
export default fan;
export default waterbottle;
export default newDress;