import React from 'react'
import { GridOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'

const navLinks = [
    {title: "Home", path: "/", active: true},
    {title: "How To", path: "/", active: true},
    {title: "Services", path: "/", active: true},
    {title: "Blog", path: "/", active: true},
    {title: "Contact", path: "/", active: true},
    {title: "Newspaper", path: "/", active: true},
    {title: "About", path: "/", active: true},
]

function Navbar() {
  return (
    <div className='z-[2] w-full my-auto mx-auto h-16 md:px-[200px] px-8 py-10 flex items-center justify-between absolute top-[20px] border border-cyan-500'>
        <span className='text-white text-[28px] font-semibold'>Logo.</span>
        <div className='md:flex hidden items-center gap-7'>
            {navLinks.map((item) => (
                <Link to={item.path} key={item.title}>
                    <span className={`font-medium ${item.active ? "text-blue-400" : "text-white"}`}>{item.title}</span>
                </Link>
            ))}
            <button className='bg-blue-400 rounded-full text-gray-900 px-6 py-3 font-semibold hover:bg-gray-700 hover:text-white'>Book now</button>
        </div>
        <div className="cursor-pointer md:hidden block">
            <GridOutline color={"#fff"}/>
        </div>
    </div>
  )
}

export default Navbar