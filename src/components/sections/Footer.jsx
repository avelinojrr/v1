import "/src/stylesheets/sections/Footer.css";
import { brand } from "/src/data.js";

/**
 * This is a React component for a website footer that displays the current year and a brand name.
 * @returns A functional component named `Footer` is being returned. It renders a `footer` element with
 * a `container` div and a `p` element with a class of `Footer-brand`. The `p` element displays the
 * `brand` variable and the current year using the `getFullYear()` method.
 */
const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="Footer">
			<div className="container">
				<p className="Footer-brand">
					{brand} <span>© {currentYear}</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
