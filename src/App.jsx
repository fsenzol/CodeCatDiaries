
import './output.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navigation from './pages/Navigation'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Newsletter from './pages/Newsletter'
import Post from './pages/Post'
import Category from './pages/Category'
import About from './pages/About'
import Search from './pages/Search'



function App() {

	return (
		<main>
			<BrowserRouter >
				<Navigation />
				<section className='mt-24'>
					<Routes>
						<Route path='*' element={<Home />} />
						<Route path='/home' element={<Home />} />
						<Route path='/blog' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/category/:id' element={<Category />} />
						<Route path='/newsletter' element={<Newsletter />} />
						<Route path='/posts/:id' element={<Post />} />
						<Route path='/search/name/:name' element={<Search />} />
						<Route path='/search/tag/:tag' element={<Search />} />
					</Routes>
				</section>
			</BrowserRouter>
			<Footer />
		</main>
	)
}

export default App
