import { ReactNode } from 'react'

export interface ContentWrapperProps {
  children: ReactNode
  className?: string
}

const ContentWrapper = ({ children, className }: ContentWrapperProps) => {
  return (
    <div
      className={`w-full max-w-7xl sm:w-[90%]  mx-[auto] my-0 px-4 md:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  )
}

export default ContentWrapper
