export const handleSliceForSmallPage = (currentPage) => {
	const itemsPerPage = 6;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = currentPage * itemsPerPage;
	return [startIndex, endIndex];
};


export const handleSliceForBigPage = (currentPage) => {
	const itemsPerPage = 9;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = currentPage * itemsPerPage;
	return [startIndex, endIndex];
};

export const AUTH = {
	USERNAME: import.meta.env.VITE_USERNAME,
	PASSWORD: import.meta.env.VITE_PASS,
	URL: import.meta.env.VITE_API_URL,
	SECRET: import.meta.env.SECRET
}