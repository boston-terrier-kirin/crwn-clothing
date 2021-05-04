import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';
import { ReactComponent as ShioppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = (props) => {
	return (
		<div
			className="cart-icon"
			onClick={() => props.dispatch(toggleCartHidden())}
		>
			<ShioppingIcon className="shopping-icon" />
			<span className="item-count">{props.itemCount}</span>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		itemCount: selectCartItemsCount(state),
	};
};

export default connect(mapStateToProps)(CartIcon);
