import React from 'react'
import { Link } from 'react-router'

export default function Header() {
    return (
        <nav className='flex items-center justify-between p-4 bg-black text-white font-bold'>
            <Link to='/' className='text-3xl'>Maria Balwi</Link>
            <div className='flex items-center gap-5 text-lg'>
                <Link to='/about'>about</Link>
                <Link to='/portfolio'>portfolio</Link>
                <Link to='/contact'>contact</Link>
            </div>
        </nav>
    )
}