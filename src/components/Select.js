import React, { useState } from 'react'

const Select = ({getChoice}) => {
   const [choice, setChoice] = useState('');

   const handleChange = (input) => {
      //console.log(input.target.value)
      setChoice(input.target.value);
      getChoice(input.target.value);
   }

   return (
      <div className="select-div">
         <select value={choice} onChange={handleChange}>
            <option disabled value=""> Sort by </option>
            <option value="alphabetically"> Alphabetically </option>
            <option value="largest"> Largest population </option>
            <option value="smallest"> Smallest population </option>
         </select>
      </div>
   )
}

export default Select
