import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import { selectCartHidden } from "../../redux/cart/selectors";
import { selectCurrentUser } from "../../redux/user/selectors";
import { signOutStart } from "../../redux/user/actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className="option" to="/shop">
        SHOP
      </OptionLink>
      <OptionLink className="option" to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink className="option" to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
