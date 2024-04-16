import { Button } from '@/components/ui/button'
import { Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center border-b mb-5 px-12 h-14'>
        <div>
            <Link href="/">Logo</Link>
        </div>
        <div>
            <ul className='flex space-x-4 text-sm'>
                <Link href="/"><Button variant={"ghost"}>Telegram Groups</Button></Link>
                <Link href="/"><Button variant={"ghost"}>Request</Button></Link>
                <Link href="/"><Button variant={"ghost"}>Contact Us</Button></Link>
            </ul>
        </div>
        <div>
        <ul className='flex space-x-6'>
                <Link href="/"><Instagram/></Link>
                <Link href="/"><Linkedin/></Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar