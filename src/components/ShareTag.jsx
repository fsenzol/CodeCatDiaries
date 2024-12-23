import React from 'react'
import { FaShare } from 'react-icons/fa'

const ShareTag = ({ _id, title }) => {
	const handleShareClick = async () => {
		const baseUrl = window.location.origin

		if (navigator.share) {
			navigator.share({
				title,
				text: title,
				url: `${baseUrl}/posts/${_id}`
			})
		}
	}
	return (
		<div className={`badge badge-outline gap-2 px-2 py-0.5 items-center flex cursor-pointer btn-bounce`}>
			<FaShare className='w-6'/>
		</div>
	)
}

export default ShareTag