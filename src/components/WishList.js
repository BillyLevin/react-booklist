import React from "react";
import PropTypes from "prop-types";
import WishListItem from "./WishListItem";

class WishList extends React.Component {
  render() {
    return (
      <div className="books">
        <h3 className="heading-secondary">Browse your wishlist...</h3>
        <ul className="book-list">
          {Object.keys(this.props.wishList).map(key => (
            <WishListItem
              wish={this.props.wishList[key]}
              key={key}
              index={key}
              deleteWish={this.props.deleteWish}
            />
          ))}
        </ul>
      </div>
    );
  }
}

WishList.propTypes = {
  wishList: PropTypes.object,
  deleteWish: PropTypes.func.isRequired
};

export default WishList;
