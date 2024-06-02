import { PaginationProps } from "@/interface/ui_props"

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const renderPageNumbers = () => {
    const pageNumbers = []
    let startPage = Math.max(currentPage - 2, 1)
    let endPage = Math.min(currentPage + 2, totalPages)

    if (currentPage <= 3) {
      endPage = 5
    }

    if (currentPage > totalPages - 3) {
      startPage = totalPages - 4
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i > 0 && i <= totalPages) {
        pageNumbers.push(
          <button
            key={i}
            className={`w-[40px] h-[40px] rounded-full ${
              currentPage === i
                ? "bg-red-500 text-white"
                : "border border-red-500 hover:bg-red-400 duration-300"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>,
        )
      }
    }

    return pageNumbers
  }

  return (
    <div className="flex justify-center mt-5 space-x-2">
      <button
        className={`px-4 py-2 bg-red-500 hover:bg-red-400 duration-300 rounded-full ${
          currentPage === 1 ? "cursor-not-allowed" : ""
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        className={`px-4 py-2 bg-red-500 hover:bg-red-400 duration-300 rounded-full ${
          currentPage === totalPages ? "cursor-not-allowed" : ""
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
