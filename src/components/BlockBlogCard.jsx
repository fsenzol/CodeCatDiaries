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
			<div className="flex flex-col w-full max-md:min-w-fit flex-1 justify-center items-start gap-3 blog-post-card select-none">

				<Link to={`/posts/${_id}`} className='w-full'>
					<img
						src={featured_image}
						alt={slug || 'generic-image'}
						className="object-fit max-h-72 h-auto aspect-auto rounded-md w-full btn-bounce"
					/>
				</Link>

				<p className="post-text-date select-none">{new Date(created_at).toLocaleString()}</p>

				<div className="flex flex-1 w-full justify-between items-center">
					<h2 className="font-semibold font-lato max-md:text-base text-xl text-pretty">{title}</h2>
				</div>

				{/* <p className="leading-tight font-roboto break-words text-lg">{postBody}</p> */}

				<div className="flex flex-1 flex-wrap justify-start gap-6 max-md:gap-1">
					{tags.map((str, i) => (
						<TagComponent tagName={str} key={i} />
					))}
				</div>


				<div className="flex justify-evenly gap-3">
					<LikeTag likes={likes} id={_id} />
					<ViewTag views={views} />
					<ShareTag id={_id} />
				</div>

			</div>


		</Suspense>

	)
}

export default BlockBlogCard