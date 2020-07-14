import React from 'react';

import AddBook from './AddBook';
import Books from './Books';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: 'Hobbit',
          author: 'J. R. R. Tolkien',
          pages: 288,
          read: true,
        },
        {
          title: 'The Temple of the golden pavillion',
          author: 'Yukio Mishima',
          pages: 270,
          read: false,
        },
        {
          title: 'fadf',
          author: 'asdf',
          pages: 'asdf',
          read: 'false',
        },
      ],
    };
    this.addBook = this.addBook.bind(this);
    this.findBookIndex = this.findBookIndex.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.toggleRead = this.toggleRead.bind(this);
  }

  addBook(book) {
    this.setState((prevState) => {
      return { books: [...prevState.books, book] };
    });
  }

  findBookIndex(title) {
    return this.state.books.findIndex((book) => book.title === title);
  }

  deleteBook(title) {
    const index = this.findBookIndex(title);
    this.setState((prevState) => {
      prevState.books.splice(index, 1);
      return { books: prevState.books };
    });
  }

  toggleRead(title) {
    const index = this.findBookIndex(title);
    this.setState((prevState) => {
      prevState.books[index].read = !prevState.books[index].read;
      return { books: prevState.books };
    });
  }

  componentDidMount() {
    if (localStorage.getItem('books')) {
      this.setState(JSON.parse(localStorage.getItem('books')));
    } else {
      localStorage.setItem('books', JSON.stringify(this.state));
    }
  }

  componentDidUpdate() {
    localStorage.setItem('books', JSON.stringify(this.state));
  }

  render() {
    return (
      <div>
        <AddBook addBook={this.addBook} />
        <Books
          data={this.state.books}
          deleteBook={this.deleteBook}
          toggleRead={this.toggleRead}
        />
      </div>
    );
  }
}

export default App;
