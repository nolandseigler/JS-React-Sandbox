class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    set isCheckedOut(isCheckedOut) {
        this._isCheckedOut = isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    toggleCheckOutStatus() {
        if(this.isCheckedOut === false) {
            this._isCheckedOut = true;
        } else {
            this._isCheckedOut = false;
        }
    }
    getAverageRating() {
        return this.ratings.reduce((currentSum, rating) => currentSum + rating, 0) / this.ratings.length;
    }
    addRating(newRating) {
        this._ratings.push(newRating);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}



