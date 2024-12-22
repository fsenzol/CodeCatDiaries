import React from 'react'
import { FaShare } from 'react-icons/fa'

const ShareTag = ({ _id, shares }) => {

	return (
		<div className={`badge badge-outline gap-2 px-2 py-0.5 items-center flex cursor-pointer btn-bounce`}>
			<FaShare className='w-6'/>
		</div>
	)
}

export default ShareTag