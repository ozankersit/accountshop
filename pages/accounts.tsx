import React, { FC, useState } from "react";
import FilterSection from "../components/FilterSection";

export const Accounts: FC = () => {
  const [color, setColor] = useState("")
  const [colorOption, setColorOption] = useState("")
  return (
    <>
      <div className="flex justify-center mt-[50px]">
        <FilterSection/>
        <div className={`deneme flex flex-col justify-center items-center`} style={{background:`${color}`}}>
        <input value={color} name={color} onChange={e => setColor(e.target.value)} />  
      </div>
      <div className={`deneme flex flex-col justify-center items-center`} style={{background:`${colorOption}`}}>  
        <div>
        <select
          value={colorOption}
          onChange={e => setColorOption(e.target.value)}
        >
          <option/>
          <option value="Blue">Blue</option>
          <option value="Red">Red</option>
          <option value="Orange">Orange</option>
        </select>
        </div>
      </div>
      </div>
    </>
  );
};

export default Accounts;
