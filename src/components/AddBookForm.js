import React from "react";
import PropTypes from "prop-types";

class AddBookForm extends React.Component {
  titleRef = React.createRef();
  authorRef = React.createRef();
  statusRef = React.createRef();

  handleAddSubmit = e => {
    e.preventDefault();
    const book = {
      title: this.titleRef.current.value,
      author: this.authorRef.current.value,
      status: this.statusRef.current.value
    };
    this.props.addBook(book);
    e.target.reset();
  };

  render() {
    return (
      <form className="book-form" onSubmit={this.handleAddSubmit}>
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
          >
            <option value="new">New</option>
            <option value="inProgress">In progress</option>
            <option value="finished">Finished</option>
          </select>
        </div>
        <button type="submit" className="book-form__submit">
          Add Book &rarr;
        </button>
      </form>
    );
  }
}

AddBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
  formType: PropTypes.string.isRequired
};

export default AddBookForm;
