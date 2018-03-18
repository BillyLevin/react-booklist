import React from "react";
import PropTypes from "prop-types";
import BookListItem from "./BookListItem";

class BookList extends React.Component {
  render() {
    return (
      <div className="books">
        <h3 className="heading-secondary">Browse your books...</h3>
        <ul className="book-list">
          {Object.keys(this.props.bookList).map(key => (
            <BookListItem
              book={this.props.bookList[key]}
              key={key}
              index={key}
              switchToEdit={this.props.switchToEdit}
              setCurrentBook={this.props.setCurrentBook}
            />
          ))}
        </ul>
      </div>
    );
  }
}

BookList.propTypes = {
  bookList: PropTypes.object,
  switchToEdit: PropTypes.func.isRequired,
  setCurrentBook: PropTypes.func.isRequired
};

export default BookList;
