import { useState } from 'react'
import Image from 'next/image'
import cx from 'classnames'
import ContentWrapper from '../components/layout/ContentWrapper/ContentWrapper'

export interface ImageProps {
  image: string
  title: string
  id: string
}

export interface Gallery {
  images: ImageProps[]
}

export default function Photography({ images }: Gallery) {
  const [isLoading, setLoading] = useState(true)

  return (
    <ContentWrapper>
      <div className="grid grid-cols-1 grid-rows-[480px] gap-4 mb-20 md:grid-cols-2 py-4 md:py-6 lg:py-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className={cx(
              'w-full relative cursor-pointer group aspect-portrait'
              // image.width === 1080
              //   ? 'aspect-portrait'
              //   : 'aspect-video col-span-2'
            )}
          >
            <Image
              src={image.image}
              alt={image.title}
              loading={'lazy'}
              layout="responsive"
              objectFit="contain"
              width={1080}
              height={1350}
              className={cx(
                'duration-700 ease-in-out group-hover:opacity-75',
                isLoading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0'
              )}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        ))}
      </div>
    </ContentWrapper>
  )
}

export const getServerSideProps = async () => {
  const params = {
    expression: 'folder=portfolio',
  }
  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join('&')

  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ':' +
            process.env.CLOUDINARY_API_SECRET
        ).toString('base64')}`,
      },
    }
  ).then((r) => r.json())

  console.log('results', results)

  const { resources } = results

  const images = resources.map((resource) => {
    const { width, height } = resource
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    }
  })

  return {
    props: {
      images,
    },
  }
}
