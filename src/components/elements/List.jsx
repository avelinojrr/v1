import { v4 as uuidv4 } from 'uuid'
import Icon from '/src/components/elements/Icon.jsx'
import '/src/style/elements/List.css'

// eslint-disable-next-line react/prop-types
const List = ({ name, items }) => {
	return(
		<div className="List">
			<h3 className="List-name">{name}</h3>
			<ul className="List-items">
				{
					// eslint-disable-next-line react/prop-types
					items.map((i) => 
						<li className="List-item" key={uuidv4()}>
							<span className="List-tooltip">{i.name}</span>
							<Icon icon={i.icon} />
						</li>
					)
				}
			</ul>
		</div>
	);
}

export default List