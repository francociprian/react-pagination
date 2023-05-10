import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPantonePage } from '../api/axios'
import Pantone from '../components/Pantone'
import { Link } from 'react-router-dom'

const ExampleReactQuery = () => {
  const [page, setPage] = useState(1)

  const {
    isLoading,
    isError,
    error,
    data: pantone,
    isFetching,
    isPreviousData,
  } = useQuery(['/pantone', page], () => getPantonePage(page), {
    keepPreviousData: true
  })

  if (isLoading) return <div className='h-screen w-screen flex justify-center items-center'><p>Loading Colors..</p></div>

  if (isError) return <div className='h-screen w-screen flex justify-center items-center'> <p>Error: {error.message}</p></div>

  const content = pantone.data.map(pantone => <Pantone key={pantone.id} pantone={pantone} />)

  const lastPage = () => {
    setPage(pantone.total_pages)
  }
  const firstPage = () => {
    setPage(1)
  }

  const nav = (
    <nav className="flex gap-5 justify-center mt-10">
      <button
        className='bg-gray-100 w-20 h-auto m-0 border-none disabled:bg-gray-50 disabled:text-gray-300'
        onClick={firstPage}
        disabled={isPreviousData || page === 1}
      >
        &lt;&lt;
      </button>
      {page}
      <button
        className='bg-gray-100 w-20 h-auto m-0 border-none disabled:bg-gray-50 disabled:text-gray-300'

        onClick={lastPage}
        disabled={isPreviousData || page === pantone.total_pages}
      >
        &gt;&gt;
      </button>
    </nav>
  )

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
      <div className='mx-auto max-w-2xl mt-4'>
        <h1 className='text-[5rem] text-center'>Pantone Colors</h1>

        {isFetching && <span className="loading">Loading...</span>}
        <div className='flex flex-col justify-center items-center m-4'>
          {content}
        </div>
        {nav}
      </div>
    </main>
  )
}
export default ExampleReactQuery;