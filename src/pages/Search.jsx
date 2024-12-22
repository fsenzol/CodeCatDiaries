import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllPostsBySlug, searchAuthorByName, searchPostsByTag, searchPostsByTitle } from '../api/ApiHandler'
import slugify from 'slugify'
import BlockBlogCard from '../components/BlockBlogCard'
import { handleSliceForBigPage } from '../utility'
import Pagination from '../components/Pagination'

const Search = () => {
	const { name, tag } = useParams()
	const [posts, setPosts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)

	const handlePostSearchByName = async () => {
		const res = await getAllPostsBySlug(slugify(name))
		setPosts(res.data.posts)
	}

	const handlePostSearchByTag = async () => {
		const res = await searchPostsByTag(name)
		console.log(res, name)
	}



	useEffect(() => {

		name && handlePostSearchByName()
		tag && handlePostSearchByTag()

	}, [name, tag])

	return (

		<section className='min-h-screen'>
			{
				posts.length > 0 ? (<div>
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

				</div>) : (
					<div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
						<div className="loading loading-ring loading-lg"></div>
						<p>If it takes to long, post might not be found!</p>
					</div>
				)
			}

		</section>
	)
}

export default Search