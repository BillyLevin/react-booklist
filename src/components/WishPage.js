import React from "react";
import PropTypes from "prop-types";
import AddWishForm from "./AddWishForm";
import WishList from "./WishList";

class WishPage extends React.Component {
  render() {
    return (
      <div>
        <AddWishForm addWish={this.props.addWish} />
        {Object.keys(this.props.wishList).length > 0 && (
          <WishList
            wishList={this.props.wishList}
            deleteWish={this.props.deleteWish}
          />
        )}
      </div>
    );
  }
}

WishPage.propTypes = {
  addWish: PropTypes.func.isRequired,
  deleteWish: PropTypes.func.isRequired,
  wishList: PropTypes.object
};

export default WishPage;
