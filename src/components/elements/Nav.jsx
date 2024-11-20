import { useState, useContext } from 'react'
import { RiMoonLine, RiSunLine, RiMenuFill, RiCloseLine } from "react-icons/ri"
import { ThemeContext } from '/src/contexts/ThemeContext.jsx'
import { brand } from '/src/data.js'
import '/src/stylesheets/elements/Nav.css'

const Nav = () => {
	const { theme, switchTheme } = useContext(ThemeContext)
	const [menu, setMenu] = useState(false);

	(menu)
	? document.body.classList.add('disable-scroll')
	: document.body.classList.remove('disable-scroll')

	const handleMenu = (e) => {
		if(!menu) return;
		if(e.target.className !== 'Nav-menu-wrapper') setMenu(false)
	}

	return(
		<nav className="Nav">
			<div className="Nav-brand">
				<a className="Nav-brand-link" href="/">{brand}</a>
			</div>
			<div className="Nav-menu" data-show={menu} onClick={(e) => handleMenu(e)}>
				<div className="Nav-menu-wrapper">
					<a className="Nav-link" href="#experience" onClick={() => setMenu(false)}>
						1. Experience
					</a>
					<a className="Nav-link" href="#work" onClick={() => setMenu(false)}>
						2. Work
					</a>
					<a className="Nav-link" href="#stack" onClick={() => setMenu(false)}>
						3. Stack
					</a>
					<a className="Nav-link" href="#contact" onClick={() => setMenu(false)}>
						4. Contact
					</a>
					<a className="Nav-link" href="https://drive.google.com/file/d/1KfOHBWl8ciWEQtpk3ptUF-bIuwMcArmo/view?usp=sharing" target='_blank' onClick={() => setMenu(false)}>
						5. Resume
					</a>
				</div>
			</div>
			<div className="Nav-buttons">
				<button className="Nav-switch" onClick={() => switchTheme()}>
					{ (theme === 'light') ? <RiMoonLine /> : <RiSunLine /> }
				</button>
				<button className="Nav-toggle" onClick={() => setMenu(prevMenu => !prevMenu)}>
					{ (menu) ? <RiCloseLine /> : <RiMenuFill /> }
				</button>
			</div>
		</nav>
	);
}

export default Nav