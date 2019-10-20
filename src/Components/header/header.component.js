import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';

const Header = ({ currentUser, toggleDropdown }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className="option" to="/shop">
        SHOP
      </OptionLink>
      {
        currentUser ?
          <OptionDiv onClick={() => auth.signOut()}> SIGN OUT </OptionDiv>
          :
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      toggleDropdown ?
      <CartDropdown />
      : null
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  toggleDropdown: selectCartHidden
});

export default connect(mapStateToProps)(Header);