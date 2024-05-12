import React from 'react'
import Link from "next/link";

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {""}
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or jaust want to say hi, I'll try my best to get back to you! 
        </p>
        <div className='socials flex flex-row gap-2'>
            <Link href="github.com">
            </Link>
            <Link href="linkedin.com">
              </Link>  
        </div>
        </div>
        <div>
            <form className='flex flex-col gap-4'>
                <label htmlFor="email" className='text-white'>Your email</label>
                <input type="email" id="email" required placeholder='Jacob@gmail.com' autoComplete="given-name"/>
            </form>
        </div>
    </section>
  )
}
const func = () => {
  return (
    <div >
       you&apos;re free
      </div>
  )}


export default EmailSection