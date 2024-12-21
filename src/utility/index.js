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
	USERNAME: import.meta.env.USERNAME,
	PASSWORD: import.meta.env.PASS,
	URL: import.meta.env.API_URL,
	SECRET: import.meta.env.SECRET
}