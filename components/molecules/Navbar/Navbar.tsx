import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import ContentWrapper from '../../layout/ContentWrapper/ContentWrapper'

const Navbar = () => {
  const [color, setColor] = useState('')
  const [size, setSize] = useState('h-20')

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
    <nav
      className={`fixed w-full ${size} flex items-center z-[5]  shadow-sm ease-in duration-300 ${color}`}
    >
      <ContentWrapper className="flex justify-between">
        <div className="flex justify-center items-center flex-shrink-0 ">
          <h1 className="text-white font-bold text-2xl cursor-pointer">
            Wander <span className="text-[#E72542]">Films</span>
          </h1>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link
              activeClass="Services"
              to="services"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-[#E72542] px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>

            <Link
              activeClass="works"
              to="works"
              smooth={true}
              duration={500}
              className=" text-white cursor-pointer hover:text-[#E72542] px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </Link>

            <Link
              activeClass="about"
              to="about"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-[#E72542] px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>

            <Link
              activeClass="contact"
              to="contact"
              smooth={true}
              duration={800}
              className="cursor-pointer bg-[#E72542] text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </ContentWrapper>
    </nav>
  )
}

export default Navbar
