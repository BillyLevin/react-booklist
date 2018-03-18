import React from "react";
import PropTypes from "prop-types";

class WishListItem extends React.Component {
  handleClick = () => {
    this.props.deleteWish(this.props.index);
  };
  render() {
    const { title, author, price } = this.props.wish;
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
          <span className="book-list__heading">Price: </span>
          £{price}
        </span>
        <button onClick={this.handleClick} className="book-list__delete">
          &times;
        </button>
      </li>
    );
  }
}

WishListItem.propTypes = {
  wish: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }),
  deleteWish: PropTypes.func.isRequired
};

export default WishListItem;
