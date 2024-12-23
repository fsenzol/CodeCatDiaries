import React from 'react'

const MaterialOL = ({ start = 0, children, ...props }) => {
	return (
	  <div {...props}>
		{React.Children.map(children, (child, index) => {
		  if (React.isValidElement(child)) {
			const childContent = child.props.children;
			start++
			return (
			  <div key={index} className='my-2'>
				{/* Custom list item styling */}
				<div className="flex justify-center items-center">
				  <div className="w-full h-[3px] bg-accent" />
				  <div className="border border-2 w-[100px] h-[50px] rounded-full flex items-center justify-center border-accent">
					<p className="p-4 font-kanit font-bold text-xl">{start}</p>
				  </div>
				  <div className="w-full h-[3px] bg-accent" />
				</div>
				<div className="w-full flex p-4 flex-col items-center font-kanit">{childContent}</div>
			  </div>
			);
		  }
		  return null;
		})}
	  </div>
	);
  };
  
  
  
  
  export default MaterialOL