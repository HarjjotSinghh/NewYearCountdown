import React from 'react'
import { BsGithub } from 'react-icons/bs'

export default function GithubButton() {
  return (
    <a href='https://github.com/HarjjotSinghh/NewYearCountdown' target='_blank' rel='noreferrer'>
      <BsGithub className='absolute top-6 right-6 w-8 h-8 text-[var(--accent)] opacity-80 hover:opacity-100 transition-all hover:scale-110 hover:cursor-pointer' />
    </a>
  )
}
