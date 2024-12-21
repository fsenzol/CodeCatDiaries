import React, { useEffect, useState } from "react"
import LargePageTitle from "../components/LargePageTitle"
import Pagination from "../components/Pagination"
import { getRecentPosts } from "../api/ApiHandler"
import { AUTH, handleSliceForSmallPage} from "../utility";
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
			<div className="flex justify-start flex-col px-10">
				<div>
					<LargePageTitle defaultSize="150px" maxSize="90px" name={"THE BLOG"} font={"roboto"} />
				</div>
				<h1 className="text-header-content">Recent blog posts</h1>

				<div className="grid grid-rows-2 grid-cols-2 max-md:grid-rows-1 max-md:grid-cols-1 gap-6 min-h-96">

					{/* {dummyPosts.slice(0, 4).map((data, i) => (
						<div key={i}>
							<LargeBlogCard {...data} />
						</div>
					))} */}

					{recentPosts.slice(0, 4).map((data, i) => (
						<div key={i}>
							<LargeBlogCard {...data} />
						</div>
					))}

				</div>

				<div>
					<h1 className="text-header-content">All blog posts</h1>
				</div>

			</div>

			<div className="grid w-full grid-cols-3 gap-3 max-md:grid-cols-1 max-md:grid-rows-1 px-10 min-h-80">
				{/* {dummyPosts.slice(5, 11).map((data, i) => (
					<div key={i}>
						<BlockBlogCard {...data} />
					</div>
				))} */}
				{recentPosts.slice(4).slice(handleSliceForSmallPage(currentPage)).map((data, i) => (
					<div key={i}>
						<BlockBlogCard {...data} />
					</div>
				))}
			</div>


			<div className=" my-6 w-full border-t-only flex justify-center p-2 border-base-content">
				<Pagination pageValue={currentPage}
					handleLeftClick={() => setCurrentPage((currentPage - 1) < 1 ? 1 : currentPage - 1)}
					handleRightClick={() => setCurrentPage(currentPage + 1)}
				/>
			</div>


		</section >
	)
}

export default Home