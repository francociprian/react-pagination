const Post = ({ post }) => {
    return (
        <article className="m-2 p-2 bg-stone-300 text-black rounded-2xl min-w-[350px] max-w-sm">
            <h2 className="text-xl font-normal first-letter:uppercase">{post.title}</h2>
            <p className="text-md font-light first-letter:uppercase">{post.body}</p>
            <p className="text-xs font-extralight text-right">Post ID: {post.id}</p>
        </article>
    )
}
export default Post