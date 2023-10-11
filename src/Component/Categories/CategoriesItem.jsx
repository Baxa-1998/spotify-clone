import React from "react";
import style from "../Categories/categories.module.scss";

export const CategoriesItem = ({ id, name, icons }) => {
 
  return (
    <div className={style.item}>
    <h2 className="text-[30px] text-[#fff] font-bold ml-[20px]">{name}</h2>     
      <img src={icons[0]?.url} alt="" />
    </div>
  );
};
