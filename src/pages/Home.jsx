import React, { Suspense, useEffect, useState } from "react"
import LargePageTitle from "../components/LargePageTitle"
import Pagination from "../components/Pagination"
import { getRecentPosts } from "../api/ApiHandler"
import { AUTH, handleSliceForSmallPage } from "../utility";
import Carousel from "../components/Carousel";
import MaterialOL from "../components/MaterialOL";
const LargeBlogCard = React.lazy(() => import("../components/LargeBlogCard"));
const BlockBlogCard = React.lazy(() => import("../components/BlockBlogCard"));


const Home = () => {

	const [recentPosts, setRecentPosts] = useState([])

	const updateRecentPosts = async () => {
		const posts = await getRecentPosts(30, AUTH.USERNAME, AUTH.PASSWORD, AUTH.URL, AUTH.SECRET)

		if (posts.status === 0) {
			return setRecentPosts(posts.data)
		}

		setTimeout(() => {
			updateRecentPosts()
		}, 5000)
		
	}

	useEffect(() => {
		updateRecentPosts()
	}, [])

	return (
		<section className="relative min-h-screen">
			<div className="flex justify-start flex-col">
				<div className="md:px-10 max-md:p-4">
					<LargePageTitle defaultSize="150px" maxSize="90px" name={"THE BLOG"} font={"roboto"} />
				</div>
				<h1 className="text-header-content md:px-10 max-md:p-4 md:mt-8 mt-4">Recent blog posts</h1>

				{
					recentPosts.length > 0 ? (
						<>
							<div className="min-h-96 w-full rounded-md">

								<Carousel>
									{recentPosts.slice(0, 4).map((data, i) => (
										<div key={i} className="carousel-item w-1/2">
											<LargeBlogCard {...data} />
										</div>
									))}
								</Carousel>


							</div>


							<div className="bg-transparent rounded-md py-2">
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

			<MaterialOL number={1} />


		</section >
	)
}

export default Home