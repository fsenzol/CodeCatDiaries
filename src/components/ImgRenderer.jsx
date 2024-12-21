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
				className='object-fit my-4 max-h-72'
			/>
		</div>

	)
}

export default ImgRenderer