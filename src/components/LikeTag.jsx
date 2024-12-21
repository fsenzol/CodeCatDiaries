import React from 'react'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const LikeTag = ({postID}) => {
const [clicked, setClicked] = useState(false)

return (
	<div className={`badge badge-outline gap-2 px-2 py-0.5 items-center flex shadow-lg cursor-pointer btn-bounce`}
		onClick={() => setClicked(f => !f)}>
		<FaHeart className={`${clicked && 'fill-red-500'}`}/>
		<p className={`font-montserrat text-sm font-bold`}>4k</p>
	</div>
  )
}

export default LikeTag