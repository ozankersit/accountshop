import { useRouter } from 'next/router'
import {FC, ReactNode} from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'

interface Props {
    children?:ReactNode,
}

export const Layout:FC<Props> = ({children}) => {
  const router = useRouter();
  const { pathname } = router;

  const hideHeader = pathname.includes('/login') || pathname.includes('/register') || pathname.includes('/recovery');
  const hideFooter = pathname.includes('/login') || pathname.includes('/register') || pathname.includes('/accounts') || pathname.includes('/recovery') || pathname.includes('/profile');

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