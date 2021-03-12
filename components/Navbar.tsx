import Link from 'next/link';
import {useState} from "react";

export default function Navbar({ activePage="" }: {
  activePage: string
}): JSX.Element {
  let [MenuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-800 p-2 w-full fixed">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" onClick={()=>setMenuOpen(!MenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" passHref>
                <a className="text-white text-xl">
                  School clock
                </a>
              </Link>
            </div>
          </div>
          <div className="absolute hidden sm:block inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex space-x-4">
              <Link href="/" passHref>
                <a className={activePage.toLowerCase() == 'hs'?"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold":"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>High school</a>
              </Link>
              <Link href="/ms" passHref>
                <a className={activePage.toLowerCase() == 'ms'?"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold":"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Middle school</a>
              </Link>
              <Link href="/pal" passHref>
                <a className={activePage.toLowerCase() == 'pal'?"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-bold":"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Palmyra high school</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={MenuOpen?"sm:hidden":"hidden"} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" passHref>
            <a className={activePage.toLowerCase() == 'hs'?"bg-gray-900 block text-white px-3 py-2 rounded-md text-sm font-bold":"text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>High school</a>
          </Link>
          <Link href="/ms" passHref>
            <a className={activePage.toLowerCase() == 'ms'?"bg-gray-900 block text-white px-3 py-2 rounded-md text-sm font-bold":"text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Middle school</a>
          </Link>
          <Link href="/pal" passHref>
            <a className={activePage.toLowerCase() == 'pal'?"bg-gray-900 block text-white px-3 py-2 rounded-md text-sm font-bold":"text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Palmyra high school</a>
          </Link>
          <Link href="/wths" passHref>
            <a className={activePage.toLowerCase() == 'wths'?"bg-gray-900 block text-white px-3 py-2 rounded-md text-sm font-bold":"text-gray-300 block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>WTHS</a>
          </Link>
        </div>
      </div>
    </nav>

  );
}
