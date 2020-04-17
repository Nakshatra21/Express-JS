const books = [];

module.exports = class Book{
    constructor(t){
        this.title = t;
    }

    save(){
        books.push(this);
    }

    static fetchAll(){
        return books;
    }

}