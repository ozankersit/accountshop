import Link from 'next/link'
import {FC} from 'react'
import HeaderLogoIcon from './HeaderIcons/HeaderLogoIcon'
import { MobileMenuIcon } from './HeaderIcons/MobileMenuIcon'

export const Header:FC = () => {
  return (
    <header className='md:py-[30px] py-[25px] md:px-[150px] px-5 flex justify-between items-center bg-concrete w-full min-w-[1280px]'>
    <Link href="/">
        <HeaderLogoIcon className='mr-[50px]'/>
    </Link>
    <div className='xl:flex hidden justify-center items-center pt-2.5 gap-[50px]'>
        <Link href="/">
            <span className='text-title text-dark cursor-pointer whitespace-nowrap'>Home</span>
        </Link>
        <Link href="/">
            <span className='text-title text-dark cursor-pointer whitespace-nowrap'>Unranked Accounts</span>
        </Link>
        <Link href="/">
            <span className='text-title text-dark cursor-pointer whitespace-nowrap'>How Can I Buy ?</span>
        </Link>
        <Link href="/">
            <span className='text-title text-dark cursor-pointer whitespace-nowrap'>FAQ</span>
        </Link>
        <div className='flex items-center gap-2.5'>
        <Link href="/">
            <span className='text-title text-light-blue cursor-pointer whitespace-nowrap'>Sign in</span>
        </Link>
        <Link href="/">
            <button className='bg-blue-button rounded-[7px] p-2.5 w-[128px] h-[44px] text-title'>Sign Up</button>
        </Link>
        </div>
    </div>
    <div className='xl:hidden flex'>
        <MobileMenuIcon/>
    </div>
    </header>
  )
}

export default Header