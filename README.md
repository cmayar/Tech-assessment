# Front End Recruitment Test

### This project will be divided in three parts:

`Data`

- Getting information (data) from books.json which is inside "public" folder. Path: /app/public/books.json.
- List the first 20 books in your main page. Including the picture and title.

`Design the app`

- In the root of this folder, there's a model for you to follow to design the App. Try to make it look as much similar as you can. Use you imagination to add more features, if you have time.

`Bonus implementation:`

- Add a favorite button to each of the books. When you click to favorite this book, it will be created a favorite list.

`Note: `

- Please update the questions from the Question section on this file with your answers.

# Requirements

- Do no spend more than 2-3 hours on a submission.

- We also take into consideration the Answers to technical questions, code organization, identation and comments. If you have anything to add or want to explain a feature, you can leave a note on the comments section below

---

# Questions

1. How long did you spend on the coding?
    I've spent 3h.

2. What would you add to your solution if you had more time?
   I would have to refactor the fetch to create a unique id for each book, so that I can correctly use the remove from favourites function.
   On the other hand, when adding to favorites, I should add an "if statment", so that only books that are not in the favorites list can be added.

3. Share a code snippet that you are proud of and explain what it does 
    I've implemented this function to be able to see the characteristics of the book when the user clicks on read more. The card is displayed at the top of the page.

<!-- const handleReadMore = (book) => {
    setSelectedBook(book); //set the selected book
    console.log("Book selected:", book);
}; -->
<!--  {selectedBook && (
            <div className="selected-book-card">
            <img className="book-cover-detail" src={selectedBook.imageLink} alt="book-img"/>
            <div className="selected-book-info">
            <h2>{selectedBook.title}</h2>
            <h3>{selectedBook.author}</h3>
            <p>{selectedBook.pages} pages</p>
            <p>{selectedBook.year}</p>
            <p>{selectedBook.description}</p>
            <p>{selectedBook.language}</p>
            <a href={selectedBook.link}
            target="_blank">
            More info </a>
            </div>
            </div>
       )} -->

4. How would you track down a performance issue in production? Have you ever had to do this?
To handle a problem, I would first look to see what problem has occurred in the terminal and using DevTools. Once located, I would add console.logs to the part of the code to debug the problem. Then I would do a performance test and again use the devTools and terminal to debug.

I have used these tools before to solve problems in other projects.

---

# Comments


---

# Submission

After completing the challenge, commit it to Github.
