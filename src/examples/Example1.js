import { getPostsPage } from '../api/axios'
import { useState, useEffect } from 'react'
import Post from '../components/Post'

const Example1 = () => {
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPostsPage(page).then(json => setPosts(json))
    }, [page])

    const content = posts.map(post => <Post key={post.id} post={post} />)

    const nextPage = () => setPage(prev => prev + 1)

    const prevPage = () => setPage(prev => prev - 1)

    return (
        <>
            <div className='max-w-4xl mx-auto my-3 flex justify-between items-center'>
                <h1 className='text-[5rem]'>Posts</h1>
            </div>
            <div className='flex flex-wrap justify-center min-h-[70vh]'>
                {content}
            </div>
            <nav className=' max-w-4xl mx-auto flex justify-between items-center'>
                <button className='bg-gray-100 px-5 py-2 rounded-md my-10 hover:bg-gray-300' onClick={prevPage} disabled={page === 1}>Prev Page</button>
                <span>{page}</span>
                <button className='bg-gray-100 px-5 py-2 rounded-md my-10 hover:bg-gray-300' onClick={nextPage} disabled={page === posts.length}>Next Page</button>
            </nav>
        </>
    )
}
export default Example1