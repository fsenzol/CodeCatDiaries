import BlockBlogCard from "../components/BlockBlogCard"
import LargeBlogCard from "../components/LargeBlogCard"
import LargePageTitle from "../components/LargePageTitle"
import Pagination from "../components/Pagination"
import { dummyPosts } from "../constants"
import Footer from "./Footer"

const Home = () => {
	return (
		<section className="relative">
			<div className="flex justify-start flex-col px-10">
				<div>
					<LargePageTitle defaultSize="150px" maxSize="90px" name={"THE BLOG"} font={"roboto"} />
				</div>
				<h1 className="text-header-content">Recent blog posts</h1>

				<div className="grid grid-rows-2 grid-cols-2 max-md:grid-rows-1 max-md:grid-cols-1 gap-6">

					{dummyPosts.slice(0, 4).map((data, i) => (
						<div key={i}>
							<LargeBlogCard {...data} />
						</div>
					))}

				</div>

				<div>
					<h1 className="text-header-content">All blog posts</h1>
				</div>

			</div>

			<div className="grid w-full grid-cols-3 gap-3 max-md:grid-cols-1 max-md:grid-rows-1 px-10">
				{dummyPosts.slice(5, 11).map((data, i) => (
					<div key={i}>
						<BlockBlogCard {...data} />
					</div>
				))}
			</div>


			<div className=" my-6 w-full border-t-only flex justify-center p-2 border-base-content">
				<Pagination />
			</div>


		</section >
	)
}

export default Home