
import React, {Component} from 'react'
import Hero from './hero/Hero'
import Materials from './materials/Materials'
import Sub from './subscription/Sub'
// import Stats from './stats/Stats'
// import Tes from './testimonials/Tes'
import Faq from './faq/Faq'
import Rs from './recentblogs/Rs'
import Services from './ourservices/Services'

class Landing extends Component
{
	render()
	{
		return (
			<>
				<Hero />
                <Materials />
                <Sub />
                {/* <Stats /> */}
                <Rs />
				<Services />
                {/* <Tes /> */}
                <Faq />
			</>
		)
	}
}

export default Landing