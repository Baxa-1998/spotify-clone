import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import style from './SortPanel.module.scss'




export const SortPanel = ({value, onChange}) => {
  const [sortArray, setSortArray] = useState([
    {
      id: 1,
      title: "Custom order",
      symbol: <BsCheckLg />,
      active: true,
      value: 'custom'
    },
    {
      id: 2,
      title: "Title",
      symbol: <AiOutlineArrowUp />,
      active: false, 
      value: 'name'
    },
    {
      id: 3,
      title: "Artist",
      symbol: <AiOutlineArrowUp />,
      active: false, 
      value: 'artist'
    },
    {
      id: 4,
      title: "Album",
      symbol: <AiOutlineArrowUp />,
      active: false, 
      value: 'album'
    },
 
  ]);

  function isActive(sortId) {
   
    const handleSort = sortArray.map((item) => {
      if (item.id === sortId) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setSortArray(handleSort);
  }

  return (
    <select
    className={style.select} 
    onChange={event => onChange(event.target.value)}
    value={value}

    
    >
      <option
        className="text-4 font-medium h-4 flex pl-[10px] items-center "
        disabled
        value=""
      >
        Сортировка
      </option>
      {sortArray.map((item) => (
     
          <option
            className={`pl-[10px] flex items-center justify-between h-10 text-6 font-medium cursor-pointer  ${
              item.active ? "text-green-400" : "text-[#fff]"
            }`}
            value={item.value}
            

          >
            {item.title}  
            <p className={`text-green-400 ${item.active ? "block" : "hidden"}`}>
            {item.symbol}
          </p>
          </option>
        
   
      ))}
    </select>
  );
};
