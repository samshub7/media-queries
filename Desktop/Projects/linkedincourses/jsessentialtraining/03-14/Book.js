class Book {
   constructor (
        title,
        author,
        type,
        currentPrice,
        dateAcquired,
        bookRead,
        bookFinished,
        ratings,
    )  {
        this.title = title;
        this.author = author;
        this.type = type;
        this.dateAcquired = dateAcquired;
        this.currentPrice = currentPrice;
        this.ratings = ratings;
        this.bookRead = bookRead;
        this.bookFinished = bookFinished;
    } 
    toggleBookRead(currentPage) {
        this.bookRead = currentPage;
    }
    toggleBookFinished(currentPage) {
        this.bookFinished = currentPage;
    }
    bookAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired;
        let daysSinceAcquired = Math.floor(elapsed / 1000 * 3600 * 24);
        return daysSinceAcquired;
    }
}

export default Book;