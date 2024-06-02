"use client"
import { Menu, Transition } from "@headlessui/react"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"
import { Fragment, useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { FaChevronDown, FaRegUserCircle } from "react-icons/fa"
import { RiLogoutCircleLine } from "react-icons/ri"

const MenuProfile = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const [session, setSession] = useState<any>(null!)

  useEffect(() => {
    const token = localStorage.getItem("token")
    token ? setSession(jwtDecode(token)) : router.push("/login")
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsOpen(false)
    toast.success("Logged out successfully")
    router.push("/login")
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center rounded-full w-full border border-gray-300 shadow-sm px-4 py-1 bg-white text-gray-700 hover:bg-gray-200 duration-300"
          id="options-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FaRegUserCircle size={30} />
          <FaChevronDown className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </button>
      </div>

      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu
          as="div"
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            <div>
              <p className="group flex items-center font-bold px-4 pt-2 text-md text-gray-700">
                {session?.username}
              </p>

              <p className="group flex items-center px-4 pb-2 text-sm text-gray-700">
                {session?.email}
              </p>
            </div>

            <div className="border-t border-gray-500"></div>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`${
                    active ? "bg-gray-100" : ""
                  } group flex w-full items-center hover:bg-slate-200 px-4 py-2 text-md text-Red-50`}
                >
                  <RiLogoutCircleLine
                    className="w-5 h-5 mr-2 text-Red-50"
                    aria-hidden="true"
                  />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu>
      </Transition>
    </div>
  )
}

export default MenuProfile
