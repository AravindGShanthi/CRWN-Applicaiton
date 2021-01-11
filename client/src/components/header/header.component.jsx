import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionLinkContainer,
  OptionsContainer,
} from "./header.styles.jsx";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, cartHidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLinkContainer to="/shop">SHOP</OptionLinkContainer>
        <OptionLinkContainer to="/shop">CONTACT</OptionLinkContainer>
        {currentUser ? (
          <OptionLinkContainer as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLinkContainer>
        ) : (
          <OptionLinkContainer to="/signin">SIGN IN</OptionLinkContainer>
        )}
        <CartIcon />
      </OptionsContainer>
      {cartHidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
