import React from 'react'

const ImgRenderer = ({ src, alt, title }) => {
	return (
		<div className='flex flex-col justify-center items-center overflow-hidden rounded-md'>
			<img
				src={src}
				alt={alt || 'image'}
				title={title}
				width={300}
				loading='lazy'
				className='object-fit w-full my-4 h-72m'
			/>
		</div>

	)
}

export default ImgRenderer