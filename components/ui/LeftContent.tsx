import React, { FC } from 'react'

interface Props {
    children?: React.ReactNode;
    className: string;
}

export const LeftContent:FC<Props> = ({
    children,
    className=''
}) => {
  return (
    <>
    <div
    className={`h-screen w-1/2 bg-no-repeat md:flex hidden flex-col justify-end bg-center ${className}`}>
        {children}
    </div>
    </>
  )
}

export default LeftContent