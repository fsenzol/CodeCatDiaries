import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ImgRenderer from '../components/ImgRenderer'
import { getAllPostById } from '../api/ApiHandler'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AUTH } from '../utility'
import "../../styles/gruvbox.css"
import Prism from 'prismjs'



const Post = () => {
  const imageRef = useRef()
  const divRef = useRef()

  const [post, setPost] = useState({})
  const { id } = useParams()

  const handlePost = async () => {
    const post = await getAllPostById(id, AUTH.USERNAME, AUTH.PASSWORD, AUTH.URL, AUTH.SECRET)
    setPost(post.data.posts)
  }


  // const calculateAndArrangeSizes = () => {
  //   const content = document.querySelector('.content')
  //   const images = content.querySelectorAll('img')

  //   images.forEach(image => {
  //     const width = image.width
  //     const height = image.height

  //     if (width > height) {
  //       image.classList.add('w-full')
  //     } else {
  //       image.classList.add('h-full')
  //     }
  //   })  
  // }

  const calculateMargin = () => {
    if (!imageRef.current) return
    return divRef.current.style.marginTop = `${imageRef.current.clientHeight}px`
  }


  useEffect(() => {
    handlePost()
  
  }, [])

  useEffect(() => {
    window.addEventListener('resize', calculateMargin)
    return () => window.removeEventListener('resize', calculateMargin)
  }, [])


  useEffect(() => {
    Prism.highlightAll()
    calculateMargin()
  }, [post])

  const postBody = () => (
    <>
      <div>
        <img
          src={post.featured_image}
          alt={post.slug || 'image'}
          ref={imageRef}
          className="w-full absolute inset-0 -z-10 max-h-[500px] object-fit rounded-b-md"
        />

      </div>

      <div className={`flex flex-col gap-4 px-2 justify-center`} ref={divRef}>
        <h3 className="post-text-date py-2">Published: {new Date(post.created_at).toLocaleString()}</h3>
        <h1 className="text-4xl font-bold my-4">{post.title}</h1>
        <p className="font-roboto font-semibold">{post.summary}</p>

        <div className="font-lato flex flex-1 flex-col grow leading-normal tracking-normal mb-10">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-4 text-pretty" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold my-2 text-pretty" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-semibold my-1 text-pretty" {...props} />,
              strong: ({ node, ...props }) => <strong className="font-bold text-lg leading-relaxed" {...props} />,
              em: ({ node, ...props }) => <em className="italic" {...props} />,
              p: ({ node, ...props }) => <p className="my-4 text-base leading-relaxed" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc pl-6" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal pl-3 font-semibold text-lg leading-relaxed my-2" {...props} />,
              a: ({ node, ...props }) => <a className="text-link underline hover:text-green-700" {...props} />,
              img: ({ src, alt }) => <ImgRenderer src={src} alt={alt} />,

              code: ({ node, inline, className, children, ...props }) => {
                if (inline) {
                  return <code className="bg-black px-1 shadow-xl py-0.5 rounded text-sm font-lato text-gray-800" {...props}>{children}</code>;
                }
                return (
                  <pre className="bg-black text-white p-4 rounded-md font-lato shadow-xl overflow-x-auto">
                    <code className={className} {...props}>{children}</code>
                  </pre>
                );
              },

            }}

          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  )

  return (
    <section className="min-h-screen">
      {post.title ? postBody() : (
        <div className='w-full h-screen flex justify-center items-center'>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </section>
  )
}

export default Post
