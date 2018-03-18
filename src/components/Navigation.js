import React from "react";
import PropTypes from "prop-types";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button
              className={
                this.props.currentPage === "book"
                  ? "nav__link nav__link--active"
                  : "nav__link"
              }
              onClick={this.props.setBookPage}
            >
              Book List
            </button>
          </li>
          <li className="nav__item">
            <button
              className={
                this.props.currentPage === "wish"
                  ? "nav__link nav__link--active"
                  : "nav__link"
              }
              onClick={this.props.setWishPage}
            >
              Wishlist
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setBookPage: PropTypes.func.isRequired,
  setWishPage: PropTypes.func.isRequired
};

export default Navigation;
