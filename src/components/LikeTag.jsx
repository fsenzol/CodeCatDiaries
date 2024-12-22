import React, { useEffect } from 'react'
import { useOptimistic } from 'react'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { likePost, UnlikePost } from '../api/ApiHandler'

const LikeTag = ({ _id, likes }) => {
    const [clicked, setClicked] = useState(localStorage.getItem('liked') || false)

    const parseLikes = () => {
        const likeNumber = likes * 1 || 0
        if (likeNumber > 1000) {
            return `${(likeNumber / 1000).toFixed(1)}k`
        } else {
            return likeNumber
        }
    }

    const handleLike = async () => {
        if (!localStorage.getItem('liked')) {
            const res = await likePost(_id)
            console.log(res)
        } else {
            setClicked(false)
        }
    }

    const handleUnLike = async () => {
        if (localStorage.getItem("liked")) {
            const res = await UnlikePost(_id)
            console.log(handleUnLike)
        } else {
            setClicked(true)
        }
    }

    const handleClick = () => {
        handleLike()
        handleUnLike()
    }

    return (
        <div className={`badge badge-outline gap-2 px-2 py-0.5 items-center flex shadow-lg cursor-pointer btn-bounce`}
            onClick={() => handleClick()}>
            <FaHeart className={`${clicked && 'fill-red-500'}`} />
            <p className={`font-montserrat text-sm font-bold`}>{parseLikes()}</p>
        </div>
    )
}

export default LikeTag