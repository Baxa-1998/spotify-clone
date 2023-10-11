import React from 'react'
import style from '../../Header/Header.module.scss'

export const DropDown = ({dropMenu, logOut}) => {
  return (
    <div className={`${style.dropMenu} ${dropMenu ? style.show : ""}`}>
    <ul>
      <a href="">
        <li>Account</li> <img src="./icons/arrowLeft.svg" alt="" />
      </a>
      <a href="">
        <li>Profile</li>
      </a>
      <a href="">
        <li>Private session</li>
      </a>
      <a href="">
        <li>Settings</li>
      </a>
      <hr className="mt-[2px] opacity-[30%]" />
      <a onClick={logOut} href="">
        <li>Log out</li>
      </a>
    </ul>
  </div>
  )
}
