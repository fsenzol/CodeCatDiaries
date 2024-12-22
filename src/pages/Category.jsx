import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllPostByCategory } from '../api/ApiHandler'
import Pagination from '../components/Pagination'
import BlockBlogCard from '../components/BlockBlogCard'
import { AUTH, handleSliceForBigPage } from '../utility'

const Category = () => {

	const { id } = useParams()

	const [posts, setPosts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)

	const handleCategory = async () => {
		const categories = await getAllPostByCategory(id, AUTH.USERNAME, AUTH.PASSWORD, AUTH.URL, AUTH.SECRET)
		setPosts(categories.data.posts)
	}

	useEffect(() => {
		handleCategory()
	}, [id])

	return (
		<section className='min-h-screen'>

			{
				posts.length > 0 ? (<div>
					<div className="grid w-full xl:grid-cols-3 md:grid-cols-2 gap-3 max-md:grid-cols-1 max-md:grid-rows-1 px-10 min-h-screen">

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
					<div className='w-full h-screen flex justify-center items-center'>
						<span className="loading loading-ring loading-lg"></span>
					</div>
				)
			}


		</section>
	)
}

export default Category