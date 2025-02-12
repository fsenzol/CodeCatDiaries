import { useEffect, useRef, useState } from "react"
	import { FaSearch } from "react-icons/fa"
	import { useNavigate } from "react-router-dom"

	const SearchBar = () => {
		const [onFocus, setOnFocus] = useState(false)
		const containerRef = useRef()
		const navigate = useNavigate()

		const handleMouseClickOutside = (event) => {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				setOnFocus(false);
			}
		}

		const handleKeyPress = (event) => {
			if (event.key === "Enter") {
				const sQuery = event.target.value.trim()

				if (sQuery && sQuery.length > 0) {
					if (sQuery.charAt(0) === '#') {
						navigate(`/search/tag/${sQuery.substring(1)}`)
					} else {
						navigate(`/search/name/${sQuery}`)
					}
				}
			}
		}

		useEffect(() => {
			document.addEventListener("mousedown", handleMouseClickOutside);
			document.addEventListener("keypress", handleKeyPress);
			return () => {
				document.removeEventListener("mousedown", handleMouseClickOutside)
				document.removeEventListener("keypress", handleKeyPress)
			};
		}, [])

		return (
			<div className="flex items-center justify-end" ref={containerRef}>

				<div onClick={() => setOnFocus(f => !f)}>
					<FaSearch className={`${!onFocus ? 'w-full opacity-100' : 'w-0 opacity-0'} transition-all duration-1000 ease-in-out w-5`} />
				</div>

				<div className={`${onFocus ? ' w-full opacity-100' : 'w-0 opacity-0'} transition-all duration-500 overflow-hidden ease-in-out`}
					onFocus={() => setOnFocus(true)}>
					<label className="input input-ghost flex items-center gap-2 hover:border-base-content">
						<input type="text" className=" max-sm:w-14 h-fit" placeholder="Search"></input>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className={`h-4 w-4 opacity-70`}>
							<path
								fillRule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clipRule="evenodd" />
						</svg>
					</label>
				</div>

			</div>
		)
	}

	export default SearchBar