import React from 'react'
import { useState } from 'react'
import { FaEye, FaHeart } from 'react-icons/fa'

const ViewTag = ({views}) => {

const handleViews = (views) => {
	const viewNumber = views * 1
	if (viewNumber > 1000) {
		return `${(viewNumber / 1000).toFixed(1)}k`
	} else {
		return viewNumber
	}
}
return (
	<div className={`badge badge-outline gap-2 px-2 py-0.5 items-center flex shadow-lg cursor-pointer btn-bounce`}>
		<FaEye />
		<p className={`font-montserrat text-sm font-bold`}>{handleViews(views)}</p>
	</div>
  )
}

export default ViewTag