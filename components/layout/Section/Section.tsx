import { ReactNode } from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'

export enum SectionHeightEnum {
  MIN_CONTENT = 'h-min',
  FULL_HEIGHT = 'h-screen',
}

export interface SectionProps {
  children: ReactNode
  id: string
  height: SectionHeightEnum
}

const Section = ({ children, id, height }: SectionProps) => {
  return (
    <section id={id} className={`w-full ${height} pt-24 pb-4 md:pb-6 lg:pb-8`}>
      <ContentWrapper>{children}</ContentWrapper>
    </section>
  )
}

export default Section
