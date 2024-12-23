import React, { Suspense } from 'react';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LikeTag from './LikeTag';
import ViewTag from './ViewTag';
import ShareTag from './ShareTag';
import TagComponent from './TagComponent';



const LargeBlogCard = ({ _id, title, slug, summary, tags, featured_image, likes, views, created_at }) => {
	return (
		<div className="flex flex-col flex-1 justify-center items-start gap-4 max-md:gap-2 blog-post-card select-none">
			<Link to={`/posts/${_id}`} className='w-full'>
				<img
					src={featured_image}
					alt={slug || 'generic-image'}
					width={300}
					className="object-cover aspect-auto h-auto max-h-96 w-full rounded-md btn-bounce"
				/>
			</Link>


			<p className="post-text-date">{new Date(created_at).toLocaleString()}</p>

			<div className="flex flex-1 w-full justify-between items-center">
				<h2 className="font-semibold font-lato text-2xl text-pretty max-md:text-base">{title}</h2>
			</div>

			<div className="flex w-full flex-1 flex-wrap justify-start gap-1">
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
	);
};

export default LargeBlogCard;
