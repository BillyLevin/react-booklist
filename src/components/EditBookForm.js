import React from "react";
import PropTypes from "prop-types";

class EditBookForm extends React.Component {
  state = {
    updatedBook: this.props.currentBook
  };

  titleRef = React.createRef();
  authorRef = React.createRef();
  statusRef = React.createRef();

  handleChange = e => {
    const updatedBook = {
      ...this.state.updatedBook,
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.setState({ updatedBook });
  };

  handleEditSubmit = e => {
    e.preventDefault();
    this.props.setCurrentBook(this.state.updatedBook);
    this.props.updateBook(this.props.currentKey, this.state.updatedBook);
    this.props.switchToAdd();
  };

  render() {
    return (
      <form className="book-form" onSubmit={this.handleEditSubmit}>
        <div className="book-form__field">
          <label htmlFor="title" className="book-form__label">
            Book Title
          </label>
          <input
            type="text"
            className="book-form__input"
            placeholder="Book title..."
            name="title"
            required
            ref={this.titleRef}
            value={this.state.updatedBook.title}
            onChange={this.handleChange}
          />
        </div>
        <div className="book-form__field">
          <label htmlFor="author" className="book-form__label">
            Author
          </label>
          <input
            type="text"
            className="book-form__input"
            placeholder="Author..."
            name="author"
            required
            ref={this.authorRef}
            value={this.state.updatedBook.author}
            onChange={this.handleChange}
          />
        </div>
        <div className="book-form__field">
          <label htmlFor="status" className="book-form__label">
            Status
          </label>
          <select
            name="status"
            className="book-form__input"
            ref={this.statusRef}
            value={this.state.updatedBook.status}
            onChange={this.handleChange}
          >
            <option value="new">New</option>
            <option value="inProgress">In progress</option>
            <option value="finished">Finished</option>
          </select>
        </div>
        <button type="submit" className="book-form__submit">
          Edit Book &rarr;
        </button>
      </form>
    );
  }
}

EditBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
  formType: PropTypes.string.isRequired,
  switchToAdd: PropTypes.func.isRequired,
  currentBook: PropTypes.object.isRequired,
  currentKey: PropTypes.string
};

export default EditBookForm;
