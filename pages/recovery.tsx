import React from 'react'
import DiscordIcon from '../components/Icons/DiscordIcon'
import InstagramIcon from '../components/Icons/InstagramIcon'
import RecoveryForm from '../components/RecoveryForm'
import RightContent from '../components/ui/RightContent'

export const Recovery = () => {
  return (
    <div className="bg-concrete flex flex-row md:justify-between justify-center items-center h-screen">
      <RecoveryForm/>
      <RightContent className="bg-[url('/jannaBg.png')]">
        <div className="text-white text-4xl-bold ml-[90px] mb-[27px] max-w-[733px]">
        <p>Don't Worry</p>
        <p>We Are Together Soon</p>
        </div>
        <div className="ml-[90px] flex gap-[43px] mb-[110px]">
          <InstagramIcon/>
          <DiscordIcon/>
        </div>
      </RightContent>
    </div>
  )
}

export default Recovery