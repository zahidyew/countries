import React from 'react'
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const CountryItem = ({row, country}) => {
   /* const pageUrl = {
      pathname: "/countrypage/" + country.alpha2Code
   }; */

   const pageUrl = "/countrypage/" + country.alpha2Code

   const imgStyle = {  
      height: '50px',
      width: '85px'
   }; 
   
   const flagColStyle = {
      width: '110px'
   }

   const linkStyle = {
      color: '#cccc00'
   }

   const formatNumber = (num, style) => {
      return num = numeral(num).format(style);
   }

   return (
      <tr>
         <td> {row} </td>
         <td> <Link to={pageUrl} style={linkStyle}> {country.name} </Link>  </td>
         <td> {country.subregion} </td>
         <td> {formatNumber(country.population, '0,0')} </td>
         <td style={flagColStyle}> <img src={country.flag} alt={country.name} style={imgStyle} /> </td>
      </tr>    
   )
}

export default CountryItem
