import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from './header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = (props) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<Logo className="logo" />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/shop">CONTACT</OptionLink>
				{props.currentUser ? (
					<OptionLink
						as="div"
						className="option"
						onClick={() => auth.signOut()}
					>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to="/signin">SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{!props.cartHidden && <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = (state) => {
	return {
		// これでHeaderのprops.currentUserに、storeで管理しているcurrentUserが紐づく
		currentUser: selectCurrentUser(state),
		cartHidden: selectCartHidden(state),
	};
};

export default connect(mapStateToProps)(Header);
