import { FaLink } from "react-icons/fa"
import TagComponent from "./TagComponent"
import LikeTag from "./LikeTag"
import ShareTag from "./ShareTag"

const LargeBlogCard = ({ postImgUrl, postDate, postTitle, postBody, postTags, postImgAlt }) => {
	const postRealDate = new Date(postDate) || new Date()
	return (
		<div className="flex flex-col flex-1 justify-center items-start gap-2 blog-post-card">
			<img
				src={postImgUrl}
				alt={postImgAlt || 'generic-image'}
				width={300}
				className="object-cover aspect-square h-72 w-full rounded-md btn-bounce"
			/>

			<p className="post-text-date">{postRealDate.toLocaleString()}</p>

			<div className="flex flex-1 w-full justify-between items-center">
				<h2 className="font-semibold font-lato text-2xl">{postTitle}</h2>
				<button className="btn btn-ghost"><FaLink /></button>
			</div>

			<p className="leading-tight font-roboto break-words text-lg">{postBody}</p>

			<div className="flex w-full flex-1 flex-wrap justify-start gap-6">
				{postTags.map((str, i) => (
					<TagComponent tagName={str} key={i} />
				))}
			</div>

			<div className="flex my-4 gap-6">
				<LikeTag />
				<ShareTag />
			</div>

		</div>

	)
}

export default LargeBlogCard