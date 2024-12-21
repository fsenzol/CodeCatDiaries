import React from 'react'

const Pagination = ({handleLeftClick, handleRightClick, pageValue}) => {


	return (
		<div className="join">
			<button className="join-item btn" onClick={handleLeftClick}>«</button>
			<button className="join-item btn">{pageValue}</button>
			<button className="join-item btn" onClick={handleRightClick}>»</button>
		</div>
	)
}

export default Pagination