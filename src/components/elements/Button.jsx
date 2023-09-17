import '/src/style/elements/Button.css'

// eslint-disable-next-line react/prop-types
const Button = ({ text, link }) => {
	return(
		<button className="Button">
			<a className="Button-link" href={`mailto:${link}`}>
				<span className="Button-text">{ text }</span>
			</a>
		</button>
	);
}

export default Button