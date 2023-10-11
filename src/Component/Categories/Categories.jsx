import React from 'react'
import style from './categories.module.scss'
import { CategoriesItem } from './CategoriesItem'

export const Categories = ({arr}) => {
  return (
    <div className={style.categories}> 
    {arr.map((item, i)=>(
        <CategoriesItem className={style.item} key={i} {...item}/>
    ))}
   
 </div>
    
  )
}
