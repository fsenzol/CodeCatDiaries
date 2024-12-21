import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ImgRenderer from '../components/ImgRenderer'

const Post = ({ markdownText, baseImgSrc, baseImgAlt, baseDate, title, body }) => {
  return (
    <section className="min-h-screen">
      <div>
        <img
          src={baseImgSrc}
          alt={baseImgAlt || 'image'}
          className="max-w-h w-full inset-0 h-96 object-cover rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-4 px-4 justify-center md:text-2xl">
        <h3 className="post-text-date py-2">Published: {baseDate}</h3>
        <h1 className="text-4xl font-bold my-4">{title}</h1>
        <p className="font-roboto font-semibold">{body}</p>

        <div className="font-kanit flex flex-1 flex-col grow text-justify leading-normal tracking-normal">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => <h1 className="text-4xl font-bold my-4" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-3xl font-bold my-4" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-2xl font-semibold my-4" {...props} />,
              strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
              em: ({ node, ...props }) => <em className="italic" {...props} />,
              p: ({ node, ...props }) => <p className="my-4 text-base leading-relaxed" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc pl-6" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal pl-6" {...props} />,
              img: ({ src, alt }) => <ImgRenderer src={src} alt={alt} />,
            }}
          >
            {markdownText}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  )
}

export default Post
