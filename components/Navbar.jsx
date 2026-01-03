"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { soundManager } from '@/lib/sound/SoundManager'
import MuteButton from './MuteButton'

const NAV_ITEMS = [
    { label: 'Project', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className='w-full h-fit font-pixel font-light py-4 fixed inset-0 z-90 px-2'>
            <nav className='backdrop-filter backdrop-blur-md mx-auto w-full max-w-5xl flex items-center justify-between rounded-lg'>
                {/* logo */}
                <div
                    onMouseEnter={() => soundManager.play('hover')}
                    onClick={() => soundManager.play('whoosh')}
                    className='w-15 h-15 border-[#3f4178] border-2 bg-[#272575] rounded-lg hover:scale-105'>
                    <Link href={'/'}>
                        <Image src="/images/logo.webp" className="w-full h-full object-center object-cover" height={300} width={300} alt='logo' />
                    </Link>
                </div>
                {/* nav items */}
                <div className='font-gojo uppercase hidden md:flex'>
                    <ul className="flex items-center justify-center gap-6 text-xl">
                        {NAV_ITEMS.map((item) => {
                            const active = pathname === item.href
                            return (
                                <li key={item.href} className='text-2xl hover:scale-105 text-white '>
                                    <Link
                                        onMouseEnter={() => soundManager.play('hover')}
                                        onClick={() => soundManager.play('whoosh')}
                                        href={item.href} prefetch
                                        className={`relative transition-all duration-200 ${active ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
                                    >
                                        <span className='mr-0.5'>
                                            &lt;
                                        </span>
                                        {item.label}
                                        <span className='ml-0.5'>
                                            &gt;
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/* mute btn */}
                <div>
                    <MuteButton/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar