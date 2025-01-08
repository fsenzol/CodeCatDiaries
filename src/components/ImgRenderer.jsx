import React from 'react'
import { TiSpanner } from 'react-icons/ti'

const ImgRenderer = ({ src, alt, title }) => {
	return (
		<span className='flex block flex-col justify-center items-center overflow-hidden rounded-md'>
			<img
				src={src}
				alt={alt || 'image'}
				title={title}
				loading='lazy'
				className='object-fit aspect-auto my-4 h-auto min-w-96 max-h-96 rounded-md'
			/>
		</span>

	)
}

export default ImgRenderer
