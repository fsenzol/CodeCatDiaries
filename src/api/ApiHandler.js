import axios from "axios"

const headers = (auth, secret) => ({
	'Content-Type': 'application/json',
	Authorization: auth || '',
	isAllowed: secret
})


// 0 for success 1 for failure!

export const generateToken = async (username, password, URL, SECRET) => {

	// try {
	// 	const obj = JSON.parse(localStorage.getItem('tokenJson'))
	// 	if (obj) {
	// 		const date = new Date(obj.date)
	// 		const now = new Date().getTime()
	// 		const diff = now - date
	// 		if ( (diff / 1000 / 60 / 60) <= 23 ) {
	// 			return {
	// 				status: 0,
	// 				token: obj.token
	// 			}
	// 		}
	// 	}
	// } catch (ignore) { }

	try {

		const response = await axios.post(`${URL}/authors/token`, {
			username,
			password
		}, {
			headers: headers(null, SECRET)
		})

		const tokenJson = {
			token: response.data.data.token,
			date: new Date().getTime()
		}

		localStorage.setItem('tokenJson', JSON.stringify(tokenJson))

		return {
			status: 0,
			token: tokenJson.token
		}
	} catch (err) {
		return {
			status: 1,
			error: err.response.data
		}
	}

}


export const searchAuthorByName = async (author_name, username, password, URL, SECRET) => {
	try {
		const auth = await generateToken(username, password, URL, SECRET)

		const res = await axios.get(`${URL}/authors/search/${author_name}`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data.author
		}
	} catch (err) {
		return {
			status: 1,
			data: err.response.data
		}
	}
}




// searchAuthorByName('basedcatx', 'basedcatx', 'Stylisticboy12@based')

export const getAllPosts = async (username, password, URL, SECRET) => {
	try {
		const auth = await generateToken(username, password, URL, SECRET)

		const res = await axios.get(`${URL}/posts/`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response.data.message
		}
	}
}


export const createPost = async (data, username, password, URL, SECRET) => {
	try {
		const auth = await generateToken(username, password, URL, SECRET)

		const res = await axios.post(`${URL}/posts/create`, data, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response.data.reason
		}
	}
}

//getAllPosts('basedcatx', 'Stylisticboy12@based')

export const getAllPostById = async (id, username, password, URL, SECRET) => {
	try {
		const auth = await generateToken(username, password, URL, SECRET)

		const res = await axios.get(`${URL}/posts/${id}`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response.data.message
		}
	}
}

export const getAllPostByCategory = async (id, username, password, URL, SECRET) => {
	try {
		const auth = await generateToken(username, password, URL, SECRET)

		const res = await axios.get(`${URL}/posts/category/${id}`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response.data.message
		}
	}
}

export const getAllPostByWithRatingsAbove = async (value, username, password, URL, SECRET) => {
	try {
		const auth = await generateToken(username, password, URL, SECRET)

		const res = await axios.get(`${URL}/posts/ratings[gte]=${value}}`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response.data.message
		}
	}
}

//getAllPosts('basedcatx', 'Stylisticboy12@based')

export const getAllPostsBySlug = async (slug, username, password, URL, SECRET) => {
	try {
		const auth = await generateToken(username, password, URL, SECRET)

		const res = await axios.post(`${URL}/posts/slug`, {
			slug
		}, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response.data.message
		}
	}
}


export const getRecentPosts = async (limit, username, password, URL, SECRET) => {
	try {
		const auth = await generateToken(username, password, URL, SECRET)

		const res = await axios.get(`${URL}/posts?sort=-created_at&limit=${limit || 4}`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data.posts
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response.data.message
		}
	}
}

export const getPostsByPagesAndLimit = async (page, limit, username, password, URL, SECRET) => {
	try {
		const auth = await generateToken(username, password, URL, SECRET)

		const res = await axios.get(`${URL}/posts?page=${page}&limit=${limit}`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response.data.message
		}
	}
}

export const searchPostsByTitle = async (title, username, password, URL, SECRET) => {
	try {
		const auth = await generateToken(username, password, URL, SECRET)

		const res = await axios.get(`${URL}/posts/search/${title}`, {
			headers: headers(auth.token)
		})

		console.log(res.data)
	} catch (err) {
		return {
			status: 1,
			reason: err.response.data.message
		}
	}
}

export const getAllCategories = async (username, password, URL, SECRET) => {
	const categories = JSON.parse(localStorage.getItem('categories'))
	if (categories) {
		return {
			status: 0,
			data: categories
		}
	}
	try {
		const auth = await generateToken(username, password, URL, SECRET)

		const res = await axios.get(`${URL}/categories`, {
			headers: headers(auth.token)
		})

		localStorage.setItem("categories", JSON.stringify(res.data.data.categories))
		return {
			status: 0,
			data: res.data.data.categories
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response.data.message
		}
	}
}
