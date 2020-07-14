import React from 'react';

class Book extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="title">{this.props.title}</div>
        <div className="author">{this.props.author}</div>
        <div className="pages">{this.props.pages}</div>
        <div className="read">{this.props.read.toString()}</div>
        <button
          className="del-btn"
          onClick={() => this.props.deleteBook(this.props.title)}
        >
          delete
        </button>
        <button onClick={() => this.props.toggleRead(this.props.title)}>
          toggle Read
        </button>
      </div>
    );
  }
}

export default Book;
