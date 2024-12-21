import { useEffect, useState } from 'react'
import { getRecentPosts } from '../api/ApiHandler'
import BlockBlogCard from '../components/BlockBlogCard'
import EmailBar from '../components/EmailBar'
import Pagination from '../components/Pagination'
import { AUTH } from '../utility'

const Newsletter = () => {
	const [recentPosts, setRecentPosts] = useState([])

	const updateRecentPosts = async () => {
		const posts = await getRecentPosts(30, AUTH.USERNAME, AUTH.PASSWORD, AUTH.URL, AUTH.SECRET)
		setRecentPosts(posts.data)
	}

	useEffect(() => {
		updateRecentPosts()
	})

	return (
		<section>
			<div className='flex justify-center items-center w-full flex-col gap-10'>
				<h1 className='text-lg text-primary'>Newsletters</h1>
				<h3 className='font-kanit text-7xl'>Stories and interviews</h3>
				<p className='w-2/3 text-center font-kanit text-xl'>Subscribe to learn about new product features, the latest in technology, solutions and updates.</p>
				<EmailBar />
				<p className='font-montserrat font-semibold'>We care about your data!</p>
			</div>
			<div className='px-10'>
				<h1 className="text-header-content">All blog posts</h1>
			</div>


			<div className="grid w-full grid-cols-3 gap-3 max-md:grid-cols-1 max-md:grid-rows-1 px-10 min-h-80">
				{/* {dummyPosts.slice(5, 11).map((data, i) => (
					<div key={i}>
						<BlockBlogCard {...data} />
					</div>
				))} */}

				{recentPosts.slice(0, 6).map((data, i) => (
					<div key={i}>
						<BlockBlogCard {...data} />
					</div>
				))}
			</div>


			<div className=" my-6 w-full border-t-only flex justify-center p-2 border-base-content">
				<Pagination />
			</div>


		</section>
	)
}

export default Newsletter