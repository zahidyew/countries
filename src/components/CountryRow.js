import React from 'react'
import CountryItem from './CountryItem'

const CountryRow = ({countries}) => {
   let i = 1;

   return (
      <table>
         <thead>
            <tr>
               <th>No.</th>
               <th>Country</th>
               <th>Flag</th>
            </tr>
         </thead>
         <tbody>
            {countries.map(country => (
               <CountryItem key={country.alpha2Code} row={i++} country={country} />             
            ))} 
         </tbody>         
      </table>
   )
}

export default CountryRow
