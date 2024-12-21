import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const LikeTag = ({id, likes}) => {
const [clicked, setClicked] = useState(false)

const handleLikes = () => {
    const likeNumber = likes * 1 || 0
    if (likeNumber > 1000) {
        return `${(likeNumber / 1000).toFixed(1)}k`
    } else {
        return likeNumber
    }
}



return (
	<div className={`badge badge-outline gap-2 px-2 py-0.5 items-center flex shadow-lg cursor-pointer btn-bounce`}
		onClick={() => setClicked(f => !f)}>
		<FaHeart className={`${clicked && 'fill-red-500'}`}/>
		<p className={`font-montserrat text-sm font-bold`}>{handleLikes()}</p>
	</div>
  )
}

export default LikeTag