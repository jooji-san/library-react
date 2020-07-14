import React from 'react';

class AddBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      pages: '',
      read: 'false',
    };
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  reset() {
    this.setState({
      title: '',
      author: '',
      pages: '',
      read: 'false',
    });
  }

  render() {
    return (
      <form
        className={`form ${this.props.hidden && 'hidden'}`}
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addBook(this.state);
          this.reset();
        }}
        onReset={(e) => {
          this.reset();
        }}
      >
        <div className="inputs">
          <div className="text">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
              tabIndex="1"
              required
            />
          </div>

          <div className="text">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              name="author"
              id="author"
              value={this.state.author}
              onChange={this.handleChange}
              tabIndex="2"
              required
            />
          </div>

          <div className="text">
            <label htmlFor="pages">Page number:</label>
            <input
              type="number"
              name="pages"
              id="pages"
              value={this.state.pages}
              onChange={this.handleChange}
              tabIndex="3"
              required
            />
          </div>

          <div className="radio">
            <p>Have you Read the book?</p>

            <div>
              <label htmlFor="radio-choice-1">Yes</label>
              <input
                type="radio"
                name="read"
                id="radio-choice-1"
                tabIndex="4"
                value="true"
                checked={this.state.read === 'true'}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="radio-choice-2">No</label>
              <input
                type="radio"
                name="read"
                id="radio-choice-2"
                tabIndex="5"
                value="false"
                checked={this.state.read === 'false'}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="submit-reset">
          <input type="submit" value="submit" tabIndex="6"></input>
          <input type="reset" tabIndex="7"></input>
        </div>
      </form>
    );
  }
}

export default AddBookForm;
