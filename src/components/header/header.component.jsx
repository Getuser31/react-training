import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {auth} from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

const Header = ({currentUser, hidden}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>Shop</OptionLink>
      <OptionLink to='/shop'>Contact</OptionLink>
      {
        currentUser ?
          <OptionLink as='div'  onClick={() => auth.signOut()}> SIGN OUT</OptionLink>
          :
          <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    {
      hidden ? null: <CartDropDown/>
    }
  </HeaderContainer>
)

const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);