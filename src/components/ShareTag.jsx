import React from 'react'
import { useState } from 'react'
import { FaHeart, FaShare } from 'react-icons/fa'

const ShareTag = ({postID}) => {

return (
	<div className={`badge badge-outline gap-2 px-2 py-0.5 items-center flex cursor-pointer btn-bounce`}>
		<FaShare />
		<p className='font-montserrat text-sm font-bold'>4k</p>
	</div>
  )
}

export default ShareTag