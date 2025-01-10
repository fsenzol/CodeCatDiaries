import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ImgRenderer from '../components/ImgRenderer'
import { getAllPostById, ViewPost } from '../api/ApiHandler'
import {useCallback, useEffect, useRef, useState} from 'react'
import { useParams } from 'react-router-dom'
import { AUTH } from '../utility'
import "../../styles/gruvbox.css"
import Prism from 'prismjs'
import MaterialOL from '../components/MaterialOL'
import LikeTag from '../components/LikeTag'
import ViewTag from '../components/ViewTag'
import ShareTag from '../components/ShareTag'
import { Helmet } from 'react-helmet-async'




const Post = () => {
  const imageRef = useRef()
  const divRef = useRef()

  const [post, setPost] = useState({})
  const { id } = useParams()

  const handlePost = async () => {
    const post = await getAllPostById(id, AUTH.USERNAME, AUTH.PASSWORD, AUTH.URL, AUTH.SECRET)
    return setPost(post.data.posts)
  }


    const calculateMargin = (() => {
        if (!imageRef.current) {
            return setTimeout(() => {
                calculateMargin()
            }, 1000)
        }
        return divRef.current.style.marginTop = `${imageRef.current.clientHeight}px`
    })



  const updateView = async () => {
    if (!localStorage.getItem(`viewed-${id}`)) {
      localStorage.setItem(`viewed-${id}`, true)
      await ViewPost(id)
    }
  }


  useEffect(() => {
    handlePost().then(r => r)
  }, [id])

  useEffect(() => {
    window.addEventListener('resize', calculateMargin)
    return () => window.removeEventListener('resize', calculateMargin)
  }, [id])


  useEffect(() => {
    Prism.highlightAll()
    calculateMargin()
    updateView()
  }, [id])

  const postBody = () => (
    <>
      <div>
        <img
          src={post.featured_image}
          alt={post.slug || 'image'}
          ref={imageRef}
          className="w-full absolute inset-0 max-h-[500px] object-fit rounded-b-md"
        />

      </div>

      <div className={`flex flex-col gap-4 justify-center sm:px-10 md:px-12 lg:px-16 z-[80px] px-4`} ref={divRef}>
        <h3 className="post-text-date py-2">Published: {new Date(post.created_at).toLocaleString()}</h3>
        <h1 className="text-4xl font-bold my-4">{post.title}</h1>
        <p className="font-roboto font-semibold">{post.summary}</p>

        <div className="flex justify-between">
          <div className='flex justify-start gap-4'>
            <LikeTag likes={post.likes} id={post._id} />
            <ViewTag views={post.views} />
          </div>
          <ShareTag id={post._id} summary={post.summary} title={post.title} />
        </div>

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
              ol: ({ node, ...props }) => <MaterialOL className="list-decimal pl-3 font-semibold text-lg leading-relaxed my-2 mx-auto w-full" {...props} />,
              a: ({ node, ...props }) => <a className="text-link underline hover:text-green-700" {...props} />,
              img: ({ src, alt }) => <ImgRenderer src={src} alt={alt} />,

              code: ({ node, inline, className, children, ...props }) => {
                if (inline) {
                  return <code className="bg-black px-1 shadow-xl py-0.5 rounded text-sm font-lato prose" {...props}>{children}</code>;
                }
                return (
                  <pre className="bg-black prose p-4 rounded-md font-lato shadow-xl overflow-x-auto">
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
      {post.title ? (
        <>
          <Helmet>
            <title>{post.title}</title>
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.summary} />
            <meta property="og:image" content={post.featured_image} />
            <meta property="og:url" content={`${window.location.origin}/posts/${post.id}`} />
            <meta property="og:type" content="article" />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={post.title} />
            <meta property="twitter:description" content={post.summary} />
            <meta property="twitter:image" content={post.featured_image} />
          </Helmet>
          {postBody()}
        </>
      ) : (
        <div className="w-full h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
    </section>
  )
}

export default Post
