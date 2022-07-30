import { ReactNode } from 'react'

export interface ContentWrapperProps {
  children: ReactNode
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div className="w-full sm:w-[90%] h-auto mx-[auto] my-0 px-4 md:px-6 lg:px-8">
      {children}
    </div>
  )
}

export default ContentWrapper
