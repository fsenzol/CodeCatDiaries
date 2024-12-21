import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { FaBarsStaggered} from "react-icons/fa6"

export const DropdownButton = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="dropdown dropdown-left" onClick={() => setIsOpen(true)}>
			<div tabIndex={0} role="button" className="border rounded-full p-1 transition-all duration-100 ease-linear text-nowrap flex flex-1 flex-row">
				<FaBarsStaggered className="hover:fill-neutral-content"/>
			</div>
			<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-4 gap-6 shadow">
				{children}
			</ul>
		</div>
	)
}
