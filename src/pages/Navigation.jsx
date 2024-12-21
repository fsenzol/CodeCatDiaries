import React from 'react'
import { navigationLinks } from '../constants'
import { Link } from 'react-router-dom'
import ThemeSwitch from '../components/ThemeSwitch'
import { DropdownButton } from '../components/DropdownButton'
import SearchBar from '../components/SearchBar'

const Navigation = () => {
	return (
		<header className='absolute top-0 start-0 p-4 w-full uppercase text-md font-montserrat'>
			<div className='flex w-full flex-row justify-between flex-1 gap-2 p-2 items-center card-action'>
				<p className='cursor-zoom-in font-kanit font-bold tracking-wider max-sm:text-[15px] max-sm:tracking-tighter'>The Based Blog</p>
				<div className='max-md:hidden'>
					<ul className='flex gap-5 flex-row'>
						{navigationLinks.map(({ siteName, siteLink }, i) => (
							<Link key={i} to={siteLink} className='hover:text-info transition-colors duration-300 hover:underline underline-offset-8'>
								{siteName}
							</Link>
						))}
					</ul>
				</div>
				<div className='flex items-center gap-8'>
					<SearchBar />
					<ThemeSwitch />
				</div>
				<div className='md:hidden'>
					<DropdownButton>
						{navigationLinks.map(({ siteName, siteLink }, i) => (
							<Link key={i} to={siteLink} className='hover:text-primary'>
								{siteName}
							</Link>
						))}
					</DropdownButton>
				</div>
			</div>
		</header>
	)
}

export default Navigation