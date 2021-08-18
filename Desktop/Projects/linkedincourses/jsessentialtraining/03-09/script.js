/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
};

const computerMonitor = {
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
    }
};



console.log('Left strap length before:', backpack.strapLength.left);
backpack.newStrapLength(10,15);
console.log('Left strap length after:', backpack.strapLength.left);

console.log('The monitor dimensions before:', computerMonitor.monitorDimensions);
computerMonitor.changeDimensions(28,22);
console.log('The monitor dimensions after:', computerMonitor.monitorDimensions);
console.log(computerMonitor.name, 'is a', computerMonitor.color, computerMonitor.brand);
console.log('Its new dimensions are:', computerMonitor.monitorDimensions);
