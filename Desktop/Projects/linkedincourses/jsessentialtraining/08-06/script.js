/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const computerMonitor = {
    name: 'Sams computer monitor',
    color: 'black',
    brand: 'ViewSonic',
    dimensions: {
        height: 42,
        width: 32,
    },
};

function addMonitor (currentMonitor) {
    const newListItem = document.querySelector('li');
    newListItem.innerHTML = `
    <li>${currentMonitor.color = 'purple'}</li>
    `;
return newListItem;
};
const li = document.querySelector('li');
li.append(addMonitor(computerMonitor));


const addMonitor = function(currentMonitor) {
 const newArticle = document.createElement('article');
 newArticle.innerHTML = `
 <h1>${currentMonitor.name}</h1>
 <ul>
 <li>${currentMonitor.color}</li>
 <li>${currentMonitor.brand}</li>
 <li>${currentMonitor.dimensions.height} ${currentMonitor.dimensions.width}</li>
 </ul>
 `;
 return newArticle;
};

const main = document.querySelector('main');
main.append(addMonitor(computerMonitor));

const computerMonitor = {
    name: 'Sams computer monitor',
    color: 'black',
    brand: 'ViewSonic',
    dimensions: {
        height: 42,
        width: 32,
    },
    monitorOn: true,
    monitorStatus: function(curStatus) {
        this.monitorStatus = curStatus;
        console.log("this monitor status in the method:", this.monitorOn(true));
    this.monitorOn = monitorOn;
    console.log("this.volume after update:", this.monitorOn(curStatus));
     ((curStatus) => {
    console.log("this monitor in nested function:", this.monitorOn(curStatus));
     })();
},