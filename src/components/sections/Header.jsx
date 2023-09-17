import Nav from '../elements/Nav'
import '/src/style/sections/Header.css'

const Header = () => {
	return(
		<header className="Header">
			<div className="container">
				<Nav />
			</div>
		</header>
	);
}

export default Header