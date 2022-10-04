import {FC, ReactNode} from 'react'
import Footer from '../common/Footer/Footer'
import Header from '../common/Header/Header'

interface Props {
    children?:ReactNode,
}

export const Layout:FC<Props> = ({children}) => {
  return (
    <div>
        <Header/>
        <main className='overflow-hidden relative bg-concrete h-screen min-w-[1280px]'>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout