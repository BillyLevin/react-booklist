import React from "react";
import PropTypes from "prop-types";

class BookListItem extends React.Component {
  editBook = () => {
    this.props.setCurrentBook(this.props.book, this.props.index);
    this.props.switchToEdit();
  };

  render() {
    const { title, author, status } = this.props.book;
    return (
      <li className="book-list__item">
        <span className="book-list__detail">
          <span className="book-list__heading">Title: </span>
          {title}
        </span>
        <span className="book-list__detail">
          <span className="book-list__heading">Author: </span>
          {author}
        </span>
        <span className="book-list__detail">
          <span className="book-list__heading">Status: </span>
          {status === "new" && "New"}
          {status === "inProgress" && "In progress"}
          {status === "finished" && "Finished"}
        </span>
        <button onClick={this.editBook} className="book-list__edit">
          Edit
        </button>
      </li>
    );
  }
}

BookListItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }),
  index: PropTypes.string.isRequired,
  switchToEdit: PropTypes.func.isRequired,
  setCurrentBook: PropTypes.func.isRequired
};

export default BookListItem;
