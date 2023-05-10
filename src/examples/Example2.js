import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPantonePage } from '../api/axios'
import Pantone from '../components/Pantone'

const Example2 = () => {
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

  if (isLoading) return <p>Loading Colors..</p>

  if (isError) return <p>Error: {error.message}</p>

  const content = pantone.data.map(pantone => <Pantone key={pantone.id} pantone={pantone} />)

  const lastPage = () => {
    setPage(pantone.total_pages)
  }
  const firstPage = () => {
    setPage(1)
  }

  // const pagesArray = Array(pantone.total_pages).fill().map((_, index) => index + 1)

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
    <div className='mx-auto max-w-2xl mt-4'>
      
      <h1 className='text-[5rem] text-center'>Pantone Colors</h1>

      {isFetching && <span className="loading">Loading...</span>}
      <div className='flex flex-col justify-center items-center m-4'>
        {content}
      </div>
      {nav}
    </div>
  )
}
export default Example2