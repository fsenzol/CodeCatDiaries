import { FaLink } from "react-icons/fa"
import TagComponent from "./TagComponent"
import LikeTag from "./LikeTag"
import ShareTag from "./ShareTag"
import ViewTag from "./ViewTag"
import { Suspense } from "react"
import { Link } from "react-router-dom"

const BlockBlogCard = ({ _id, title, slug, summary, tags, featured_image, likes, views, created_at }) => {
	return (

		<Suspense fallback={<div className="skeleton h-32 w-32"></div>}>
			<div className="flex flex-col flex-1 justify-center items-start gap-2 blog-post-card">
		
				<Link to={`/posts/${_id}`} className='w-full'>
					<img
						src={featured_image}
						alt={slug || 'generic-image'}
						className="object-fit h-48 rounded-md w-full btn-bounce"
					/>
				</Link>

				<p className="post-text-date">{new Date(created_at).toLocaleString()}</p>

				<div className="flex flex-1 w-96 justify-between items-center">
					<h2 className="font-semibold font-lato text-xl">{title}</h2>
				</div>

				{/* <p className="leading-tight font-roboto break-words text-lg">{postBody}</p> */}

				<div className="flex flex-1 flex-wrap justify-start gap-6">
					{tags.map((str, i) => (
						<TagComponent tagName={str} key={i} />
					))}
				</div>


				<div className="flex my-4 gap-6 z-20">
					<LikeTag likes={likes} />
					<ViewTag views={views} />
					<ShareTag />
				</div>

			</div>


		</Suspense>

	)
}

export default BlockBlogCard