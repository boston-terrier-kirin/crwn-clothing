import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';
import { ReactComponent as ShioppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = (props) => {
	const handleCartToggle = () => {
		console.log(props.dispatch);
		console.log(toggleCartHidden);

		props.dispatch(toggleCartHidden());
	};
	return (
		<div className="cart-icon" onClick={handleCartToggle}>
			<ShioppingIcon className="shopping-icon" />
			<span className="item-count">100</span>
		</div>
	);
};

export default connect()(CartIcon);
