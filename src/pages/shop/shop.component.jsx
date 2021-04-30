import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		const collectionList = collections.map((collection) => (
			<CollectionPreview
				key={collection.id}
				id={collection.id}
				title={collection.title}
				routeName={collection.routeName}
				items={collection.items}
			/>
		));
		return <div className="shop-page">{collectionList}</div>;
	}
}

export default ShopPage;
