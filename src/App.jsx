
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
import { HelmetProvider } from 'react-helmet-async'



function App() {

	return (
		<main>
			<HelmetProvider>
				<BrowserRouter >
					<Navigation />
					<section className='pt-24'>
						<div className="fixed flex w-full h-96 justify-center items-center rounded-full ">
							<div className='h-full w-full bg-center-radial-blur bg-center border bg-no-repeat bg-blend-overlay blur-[90px]' />
							<div className="h-full w-full bg-center-radial-red bg-center bg-no-repeat bg-blend-overlay blur-[90px]" />
						</div>
						<Routes>
							<Route path='*' element={<Home/>}/>
							<Route path='/home' element={<Home/>}/>
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
			</HelmetProvider>
		</main>
	)
}

export default App
