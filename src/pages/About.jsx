import React from 'react'
import { Attributions, myIntro, passions, TechStack } from '../utility'

const About = () => {
	return (
		<section className='min-h-screen my-6'>
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

				<h2 className='pt-6 uppercase font-bold font-montserrat'>Hobbies and Interests</h2>
				<p className='font-kanit'>Outside of coding, I enjoy:</p>
				<ul className='pt-1'>
					{passions.map((data, i) => (
						<li className='px-3 text-justify font-medium font-roboto leading-tight' key={i}>{'>'} {data}</li>
					))}
				</ul>

				<p className='uppercase font-lato font-semibold py-4'>Feel free to reach out and connect with me. I love sharing ideas and learning from others :P</p>


				<h2 className='pt-6 uppercase font-bold font-montserrat'>ATTRIBUTIONS</h2>
				<div>
					<li className='mx-8 text-accent'>
						{Attributions.map(({ name, link }, i) => (
							<a className='text-accent font-bold' href={link} target='_blank'>{name}</a>
						))}
					</li>
				</div>
			</div>
		</section>
	)
}

export default About