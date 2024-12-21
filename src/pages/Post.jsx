import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ImgRenderer from '../components/ImgRenderer'
import { getAllPostById } from '../api/ApiHandler'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AUTH } from '../utility'





const Post = () => {

  const [post, setPost] = useState({})
  const { id } = useParams()

  const handlePost = async () => {
    const post = await getAllPostById(id, AUTH.USERNAME, AUTH.PASSWORD, AUTH.URL, AUTH.SECRET)
    setPost(post.data.posts)

    console.log(post.data)
  }


  useEffect(() => {
    handlePost()
  }, [])


  return (
    <section className="min-h-screen">
      <div>
        <img
          src={post.featured_image}
          alt={post.slug || 'image'}
          className="max-w-h w-full inset-0 h-96 object-cover rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-4 px-4 justify-center md:text-2xl">
        <h3 className="post-text-date py-2">Published: {new Date(post.created_at).toLocaleString()}</h3>
        <h1 className="text-4xl font-bold my-4">{post.title}</h1>
        <p className="font-roboto font-semibold">{post.summary}</p>

        <div className="font-kanit flex flex-1 flex-col grow text-justify leading-normal tracking-normal">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-4 text-pretty" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold my-2 text-pretty" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-semibold my-1 text-pretty" {...props} />,
              strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
              em: ({ node, ...props }) => <em className="italic" {...props} />,
              p: ({ node, ...props }) => <p className="my-4 text-base leading-relaxed" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc pl-6" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal pl-6" {...props} />,
              a: ({ node, ...props }) => <a className="text-link underline hover:text-green-700" {...props} />,
              img: ({ src, alt }) => <ImgRenderer src={src} alt={alt} />,

            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  )
}

export default Post
