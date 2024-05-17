import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white'>
        <div className='container p-12 flex justify-between'>
            <span>
            <Image src="/images/logot.png" alt="DF logo" width={60} height={60} />
                </span>
    <p className='text-slate-600'>
    All rights reserved.
    </p>
    </div></footer>
  )
}

export default Footer