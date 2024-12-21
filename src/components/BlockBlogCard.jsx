import { FaLink } from "react-icons/fa"
import TagComponent from "./TagComponent"
import LikeTag from "./LikeTag"
import ShareTag from "./ShareTag"

const BlockBlogCard = ({ postImgUrl, postDate, postTitle, postBody, postTags, postImgAlt, postId}) => {
	const postRealDate = new Date(postDate) || new Date()
	return (
		<div className="flex flex-col flex-1 justify-center items-start gap-2 blog-post-card">
			<img
				src={postImgUrl}
				alt={postImgAlt || 'generic-image'}
				className="object-cover h-48 rounded-md w-full btn-bounce"
			/>

			<p className="post-text-date">{postRealDate.toLocaleString()}</p>

			<div className="flex flex-1 w-96 justify-between items-center">
				<h2 className="font-semibold font-lato text-xl">{postTitle}</h2>
			</div>

			{/* <p className="leading-tight font-roboto break-words text-lg">{postBody}</p> */}

			<div className="flex flex-1 flex-wrap justify-start gap-6">
				{postTags.map((str, i) => (
					<TagComponent tagName={str} key={i} />
				))}
			</div>

			
			<div className="flex my-4 gap-6 z-20">
				<LikeTag />
				<ShareTag />
			</div>


		</div>

	)
}

export default BlockBlogCard