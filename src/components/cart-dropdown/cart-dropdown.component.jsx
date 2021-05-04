import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = (props) => {
	const cartItems = props.cartItems;
	const cartItemList = cartItems.map((item) => (
		<CartItem key={item.id} item={item} />
	));

	const handleCheckout = () => {
		props.history.push('/checkout');
		props.dispatch(toggleCartHidden());
	};

	return (
		<div className="cart-dropdown">
			{cartItemList.length === 0 && (
				<p className="empty-message">Your cart is empty</p>
			)}
			{cartItemList.length > 0 && (
				<div className="cart-items">{cartItemList}</div>
			)}

			<CustomButton onClick={handleCheckout}>CHECK OUT</CustomButton>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cartItems: selectCartItems(state),
	};
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
