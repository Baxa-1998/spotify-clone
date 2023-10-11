import React from 'react'
import { TopNavbar } from './TopNavbar/TopNavbar'
import { BottomNavbar } from './BottomNavbar/BottomNavbar'
import style from './Navbar.module.scss'

export const Navbar = ({track}) => {
  return (
    <div className='w-[20%] bg-[#000]  text-[#B3B3B3]'>
      <div className={style.navbar}>
      <TopNavbar/>
      <BottomNavbar track={track} />

      </div>

    </div>
  )
}
