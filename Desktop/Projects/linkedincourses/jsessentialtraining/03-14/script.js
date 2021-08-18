import Book from './Book.js';

const fantasyBook = new Book (
    'Harry Potter',
    'J.K. Rowling',
    'audioBook',
    '$12.00',
    'September, 18, 2020, 15:00:00 PST',
    true,
    false,
    '5 stars'
);

const fictionBook = new Book (
    'Adventures with Sara',
    'Sam Smith',
    'paperback',
    '$8.00',
    'July, 16, 2019, 13:01:09 PST',
    true,
    true,
    '3.5 stars'
);

const teenBook = new Book (
    'Twilight',
    '',
    'hardcover',
    '$12.76',
    'August, 8, 2009, 14:00:08 PST',
    false,
    false,
    '3 stars'
);

console.log('This book is', Fantasy.title, 'it was written by', Fantasy.author);
console.log('This book was bought on', Fantasy.dateAcquired);


