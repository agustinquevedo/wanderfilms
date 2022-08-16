import { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Link, animateScroll as scroll } from 'react-scroll'

import { MenuIcon, XIcon } from '@heroicons/react/outline'
import ContentWrapper from '../../layout/ContentWrapper/ContentWrapper'

const navigation = [
  { name: 'Services', href: 'services' },
  { name: 'Works', href: 'works' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
]

export default function Navigation() {
  const [color, setColor] = useState('')
  const [size, setSize] = useState('h-20')

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 80) {
        setColor('bg-black')
        setSize('h-16')
      } else {
        setColor('')
        setSize('h-20')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full ${size} flex items-center z-[5]  shadow-sm ease-in duration-300 ${color}`}
    >
      {({ open }) => (
        <>
          <ContentWrapper className="flex justify-between">
            <div className="flex-shrink-0 flex items-center">
              <a onClick={scrollToTop}>
                <h1 className="text-white font-bold text-2xl cursor-pointer">
                  Wander <span className="text-[#E72542]">Films</span>
                </h1>
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    activeClass={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className="text-white cursor-pointer hover:text-[#E72542] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            {/* Mobile menu button*/}
            <div className="z-[5] flex items-center sm:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </ContentWrapper>

          <Disclosure.Panel className="z-[4] sm:hidden absolute top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center bg-black">
            <div className="px-2 pt-2 pb-3 flex flex-col">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  activeClass={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="text-white text-2xl text-center cursor-pointer hover:text-[#E72542] px-3 py-2 rounded-md font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
