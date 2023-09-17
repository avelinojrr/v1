import { v4 as uuidv4 } from 'uuid'
import { social } from '/src/data.js'
import Icon from '/src/components/elements/Icon.jsx'
import '/src/style/elements/SocialLinks.css'

const SocialLinks = () => {
	return(
		<div className="Social-links">
			{
				social.map((s) => 
					// eslint-disable-next-line react/jsx-no-target-blank
					<a 
						className="Social-link" 
						href={s.link}
						target="_blank"
						key={uuidv4()}
					>
						<Icon icon={s.icon}/ >
					</a>
				)
			}
		</div>
	);
}


export default SocialLinks