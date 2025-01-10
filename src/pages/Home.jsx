import React, {Suspense, useCallback, useEffect, useState} from "react"
import { getRecentPosts } from "../api/ApiHandler"
import { AUTH } from "../utility";
import Carousel from "../components/Carousel";
import MaterialOL from "../components/MaterialOL";
//import ThemeCanvas from "@/components/ThemeCanvas.jsx";
const LargeBlogCard = React.lazy(() => import("../components/LargeBlogCard"));
const BlockBlogCard = React.lazy(() => import("../components/BlockBlogCard"));


const Home = () => {

	const [recentPosts, setRecentPosts] = useState([])

	const updateRecentPosts = useCallback(async () => {
		const posts = await getRecentPosts(30, AUTH.USERNAME, AUTH.PASSWORD, AUTH.URL, AUTH.SECRET)

		if (posts.status === 0) {
			return setRecentPosts(posts.data)
		}

		setTimeout(() => {
			updateRecentPosts()
		}, 5000)
		
	}, [])

	useEffect(() => {
		updateRecentPosts().then(r => r)
	}, [updateRecentPosts])

	return (
		<section className="relative min-h-screen">
			<div className="flex justify-start flex-col">

				<h1 className="text-header-content md:px-10  max-md:p-4 mt-32">Recent blog posts</h1>

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