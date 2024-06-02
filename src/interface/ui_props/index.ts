export interface ButtonProps {
  onClick?: () => void
  text: string
  className?: string
}

export interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  name?: string
  placeholder?: string
  type?: string
}

export interface ModalButtonProps {
  text: string
  onClick?: () => void
  blue?: string
  red?: string
  type?: "submit" | "button"
}

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}


