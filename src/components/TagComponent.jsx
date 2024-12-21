import React from 'react'

const colorPallete = ['accent', 'primary', 'secondary', 'success', 'info', 'error']



const TagComponent = ({tagName}) => {

  return (
	<div className={`flex justify-start items-center w-fit h-fit px-3 rounded-md badge badge-success z-10 font-kanit font-light btn-bounce`}>
		<p className='cursor-pointer text-nowrap text-success-content'>{tagName}</p>
	</div>
  )
}

export default TagComponent