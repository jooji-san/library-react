import React from 'react';

import AddBookForm from './AddBookForm';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return { hidden: !prevState.hidden };
    });
  }

  render() {
    return (
      <div>
        <AddBookForm addBook={this.props.addBook} hidden={this.state.hidden} />
        <button className="add-btn" onClick={this.handleClick}>
          Add a new book
        </button>
      </div>
    );
  }
}

export default AddBook;
