import { useRouter } from 'next/router'
import {FC, ReactNode} from 'react'
import Footer from '../common/Footer/Footer'
import Header from '../common/Header/Header'

interface Props {
    children?:ReactNode,
}

export const Layout:FC<Props> = ({children}) => {
  const router = useRouter();
  const { pathname } = router;

  const hideHeader = pathname.includes('/login') || pathname.includes('/register');
  const hideFooter = pathname.includes('/login') || pathname.includes('/register');

  return (
    <div>
      {/* md:py-28 py-5 */}
        {!hideHeader && <Header/>}
        <main className='overflow-hidden relative bg-concrete'>{children}</main> 
         {!hideFooter && <Footer/>}
    </div>
  )
}

export default Layout