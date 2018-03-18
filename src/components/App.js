import React from "react";
import uuid from "uuid/v1";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import BookPage from "./BookPage";
import WishPage from "./WishPage";

class App extends React.Component {
  state = {
    bookList: {},
    wishList: {},
    currentPage: "book"
  };

  componentDidMount() {
    // load state from local storage
    const bookStorage = localStorage.getItem("bookList");
    const wishStorage = localStorage.getItem("wishList");
    if (bookStorage) {
      this.setState({ bookList: JSON.parse(bookStorage) });
    }
    if (wishStorage) {
      this.setState({ wishList: JSON.parse(wishStorage) });
    }
  }

  componentDidUpdate() {
    // add changes to local storage
    localStorage.setItem("bookList", JSON.stringify(this.state.bookList));
    localStorage.setItem("wishList", JSON.stringify(this.state.wishList));
  }

  addBook = book => {
    // create copy of state
    const bookList = { ...this.state.bookList };
    // add book to list
    bookList[`book${uuid()}`] = book;
    // set state with new book list
    this.setState({ bookList });
  };

  updateBook = (key, book) => {
    // copy state
    const bookList = { ...this.state.bookList };
    // update book
    bookList[key] = book;
    // set state
    this.setState({ bookList });
  };

  addWish = wish => {
    // create copy of state
    const wishList = { ...this.state.wishList };
    // add wish to list
    wishList[`wish${uuid()}`] = wish;
    // set state with new wish list
    this.setState({ wishList });
  };

  setBookPage = () => {
    this.setState({ currentPage: "book" });
  };

  setWishPage = () => {
    this.setState({ currentPage: "wish" });
  };

  deleteWish = key => {
    // copy of state
    const wishList = { ...this.state.wishList };
    // delete wish from list
    delete wishList[key];
    // set new state
    this.setState({ wishList });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Navigation
          currentPage={this.state.currentPage}
          setBookPage={this.setBookPage}
          setWishPage={this.setWishPage}
        />
        <main className="content">
          {this.state.currentPage === "book" && (
            <BookPage
              addBook={this.addBook}
              bookList={this.state.bookList}
              updateBook={this.updateBook}
            />
          )}
          {this.state.currentPage === "wish" && (
            <WishPage
              addWish={this.addWish}
              wishList={this.state.wishList}
              deleteWish={this.deleteWish}
            />
          )}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
