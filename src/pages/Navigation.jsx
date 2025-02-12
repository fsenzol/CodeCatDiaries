import { useEffect, useState } from 'react'
import { navigationLinks } from '../constants'
import { Link } from 'react-router-dom'
import ThemeSwitch from '../components/ThemeSwitch'
import { DropdownButton } from '../components/DropdownButton'
import SearchBar from '../components/SearchBar'
import { getAllCategories } from '../api/ApiHandler'
import {ChevronDown} from "lucide-react";
import {AUTH} from "@/utility/index.js";



const Navigation = () => {

	const [categories, setCategories] = useState([])


	useEffect(() => {
		const setupCategories = async () => {
			const categories = await getAllCategories(AUTH.USERNAME,AUTH.PASSWORD, AUTH.URL)
			setCategories(categories.data)
		}
		setupCategories().then(r => r)
	}, [categories])



	return (
		<header className='navigation-container bg-custom-radial bg-4x4'>
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
								<ChevronDown className='size-3 opacity-30' />
							</div>

							<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-96 p-4 shadow flex flex-row gap-6">
								{categories && categories.map(({ name, _id }, i) => (
									
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
									<ChevronDown className='w-3 opacity-30' />
								</div>

								<div className='flex flex-col gap-1 text-sm mt-4 font-thin'>
									{categories && categories.map(({ name, _id }, i) => (
										<Link key={i} to={`/category/${_id}`} className='navLinks text-nowrap'>
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