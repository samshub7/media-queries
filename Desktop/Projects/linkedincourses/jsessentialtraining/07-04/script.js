/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let desk = ['monitor', 'laptop', 'keyboard', 'books', 'file cabinet'];
console.log('Original array:', desk);

desk.pop();
console.log('Array w/ last item popped off:', desk);

desk.unshift('file cabinet');
console.log('Array w/ unshifted item:', desk);

desk.sort();
console.log('Alphabetical order:', desk);


desk.forEach(function(item) {
item =`<li>${item}</li>`;
    console.log(item);
});
console.log('Listed items array:', desk);

 let longItems = desk.find(function(item){
     if(item.length <= 5) {
         return item
     }
 });
 
console.log('Found item:', longItems);

let remove = 'books';
desk.splice(desk.indexOf(remove), 1);
console.log(`Array with ${remove} removed:`, desk);
