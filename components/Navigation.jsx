import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HamburguerIcon from "./HamburgerIcon";
import CrossIcon from "./CrossIcon";

const Navigation = () => {
    const [ toggleOpen, setToggleOpen ] = useState (false)
    const router = useRouter()
    const menuActive = 'px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'
    const menuInactive = 'px-3 py-2 rounded-md text-sm font-medium text-gray-800 focus:outline-none focus:text-white focus:bg-gray-700'
    const menuMobileActive = 'underline m-auto block rounded-md text-base font-medium text-gray-800 focus:outline-none focus:text-white'
    const menuMobileInactive = 'm-auto block rounded-md text-base font-medium text-gray-500 focus:outline-none focus:text-text-gray-700'

    const handleClick = () => {
        setToggleOpen(!toggleOpen)
    }

    return (
        <nav className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <img className="cursor-pointer block sm:block md:hidden lg:hidden xl:hidden h-8 w-8" src="./yema-logo-small.svg" alt="YEMA logo"/>
                            </Link>
                            <Link href="/">
                                <img className="cursor-pointer hidden sm:hidden md:block lg:hidden xl:hidden h-8 w-auto" src="./yema-logo-medium.svg" alt="YEMA logo"/>
                            </Link>
                            <Link href="/">
                                <img className="cursor-pointer hidden sm:hidden md:hidden lg:block xl:block h-8 w-auto" src="./yema-logo-large.svg" alt="YEMA logo"/>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline">
                                <Link href="/">
                                    <a className={ router.pathname === '/' ? menuActive : menuInactive }>Home</a>
                                </Link>
                                <Link href="/about">
                                    <a className={ router.pathname === '/about' ? menuActive : menuInactive }>About Us</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                            onClick={ handleClick }
                        >
                            {
                                !toggleOpen && <HamburguerIcon />
                            }
                        </button>
                    </div>
                </div>
            </div>

            <div className={ toggleOpen ? 'block bg-gray-100 inset-0 z-10 absolute' : 'hidden md:hidden' }>
                <button
                    className="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white top-0 right-0 w-8 h-6 absolute mt-5 mr-5"
                    onClick={ handleClick }
                >
                    {
                        toggleOpen && <CrossIcon />
                    }
                </button>
                <div className="flex flex-col items-center items-baseline w-full h-full text-center">
                    <Link href="/">
                        <a className={ router.pathname === '/' ? menuMobileActive : menuMobileInactive }>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className={ router.pathname === '/about' ? menuMobileActive : menuMobileInactive }>About Us</a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
