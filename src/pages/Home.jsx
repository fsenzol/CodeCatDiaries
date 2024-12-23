import React, { Suspense, useEffect, useState } from "react"
import LargePageTitle from "../components/LargePageTitle"
import Pagination from "../components/Pagination"
import { getRecentPosts } from "../api/ApiHandler"
import { AUTH, handleSliceForSmallPage } from "../utility";
import Carousel from "../components/Carousel";
const LargeBlogCard = React.lazy(() => import("../components/LargeBlogCard"));
const BlockBlogCard = React.lazy(() => import("../components/BlockBlogCard"));


const Home = () => {

	const [currentPage, setCurrentPage] = useState(1)
	const [recentPosts, setRecentPosts] = useState([])

	const updateRecentPosts = async () => {
		const posts = await getRecentPosts(30, AUTH.USERNAME, AUTH.PASSWORD, AUTH.URL, AUTH.SECRET)
		setRecentPosts(posts.data)
	}

	useEffect(() => {
		updateRecentPosts()
	}, [])

	return (
		<section className="relative">
			<div className="flex justify-start flex-col">
				<div className="md:px-10 max-md:p-4">
					<LargePageTitle defaultSize="150px" maxSize="90px" name={"THE BLOG"} font={"roboto"} />
				</div>
				<h1 className="text-header-content md:px-10 max-md:p-4">Recent blog posts</h1>

				{
					recentPosts.length > 0 ? (
						<>
							<div className="min-h-96 w-full">

								<Carousel>
									{recentPosts.slice(0, 4).map((data, i) => (
										<div key={i} className="carousel-item w-1/2">
											<LargeBlogCard {...data} />
										</div>
									))}
								</Carousel>


							</div>


							<div>
								<h1 className="text-header-content md:px-10 max-md:p-4">All blog posts</h1>
							</div>
						</>
					) : (<div className='w-full h-screen flex justify-center items-center'>
						<span className="loading loading-ring loading-lg"></span>
					</div>)
				}


			</div>

			<div className="w-full">

				<Carousel>
					{recentPosts.slice(4).map((data, i) => (
						<div key={i} className="carousel-item w-1/2">
							<Suspense fallback={<div className="loading loading-lg"></div>}>
								<BlockBlogCard {...data} />
							</Suspense>
						</div>
					))}
				</Carousel>
			</div>


		</section >
	)
}

export default Home