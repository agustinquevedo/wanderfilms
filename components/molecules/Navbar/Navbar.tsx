import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 shadow-sm bg-white">
      <div className="w-full">
        <div className="flex items-center h-20 w-full">
          <div className="flex items-center  mx-20  justify-between w-full">
            <div className="flex justify-center items-center flex-shrink-0 ">
              <h1 className=" font-bold text-xl cursor-pointer">
                Traveling <span className="text-blue-500">To Create</span>
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  activeClass="about"
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  activeClass="projects"
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Projects
                </Link>

                <Link
                  activeClass="Services"
                  to="services"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>

                <Link
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
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
