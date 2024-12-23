import React from 'react'
import { FaShare } from 'react-icons/fa'

const ShareTag = ({ id, title, summary }) => {
	const handleShareClick = async () => {
		const baseUrl = window.location.origin

		if (navigator.share) {
			try {
				const share = await navigator.share({
					title,
					text: summary,
					url: `${baseUrl}/posts/${id}`
				})

				console.log(share)
			} catch (err) {
				console.log(err)
			}
		} else {
			try {
				await navigator.clipboard.writeText(`${baseUrl}/posts/${id}`)
				alert("Link copied to clipboard")
			} catch(err) {
				console.error("Error copying to clipboard:", err)
			}
		}
	}
	return (
		<div className={`badge badge-outline gap-2 px-2 py-0.5 items-center flex cursor-pointer btn-bounce`} onClick={() => handleShareClick()}>
			<FaShare className='w-6'/>
		</div>
	)
}

export default ShareTag