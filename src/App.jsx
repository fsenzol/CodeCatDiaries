import { useState } from 'react'
import './output.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navigation from './pages/Navigation'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Footer from './pages/Footer'
import Newsletter from './pages/Newsletter'
import Post from './pages/Post'
import test from './constants/test.md'
import { dummyPosts, markdown } from './constants'



function App() {

	return (
		<main>
			<BrowserRouter >
				<Navigation />
				<section className='mt-24'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/home' element={<Home />} />
						<Route path='/blog' element={<Home />} />
						<Route path='/project' element={<Projects />} />
						<Route path='/newsletter' element={<Newsletter />} />
						<Route path='/about' element={<Post markdownText={markdown} title={dummyPosts[0].postTitle} body={dummyPosts[0].postBody} baseImgSrc={dummyPosts[0].postImgUrl} baseDate={new Date().toLocaleDateString()}/>} />
					</Routes>
				</section>
			</BrowserRouter>
			<Footer />
		</main>
	)
}

export default App
