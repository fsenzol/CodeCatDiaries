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
		if (categories.data.staus === 0) {
			return setPosts(categories.data.posts)
		}
		setTimeout(() => {
			handleCategory()
		})
		return setPosts([])
	}

	useEffect(() => {
		handleCategory()
	}, [id])

	return (
		<section className='min-h-screen'>

			{
				posts.length > 0 ? (<div>
					<div className="flex-row flex justify-around w-full flex-wrap gap-3 px-10 min-h-screen">

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