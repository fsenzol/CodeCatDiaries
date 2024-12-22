import React, { Suspense } from 'react';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LikeTag from './LikeTag';
import ViewTag from './ViewTag';
import ShareTag from './ShareTag';
import TagComponent from './TagComponent';



const LargeBlogCard = ({ _id, title, slug, summary, tags, featured_image, likes, views, created_at }) => {
	return (
		<div className="flex flex-col flex-1 justify-center items-start gap-2 blog-post-card select-none">
			<Link to={`/posts/${_id}`} className='w-full'>
				<img
					src={featured_image}
					alt={slug || 'generic-image'}
					width={300}
					className="object-fit aspect-square h-72 max-md:h-60 w-full rounded-md btn-bounce"
				/>
			</Link>


			<p className="post-text-date">{new Date(created_at).toLocaleString()}</p>

			<div className="flex flex-1 w-full justify-between items-center">
				<h2 className="font-semibold font-lato text-2xl text-pretty">{title}</h2>
				<button className="btn btn-ghost"><FaLink /></button>
			</div>

			<div className="flex w-full flex-1 flex-wrap justify-start gap-6">
				{tags.map((str, i) => (
					<TagComponent tagName={str} key={i} />
				))}
			</div>

			<div className="flex my-4 gap-6">
				<LikeTag likes={likes} id={_id} />
				<ViewTag views={views} />
				<ShareTag id={_id} />
			</div>
		</div>
	);
};

export default LargeBlogCard;
