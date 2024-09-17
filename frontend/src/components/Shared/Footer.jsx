

import { Instagram, LinkedIn, Telegram, YouTube } from '@mui/icons-material'
import { Facebook, Twitter } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center bg-blue-300 dark:bg-teal-800 text-white z-50">
      <div className="w-1/4 h-full font-bold flex justify-start items-center text-black dark:text-white text-lg"> © LEARNERS 2024</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 '>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md text-black dark:text-white hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Facebook className='h-6 w-6' />
        </a>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md  text-black dark:text-white hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Twitter className='h-6 w-6' />
        </a>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md  text-black dark:text-white hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <YouTube className='h-6 w-6' />
        </a>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md  text-black dark:text-white hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Instagram className='h-6 w-6' />
        </a>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md  text-black dark:text-white hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <LinkedIn className='h-6 w-6' />
        </a>
        <a href='#' target='_blank' className='h-8 w-8 rounded-md  text-black dark:text-white hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Telegram className='h-6 w-6' />
        </a>
      </div>
    </div>
  )
}

export default Footer
