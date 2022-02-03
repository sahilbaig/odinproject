function Book(name,author,pages)
{
    this.name=name,
    this.author=author,
    this.pages=pages

    this.info =function()
    {
        const bookDetails={
            "name":name,
            "author":author,
            "pages":pages
        }
        
        return bookDetails;
    }
}

const hobbit= new Book("hobbit","somebody",111);

console.log(hobbit.info())