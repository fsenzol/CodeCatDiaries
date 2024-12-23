import React from 'react'
import { myIntro, passions, TechStack } from '../utility'

const About = () => {
	return (
		<section className='min-h-screen'>
			<div className='px-4'>
				<h1 className='font-bold uppercase font-montserrat'>About Me</h1>
				<p className='font-roboto leading-normal'>{myIntro}</p>

				<h2 className='pt-6 uppercase font-bold font-montserrat'>What I Do</h2>
				<p className='font-kanit'>Here are some of the areas I’m currently exploring and working on:</p>
				<ul className='pt-4'>
					{TechStack.map(({ title, desc }, i) => (
						<li className='p-3 text-justify font-roboto leading-tight' key={i}><strong className='font-montserrat' key={i}>{title}: </strong>{desc}</li>
					))}
				</ul>

				<h2>Hobbies and Interests</h2>
				<p>Outside of coding, I enjoy:</p>
				<ul>
					{passions.map((data, i) => (
						<li key={i}>{data}</li>
					))}
				</ul>

				<p>Feel free to reach out and connect with me. I love sharing ideas and learning from others!</p>
			</div>
		</section>
	)
}

export default About