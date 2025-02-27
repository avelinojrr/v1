import { v4 as uuidv4 } from 'uuid'
import { stack } from '/src/api/stack'
import List from '../elements/List.jsx'
import '/src/stylesheets/sections/Stack.css'

const Stack = () => {
	return (
		<section className='Stack' id='stack'>
			<div className='container'>
				<h2 className='Stack-h2 section-head'>Stack.</h2>
				<div className='container-sm'>
					<div className='Stack-wrapper'>
						{stack.map((list) => (
							<List name={list.name} items={list.items} key={uuidv4()} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Stack
