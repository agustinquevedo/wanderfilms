import { useEffect, useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
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
  const [opacity, setOpacity] = useState('opacity-0')

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    const pageTitle = () => {
      if (window.scrollY >= 330) {
        setOpacity('opacity-100')
      } else {
        setOpacity('opacity-0')
      }
    }

    const changeColor = () => {
      if (window.scrollY >= 330) {
        setColor('bg-black')
      } else {
        setColor('')
      }
    }

    const changeSize = () => {
      if (window.scrollY >= 350) {
        setSize('h-16')
      } else {
        setSize('h-20')
      }
    }
    window.addEventListener('scroll', changeColor)
    window.addEventListener('scroll', pageTitle)
    window.addEventListener('scroll', changeSize)
  }, [])

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full ${size} flex items-center z-[5]  ${color} transition-all ease-in duration-300`}
    >
      {({ open }) => (
        <>
          <ContentWrapper className="flex justify-between opa">
            <div className="flex-shrink-0 flex items-center">
              <a onClick={scrollToTop}>
                <h1
                  className={`text-white font-bold text-2xl cursor-pointer ${opacity} transition ease-in duration-300`}
                >
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
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </ContentWrapper>

          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            className={
              'z-[4] sm:hidden absolute top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center bg-black'
            }
          >
            <Disclosure.Panel>
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
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
