import NextImage, { ImageProps as NextImageProps } from 'next/image'

export interface ImageProps extends NextImageProps {
  className?: string
}

function Image({ className, ...props }: ImageProps) {
  return (
    <div
      className={`group relative flex aspect-portrait h-full w-full items-center justify-center overflow-hidden `}
    >
      <NextImage {...props} className={className} />
    </div>
  )
}

export default Image
