import React from 'react'

const Carousel = ({children}) => {
	return (
		<div>
			<div className="carousel carousel-center space-x-4 max-md:space-x-10 md:p-4 py-4 rounded-lg w-full bg-transparent">
				{children}
			</div>
		</div>
	)
}

export default Carousel