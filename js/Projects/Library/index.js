
class Library {
    constructor() {
      this.list=[];
    }

    add_book(book) {
        book.id=(this.list.length)+1
        this.list.push(book)
        this.show_library()
    }

    remove_book(book_id)
    {
        this.list.splice(book_id-1, 1)
        this.show_library()
    }

    MarkAsRead(book_id)
    {
        this.list[book_id-1].status=!this.list[book_id-1].status
        this.show_library()
    }
    show_library()
    {   
        const myNode= document.getElementById("book-list")
        while (myNode.lastElementChild) {
            myNode.removeChild(myNode.lastElementChild);
        }
        for(let i=0;i<this.list.length;i++)
        {
            create_book(this.list[i]);
        }
    }

  }

userLibrary=new Library();



function create_book(book)
{

    const bookCard = document.createElement("div");
    bookCard.className="card";
    const author=document.createElement("h5");
    author.className="card-title";
    author.innerHTML = "Author : "+book["author"];
    bookCard.append(author)

    const title=document.createElement("h5");
    title.className="card-title";
    title.innerHTML = "Title :"+book["name"];
    bookCard.append(title)


    const pages=document.createElement("h5");
    pages.className="card-title";
    pages.innerHTML = "Number of pages : " +book["pages"];
    bookCard.append(pages)

    const status=document.createElement("h5");
    status.className="card-title";
    status.innerHTML = "";
    if (book["status"])
    {
        status.innerHTML="Completed";
    }
    else{
        status.innerHTML="Not Completed";
    }
    bookCard.append(status)

    const removeButton=document.createElement("button");
    removeButton.className="btn btn-danger";
    removeButton.innerHTML="Remove";
    removeButton.addEventListener("click",function(){
        userLibrary.remove_book(book["id"])
    })
    bookCard.append(removeButton)
    
    const read=document.createElement("button");
    read.className="btn btn-danger";
    read.innerHTML="Change status";
    read.addEventListener("click",function(){
        userLibrary.MarkAsRead(book["id"])
    })
    bookCard.append(read)

    document.getElementById("book-list").appendChild(bookCard);
}


function book(name,author,pages,status)
{
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.status=status;
    this.id=-1;
};

var add_button=document.getElementsByName("add-button");
add_button[0].addEventListener("click",function()
{
    let title=document.getElementById("book-title").value;
    let author=document.getElementById("book-author").value;
    let pages=document.getElementById("book-pages").value;
    let status=document.getElementById("book-status").value;
    if (status=="on")
    {
        status=true
    }
    else{
        status=false
    }
    let newBook = new book(title,author, pages , status);
    userLibrary.add_book(newBook)
})


