import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [color, setColor] = useState('transparent')

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 80) {
        setColor('black')
      } else {
        setColor('transparent')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])

  return (
    <nav
      className={`fixed w-full z-[5] shadow-sm ease-in duration-300 bg-${color}`}
    >
      <div className="w-full">
        <div className="flex items-center h-20 w-full">
          <div className="flex items-center  mx-20  justify-between w-full">
            <div className="flex justify-center items-center flex-shrink-0 ">
              <h1 className=" font-bold text-2xl cursor-pointer">
                Traveling <span className="text-[#E72542]">To Create</span>
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  activeClass="about"
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-[#E72542] px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  activeClass="works"
                  to="works"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-[#E72542] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </Link>

                <Link
                  activeClass="Services"
                  to="services"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-[#E72542] px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
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
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
