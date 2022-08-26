import Image from 'next/image'

import cx from 'classnames'

import { supabase } from '../helpers/supabaseClient'
import { useState } from 'react'
import ContentWrapper from '../components/layout/ContentWrapper/ContentWrapper'
import Link from 'next/link'

export type Image = {
  id: string
  url: string
  title: string
}

const Photos = ({ images }: { images: Image[] }) => {
  const [isLoading, setLoading] = useState(true)

  return (
    <ContentWrapper>
      <div className="py-4 md:py-6 lg:py-8">
        <a className="text-gray-400 hover:text-white cursor-pointer">
          <Link href="/" scroll={false}>
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
      <div className=" grid grid-cols-1 gap-y-10 gap-x-6 mb-20 md:grid-cols-2 py-4 md:py-6 lg:py-8 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {images.map((image) => (
          <a className="group" key={image.id}>
            <div className="w-full relative aspect-[4/5] cursor-pointer">
              <Image
                src={image.url}
                alt={image.title}
                loading={'lazy'}
                layout="responsive"
                objectFit="scale-down"
                width={1080}
                height={1350}
                className={cx(
                  'rounded-lg duration-700 ease-in-out group-hover:opacity-75',
                  isLoading
                    ? 'scale-110 blur-2xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
                )}
                onLoadingComplete={() => setLoading(false)}
              />
            </div>
          </a>
        ))}
      </div>
    </ContentWrapper>
  )
}

export async function getStaticProps() {
  const { data } = await supabase.from('images').select('*')

  return {
    props: {
      images: data,
    },
  }
}

export default Photos
