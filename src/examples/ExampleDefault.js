import { getPostsPage } from '../api/axios'
import { useState, useEffect } from 'react'
import Post from '../components/Post'
import { Link } from 'react-router-dom'

const ExampleDefault = () => {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPostsPage(page).then(json => setPosts(json))
  }, [page])

  const content = posts.map(post => <Post key={post.id} post={post} />)

  const nextPage = () => setPage(prev => prev + 1)

  const prevPage = () => setPage(prev => prev - 1)

  return (
    <main>
      <div className='max-w-6xl mx-auto my-4'>
        <Link to="/" className='flex gap-1 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back
        </Link>
      </div>
      <div className='max-w-4xl mx-auto'>
        <div className='my-3 flex justify-between items-center'>
          <h1 className='text-[5rem]'>Posts</h1>
        </div>
        <div className='flex flex-wrap justify-center min-h-[70vh]'>
          {content}
        </div>
        <nav className='flex justify-between items-center'>
          <button className='bg-gray-100 px-5 py-2 rounded-md my-10 hover:bg-gray-300' onClick={prevPage} disabled={page === 1}>Prev Page</button>
          <span>{page}</span>
          <button className='bg-gray-100 px-5 py-2 rounded-md my-10 hover:bg-gray-300' onClick={nextPage} disabled={page === posts.length}>Next Page</button>
        </nav>
      </div>
    </main>
  )
}
export default ExampleDefault;