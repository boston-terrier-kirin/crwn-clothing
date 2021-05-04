import { connect } from 'react-redux';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = (props) => {
	const { name, price, imageUrl } = props.item;
	const { dispatch } = props;

	return (
		<div className="collection-item">
			<div
				className="image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton
				inverted
				onClick={() => dispatch(addItem(props.item))}
			>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default connect()(CollectionItem);
