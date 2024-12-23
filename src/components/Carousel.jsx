import React from 'react'

const Carousel = ({children}) => {
	return (
		<div>
			<div className="carousel carousel-center rounded-box space-x-4 max-md:space-x-10 md:p-4 py-4 w-full">
				{children}
			</div>
		</div>
	)
}

export default Carousel