import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllPostsBySlug, searchAuthorByName, searchPostsByTag, searchPostsByTitle } from '../api/ApiHandler'
import slugify from 'slugify'
import BlockBlogCard from '../components/BlockBlogCard'
import { handleSliceForBigPage } from '../utility'
import Pagination from '../components/Pagination'
import notfoundimg from '../assets/notfound.svg'

const Search = () => {
	const { name, tag } = useParams()
	const [posts, setPosts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)


	const handlePostSearchByName = async () => {
		const res = await getAllPostsBySlug(slugify(name))
		console.log(res)
		if (res.status === 0 && res.data.posts.length < 1) {
			return setPosts([-1])
		}
		setPosts(res.data.posts)
	}

	const handlePostSearchByTag = async () => {
		const res = await searchPostsByTag(name)
		if (res.status === 0 && res.data.posts.length < 1) {
			return setPosts([-1])
		}
		console.log(res, name)
	} 

	const handlePost = () => {
		if (posts[0] == -1) {
			return (<div>

				<div className="flex h-screen justify-center items-center">
					<img src={notfoundimg} alt='not-found-freepik' className='w-96'/>
				</div>
			</div>)
		}

		if (posts.length > 0) {
			return (
				<>

					<div className="grid w-full grid-cols-3 gap-3 max-md:grid-cols-1 max-md:grid-rows-1 px-10 min-h-screen">

						{posts.slice(handleSliceForBigPage(currentPage)).map((data, i) => (
							<div key={i}>
								<BlockBlogCard {...data} />
							</div>
						))}
					</div>

					<div className="my-6 w-full border-t-only flex justify-center p-2 border-base-content">
						<Pagination pageValue={currentPage}
							handleLeftClick={() => setCurrentPage((currentPage - 1) < 1 ? 1 : currentPage - 1)}
							handleRightClick={() => setCurrentPage(currentPage + 1)}
						/>
					</div>
				</>

			)
		}

		return (
			<>

				<div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
					<div className="loading loading-ring loading-lg"></div>
					<p className='font-kanit'>If it takes too long, it could be network issues!</p>
				</div>


				<div className="my-6 w-full border-t-only flex justify-center p-2 border-base-content">
					<Pagination pageValue={currentPage}
						handleLeftClick={() => setCurrentPage((currentPage - 1) < 1 ? 1 : currentPage - 1)}
						handleRightClick={() => setCurrentPage(currentPage + 1)}
					/>
				</div>
			</>

		)
	}



	useEffect(() => {

		name && handlePostSearchByName()
		tag && handlePostSearchByTag()

	}, [name, tag])

	return (handlePost())
}


export default Search