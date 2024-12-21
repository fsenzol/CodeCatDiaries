import React from 'react'

const ImgRenderer = ({ src, alt, title }) => {
	return (
		<div className='flex flex-col justify-center items-center overflow-hidden rounded-md'>
			<img
				src={src}
				alt={alt || 'image'}
				title={title}
				loading='lazy'
				className='max-w-full h-auto w-full rounded-md object-cover md:h-72 my-4'
			/>
		</div>

	)
}

export default ImgRenderer