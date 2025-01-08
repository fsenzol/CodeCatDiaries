import axios from "axios"
import { AUTH } from "../utility"

const headers = (auth, secret) => ({
	'Content-Type': 'application/json',
	Authorization: auth || '',
	isAllowed: secret
})


// 0 for success 1 for failure!

export const generateToken = async () => {

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

		const response = await axios.post(`${AUTH.URL}/authors/token`, {
			username: AUTH(process.env).USERNAME,
			password: AUTH.PASSWORD
		}, {
			headers: headers(null, AUTH.SECRET)
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


export const searchAuthorByName = async (author_name) => {
	try {
		const auth = await generateToken()

		const res = await axios.get(`${AUTH.URL}/authors/search/${author_name}`, {
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

export const getAllPosts = async () => {
	try {
		const auth = await generateToken()

		const res = await axios.get(`${AUTH.URL}/posts/`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err && err.response && err.response.data.message || 'Network error' 
		}
	}
}


export const createPost = async (data) => {
	try {
		const auth = await generateToken()

		const res = await axios.post(`${AUTH.URL}/posts/create`, data, {
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

export const getAllPostById = async (id) => {
	try {
		const auth = await generateToken()

		const res = await axios.get(`${AUTH.URL}/posts/${id}`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err && err.response && err.response.data.message || 'Network error' 
		}
	}
}

export const getAllPostByCategory = async (id) => {
	try {
		const auth = await generateToken()

		const res = await axios.get(`${AUTH.URL}/posts/category/${id}`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err && err.response && err.response.data.message || 'Network error' 
		}
	}
}

export const getAllPostByWithRatingsAbove = async (value) => {
	try {
		const auth = await generateToken()

		const res = await axios.get(`${AUTH.URL}/posts/ratings[gte]=${value}}`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err && err.response && err.response.data.message || 'Network error' 
		}
	}
}

//getAllPosts('basedcatx', 'Stylisticboy12@based')

export const getAllPostsBySlug = async (slug) => {
	try {
		const auth = await generateToken()

		const res = await axios.get(`${AUTH.URL}/posts/slug/all/${slug}`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err && err.response && err.response.data.message || 'Network error' 
		}
	}
}


export const getRecentPosts = async (limit) => {
	try {
		const auth = await generateToken()

		const res = await axios.get(`${AUTH.URL}/posts?sort=-created_at&limit=${limit || 4}`, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data.posts
		}
	} catch (err) {
		return {
			status: 1,
			reason: err && err.response && err.response.data.message || 'Network error' 
		}
	}
}

export const getPostsByPagesAndLimit = async (page, limit) => {
	try {
		const auth = await generateToken()

		const res = await axios.get(`${AUTH.URL}/posts?page=${page}&limit=${limit}`, {
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

export const searchPostsByTitle = async (title) => {
	try {
		const auth = await generateToken()

		const res = await axios.get(`${AUTH.URL}/posts/search/${title}`, {
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

export const searchPostsByTag = async (tag) => {
	try {
		const auth = await generateToken()

		const res = await axios.post(`${AUTH.URL}/posts/tag`, {
			tags: [tag]
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

export const getAllCategories = async () => {
	const categories = JSON.parse(localStorage.getItem('categories'))
	if (categories) {
		return {
			status: 0,
			data: categories
		}
	}
	try {
		const auth = await generateToken()

		const res = await axios.get(`${AUTH.URL}/categories`, {
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
			reason: err && err.response && err.response.data.message || 'Network error' 
		}
	}
}


export const likePost = async (id) => {
	try {
		const auth = await generateToken()

		const res = await axios.post(`${AUTH.URL}/posts/reaction/like/${id}`, {},  {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response
		}
	}
}

export const UnlikePost = async (id) => {
	try {
		const auth = await generateToken()

		
		const res = await axios.post(`${AUTH.URL}/posts/reaction/unlike/${id}`, {},  {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response
		}
	}
}

export const ViewPost = async (id) => {
	try {
		const auth = await generateToken()

		
		const res = await axios.post(`${AUTH.URL}/posts/view/${id}`, {}, {
			headers: headers(auth.token)
		})

		return {
			status: 0,
			data: res.data.data
		}
	} catch (err) {
		return {
			status: 1,
			reason: err.response
		}
	}
}
