import './checkout.styles.scss';
import { connect } from 'react-redux';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = (props) => {
	const cartItemList = props.cartItems.map((item) => (
		<CheckoutItem key={item.id} cartItem={item} />
	));

	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="checkout-block">
					<span>Product</span>
				</div>
				<div className="checkout-block">
					<span>Description</span>
				</div>
				<div className="checkout-block">
					<span>Quantity</span>
				</div>
				<div className="checkout-block">
					<span>Price</span>
				</div>
				<div className="checkout-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItemList}
			<div className="total">TOTAL: ${props.total}</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
	total: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);
