import React from 'react'
import { FaShare } from 'react-icons/fa'

const ShareTag = ({ _id, shares }) => {

	const handleShared = () => {
		const shareNumber = shares * 1 || 0
		if (shareNumber > 1000) {
			return `${(shareNumber / 1000).toFixed(1)}k`
		} else {
			return shareNumber
		}
	}



	return (
		<div className={`badge badge-outline gap-2 px-2 py-0.5 items-center flex cursor-pointer btn-bounce`}>
			<FaShare />
			<p className='font-montserrat text-sm font-bold'>{handleShared()}</p>
		</div>
	)
}

export default ShareTag