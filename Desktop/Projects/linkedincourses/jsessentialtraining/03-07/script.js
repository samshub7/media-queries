
const waterbottle = {
    color: 'blue',
     volume: '24 ounces',
    name: 'contigo',
    openLid: false,
    toggleLid: function(lidStatus) {
        this.lidOpen= lidStatus;
    }
};

const laundryHamper = {
    color: 'blue',
    contents: 'dirty clothes'
}

const fan = {
    color: 'black',
    size: 'small',
    fanOff: false,
    toggleFan: function(fanStatus) {
        this.fanOff= fanStatus;
    }
};

const newDress = {
    color: 'purple',
    size: 'small',
    style: 'summer-dress',
    newDressSold: false,
    toggleNewDress: function(newDressStatus) {
        this.newDressSold= newDressStatus;
    }
};

const hotTub = {
    temperature: '130 Farenheit',
    size: 'large',
    lidOn: false,
    toggleLid: function(lidStatus) {
        this.lidOn=lidStatus;
    },
    motorsRunning: true,
    toggleMotors: function(motorStatus) {
        this.motorsRunning = motorStatus;
    },
    lightsOn: true,
    toggleLights: function(lightStatus) {
        this.lightsOn= lightStatus;
    }
};


console.log('This', waterbottle.color, waterbottle.name, 'is the best!' );
console.log('The laundry hamper has', laundryHamper.contents, '!');
console.log(newDress.newDressSold);
console.log('The new dress is', newDress.toggleNewDress(true));
console.log(fan.fanOff);
console.log('This fan is now', fan.toggleFan('true'));
console.log('This dress is a', newDress.style);
console.log('This dress is', newDress.color, newDress.style,'and its all mine.');
console.log('This', hotTub.size, 'hot tub is the best.');
console.log(hotTub.motorsRunning);
console.log('This hot tub has its', hotTub.toggleMotors(true));