import { useState } from "react"

interface UsePaginationProps {
  totalItems: number
  itemsPerPage: number
}

const usePagination = ({ totalItems, itemsPerPage }: UsePaginationProps) => {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems)

  const handleChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage)
    }
  }

  return { page, totalPages, startIndex, endIndex, handleChange }
}

export default usePagination
