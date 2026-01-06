import { Code2 } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            <footer className="w-full py-4 flex flex-col items-center justify-center text-xl md:2xl: text-white">
                <span>Design & Developed by KK.DEV</span>
                <span className="flex items-center gap-2">
                    © {new Date().getFullYear()} All rights reserved.
                </span>
            </footer>
        </div>
    )
}

export default Footer