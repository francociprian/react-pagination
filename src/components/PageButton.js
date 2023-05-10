const PageButton = ({ pg, setPage }) => {
    return (
    <button 
        className='bg-gray-100 w-10 h-auto m-0 border-none focus:bg-[#ffff76]'  
        onClick={() => setPage(pg)}
        >
            {pg}
        </button>
    
    );
}

export default PageButton