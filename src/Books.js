import React from 'react';

import Book from './Book';

function Books(props) {
  return (
    <div className="cards">
      {props.data.map((book) => (
        <Book
          {...book}
          key={book.title}
          deleteBook={props.deleteBook}
          toggleRead={props.toggleRead}
        />
      ))}
    </div>
  );
}

export default Books;
