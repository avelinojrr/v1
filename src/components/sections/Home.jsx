import '/src/stylesheets/sections/Home.css'
import SocialLinks from '/src/components/elements/SocialLinks'
import { profile } from '/src/data.js'

const Home = () => {
	const { name, role } = profile

	return (
		<section className='Home section' id='home'>
			<div className='container'>
				<div className='Home-caption'>
					<span className='Home-hi'>Hi I&apos;m</span>
					<h1 className='Home-h1'>{name}</h1>
					<h2 className='Home-h2'>{role}</h2>
					<p className='Home-description'>
						Hi Stranger👋, I am a software developer proficient in Node.js, 
						specializing in backend application development using
						popular frameworks such as Express.js, Nest.js and Meteor.js. I have worked
						with databases such as MongoDB/PostgreSQL. I also have experience in
						creating web services, RESTful APIs, and implementing microservices.
					</p>
					<SocialLinks />
				</div>
			</div>
		</section>
	)
}


export default Home
