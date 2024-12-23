import { Suspense, useEffect, useState } from 'react'
import { getRecentPosts } from '../api/ApiHandler'
import BlockBlogCard from '../components/BlockBlogCard'
import EmailBar from '../components/EmailBar'
import Pagination from '../components/Pagination'
import { AUTH } from '../utility'
import Carousel from '../components/Carousel'

const Newsletter = () => {
	const [recentPosts, setRecentPosts] = useState([])

	const updateRecentPosts = async () => {
		const posts = await getRecentPosts(30, AUTH.USERNAME, AUTH.PASSWORD, AUTH.URL, AUTH.SECRET)
		setRecentPosts(posts.data)
	}

	useEffect(() => {
		updateRecentPosts()
	}, [])

	return (
		<section>
			<div className='flex justify-center items-center w-full flex-col gap-10'>
				<h3 className='font-kanit text-7xl max-sm:text-4xl font-bold'>Stories and interviews</h3>
				<p className='w-2/3 text-center font-kanit text-xl'>Subscribe to learn about new product features, the latest in technology, solutions and updates.</p>
				<EmailBar />
				<p className='font-montserrat font-semibold'>We care about your data!</p>
			</div>
			<div className='px-10'>
				<h1 className="text-header-content">Recent blog posts</h1>
			</div>


			{
				recentPosts.length > 0 ? (
					<>
						<Carousel>
							{recentPosts.slice(4).map((data, i) => (
								<div key={i} className="carousel-item w-1/2">
									<Suspense fallback={<div className="loading loading-lg"></div>}>
										<BlockBlogCard {...data} />
									</Suspense>
								</div>
							))}
						</Carousel>
					</>
				) : (
					<div className='w-full h-screen flex justify-center items-center'>
						<span className="loading loading-ring loading-lg"></span>
					</div>
				)
			}

		</section>
	)
}

export default Newsletter