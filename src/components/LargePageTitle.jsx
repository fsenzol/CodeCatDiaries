import React from 'react'

const LargePageTitle = ({ font, defaultSize, maxSize, name}) => {
	return (
		<div className={`w-full text-nowrap border-2 text-[120px] select-none max-md:text-[60px] max-lg:text-[80px] 2xl:text-[150px] justify-center items-center flex border-r-0 border-l-0 text-${font} max-sm:text-[40px] max-sm:py-6 py-12 border-base-content`}>
			{name}
		</div>
	)
}

export default LargePageTitle