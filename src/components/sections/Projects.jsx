import { v4 as uuidv4 } from 'uuid'
import { projects } from '/src/api/projects'
import Card from '/src/components/elements/Card'
import '/src/stylesheets/sections/Projects.css'

const Project = () => {
	return (
		<section className='Project section' id='projects'>
			<div className='container-project'>
				<h2 className='Projects-h2 section-head'>Projects.</h2>
				<div className='Projects-wrapper'>
					{projects.map((p) => (
						<Card
							name={p.name}
							description={p.description}
							stack={p.stack}
							linkProject={p.linkProject}
							linkGithub={p.linkGithub}
							key={uuidv4()}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Project
