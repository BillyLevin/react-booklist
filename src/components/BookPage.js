import React from "react";
import PropTypes from "prop-types";
import AddBookForm from "./AddBookForm";
import EditBookForm from "./EditBookForm";
import BookList from "./BookList";

class BookPage extends React.Component {
  state = {
    formType: "Add",
    currentBook: {},
    currentKey: ""
  };

  switchToEdit = () => {
    const formType = "Edit";
    this.setState({ formType });
  };

  switchToAdd = () => {
    const formType = "Add";
    this.setState({ formType });
  };

  setCurrentBook = (book, key) => {
    this.setState({ currentBook: book, currentKey: key });
  };

  render() {
    return (
      <div>
        {this.state.formType === "Add" && (
          <AddBookForm
            addBook={this.props.addBook}
            formType={this.state.formType}
          />
        )}
        {this.state.formType === "Edit" && (
          <EditBookForm
            addBook={this.props.addBook}
            updateBook={this.props.updateBook}
            formType={this.state.formType}
            currentBook={this.state.currentBook}
            currentKey={this.state.currentKey}
            setCurrentBook={this.setCurrentBook}
            switchToAdd={this.switchToAdd}
          />
        )}
        {Object.keys(this.props.bookList).length > 0 && (
          <BookList
            bookList={this.props.bookList}
            switchToEdit={this.switchToEdit}
            setCurrentBook={this.setCurrentBook}
          />
        )}
      </div>
    );
  }
}

BookPage.propTypes = {
  addBook: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
  bookList: PropTypes.object
};

export default BookPage;
