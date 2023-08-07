import Image from 'next/image'

import cx from 'classnames'

import { useState } from 'react'
import ContentWrapper from '../components/layout/ContentWrapper/ContentWrapper'
import Link from 'next/link'

export type Image = {
  id: string
  image: string
  title: string
}

const Photos = ({ images }: { images: Image[] }) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <ContentWrapper>
      <div className="py-4 md:py-6 lg:py-8">
        <a className="text-gray-400 hover:text-white cursor-pointer">
          <Link href="/#works" scroll={false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 -ml-1 w-12 h-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
        </a>
      </div>
      <h1 className="text-white pb-10 font-bold lg:text-8xl md:text-6xl text-4xl">
        We do<br></br>
        <span className="text-transparent lg:text-8xl md:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-[#E72542] to-[#E24336]">
          Photography
        </span>
      </h1>
      <div className="grid grid-cols-1 grid-rows-[480px] gap-4 mb-20 md:grid-cols-2 py-4 md:py-6 lg:py-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className={cx(
              'w-full relative cursor-pointer group aspect-portrait'
            )}
          >
            <Image
              src={image.image}
              alt={image.title}
              loading={'lazy'}
              layout="responsive"
              objectFit="cover"
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

export default Photos
