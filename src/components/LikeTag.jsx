import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { likePost, UnlikePost } from '../api/ApiHandler';

const LikeTag = ({ _id, likes }) => {
    const [liked, setLiked] = useState(localStorage.getItem(`liked-${_id}`) === 'true'); 
    const [lvalue, setLvalue] = useState(likes);

    const parseLikes = () => {
        const likeNumber = lvalue * 1 || 0;
        if (likeNumber > 1000) {
            return `${(likeNumber / 1000).toFixed(1)}k`;
        } else {
            return likeNumber;
        }
    };

    const setLike = (f) => {
        localStorage.setItem(`liked-${_id}`, f);
        setLiked(f);
    };


    const handleLike = async () => {
        if (!liked) {
            setLvalue((prevLValue) => prevLValue + 1);
            setLike(true);

            const res = await likePost(_id);
            if (res.status * 1 !== 0) {
                setLvalue((prevLValue) => prevLValue - 1); 
                setLike(false);
            }
        }
    };

    const handleUnLike = async () => {
        if (liked) {
            setLvalue((prevLValue) => prevLValue > 0 ? prevLValue - 1 : 0); 
            setLike(false);

            const res = await UnlikePost(_id);
            if (res.status * 1 !== 0) {
                setLvalue((prevLValue) => prevLValue + 1);
                setLike(true);
            }
        }
    };

    const handleClick = () => {
        if (liked) {
            handleUnLike();
        } else {
            handleLike();
        }
    };

    return (
        <div
            className={`badge badge-outline gap-2 px-2 py-0.5 items-center flex shadow-lg cursor-pointer btn-bounce`}
            onClick={() => handleClick()}
        >
            <FaHeart className={`${liked && 'fill-red-500'}`} />
            <p className={`font-montserrat text-sm font-bold`}>{parseLikes()}</p>
        </div>
    );
};

export default LikeTag;
