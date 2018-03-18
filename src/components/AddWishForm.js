import React from "react";
import PropTypes from "prop-types";
import { formatPrice } from "../helpers";

class AddWishForm extends React.Component {
  titleRef = React.createRef();
  authorRef = React.createRef();
  priceRef = React.createRef();

  handleAddSubmit = e => {
    e.preventDefault();
    const wish = {
      title: this.titleRef.current.value,
      author: this.authorRef.current.value,
      price: formatPrice(this.priceRef.current.value)
    };
    this.props.addWish(wish);
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
          <label htmlFor="price" className="book-form__label">
            Price (£)
          </label>
          <input
            type="number"
            step="0.01"
            className="book-form__input"
            placeholder="Price..."
            name="price"
            required
            ref={this.priceRef}
          />
        </div>
        <button type="submit" className="book-form__submit">
          Add Wish &rarr;
        </button>
      </form>
    );
  }
}

AddWishForm.propTypes = {
  addWish: PropTypes.func.isRequired
};

export default AddWishForm;
