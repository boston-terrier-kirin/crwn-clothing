import { connect } from 'react-redux';
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import './directory.styles.scss';

const Directory = (props) => {
	const itemList = props.sections.map((section) => (
		<MenuItem
			key={section.id}
			title={section.title}
			imageUrl={section.imageUrl}
			size={section.size}
			linkUrl={section.linkUrl}
		/>
	));

	return <div className="directory-menu">{itemList}</div>;
};

const mapStateToProps = (state) => {
	return {
		sections: selectDirectorySections(state),
	};
};

export default connect(mapStateToProps)(Directory);
