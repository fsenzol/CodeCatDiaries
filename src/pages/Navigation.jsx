import React, { useEffect, useState } from 'react'
import { navigationLinks } from '../constants'
import { Link } from 'react-router-dom'
import ThemeSwitch from '../components/ThemeSwitch'
import { DropdownButton } from '../components/DropdownButton'
import SearchBar from '../components/SearchBar'
import { use } from 'react'
import { getAllCategories } from '../api/ApiHandler'
import { FaArrowDown } from 'react-icons/fa'

const Navigation = () => {
	const USERNAME = import.meta.env.VITE_USERNAME
	const PASSWORD = import.meta.env.VITE_PASS
	const URL = import.meta.env.VITE_API_URL

	const [categories, setCategories] = useState([])

	const setupCategories = async () => {
		const categories = await getAllCategories(USERNAME, PASSWORD, URL)
		setCategories(categories.data)
	}


	useEffect(() => {
		setupCategories()
	}, [])



	return (
		<header className='absolute top-0 start-0 p-4 w-full uppercase text-md font-montserrat'>
			<div className='flex w-full flex-row justify-between flex-1 gap-2 p-2 items-center card-action'>
				<p className='cursor-zoom-in font-kanit font-bold tracking-wider max-sm:text-[15px] max-sm:tracking-tighter'>The Based Blog</p>
				<div className='max-md:hidden'>
					<ul className='flex gap-5 flex-row'>
						{navigationLinks.slice(0, 1).map(({ siteName, siteLink }, i) => (
							<Link key={i} to={siteLink} className='navLinks'>
								{siteName}
							</Link>
						))}

						<div className="dropdown dropdown-hover">
							<div className='flex flex-row gap-2 justify-center items-center'>
								<div tabIndex={0} role="button" >Categories</div>
								<FaArrowDown className='w-3 opacity-30' />
							</div>

							<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-96 p-4 shadow flex flex-row gap-6">
								{categories.map(({ name, _id }, i) => (
									<Link key={i} to={`/category/${_id}`} className='navLinks text-nowrap'>
										{name}
									</Link>
								))}
							</ul>
						</div>


						{navigationLinks.slice(1).map(({ siteName, siteLink }, i) => (
							<Link key={i} to={siteLink} className='navLinks'>
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
						<ul className='flex gap-5 flex-col'>
							{navigationLinks.slice(0, 1).map(({ siteName, siteLink }, i) => (
								<Link key={i} to={siteLink} className='navLinks'>
									{siteName}
								</Link>
							))}

							<div className="dropdown dropdown-hover">
								<div className='flex flex-row gap-2 justify-center items-center'>
									<div tabIndex={0} role="button" >Categories</div>
									<FaArrowDown className='w-3 opacity-30' />
								</div>

								<div className='flex flex-col gap-1 text-sm mt-4 font-thin'>
									{categories.map(({ name, id }, i) => (
										<Link key={i} to={`/category/${name.toLowerCase()}`} className='navLinks text-nowrap'>
											{name}
										</Link>
									))}
								</div>
							</div>


							{navigationLinks.slice(1).map(({ siteName, siteLink }, i) => (
								<Link key={i} to={siteLink} className='navLinks'>
									{siteName}
								</Link>
							))}
						</ul>
					</DropdownButton>
				</div>
			</div>
		</header>
	)
}

export default Navigation