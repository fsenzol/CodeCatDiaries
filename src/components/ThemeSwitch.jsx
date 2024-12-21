import { useEffect, useState } from "react";

const ThemeSwitch = () => {
	// Initialize theme from localStorage or default to light
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	const handleThemeChange = (e) => {
		// Change theme based on checkbox checked status (reverse the logic)
		const newTheme = e.target.checked ? "dark" : "light";
		setTheme(newTheme);
		// Store the theme in localStorage
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		// Remove both light and dark classes before adding the new one
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(theme);
	}, [theme]); // Run whenever the theme state changes

	return (
		<label className="flex cursor-pointer gap-1 border border-base-content p-1 rounded-3xl items-center">


			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
			</svg>

			<input
				type="checkbox"
				checked={theme == 'light' ? false : true} // Now checked is when the theme is light
				onChange={handleThemeChange}
				value={'light'}
				className="toggle theme-controller "
			>



			</input>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<circle cx="12" cy="12" r="5" />
				<path
					d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
				/>
			</svg>

		</label>
	);
};

export default ThemeSwitch;


